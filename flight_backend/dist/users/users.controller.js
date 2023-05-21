"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const auth_service_1 = require("../auth/auth.service");
const flight_service_1 = require("../flight/flight.service");
const UserCountry_dto_copy_1 = require("./dto/UserCountry.dto copy");
const country_service_1 = require("../country/country.service");
let UsersController = class UsersController {
    constructor(usersService, authService, flightService, countryService) {
        this.usersService = usersService;
        this.authService = authService;
        this.flightService = flightService;
        this.countryService = countryService;
    }
    async getHello(i18n) {
        return await i18n.t('test.HELLO');
    }
    async signup(createUserDto) {
        const user = await this.authService.signup(createUserDto);
        return user;
    }
    async signin(createUserDto) {
        const user = await this.authService.signin(createUserDto);
        return user;
    }
    async signout(session) {
        session.userId = null;
        return 'ok';
    }
    findAll(userRole) {
        console.log(userRole, 'userRole');
        return this.usersService.findAll(userRole);
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    getAllFlight(id) {
        return this.usersService.getAllFlight(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    async flight(id, body) {
        console.log(body.ids, 'ids');
        const flights = await this.flightService.findAllByIds(body === null || body === void 0 ? void 0 : body.ids);
        return this.usersService.AssignFlights(id, flights);
    }
    async country(id, body) {
        console.log(body.ids, 'ids');
        const countries = await this.countryService.findAllByIds(body === null || body === void 0 ? void 0 : body.ids);
        return this.usersService.AssignCountries(id, countries);
    }
    getAllCountries(id) {
        return this.usersService.getAllCountries(+id);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('/trans'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/signup'),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('/signout'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signout", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/user.entity").User] }),
    __param(0, (0, common_1.Query)('userRole')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, serialize_interceptor_1.Serialize)(UserCountry_dto_copy_1.UserCountryDto),
    (0, common_1.Get)(':id/all-flights'),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllFlight", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/flight'),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "flight", null);
__decorate([
    (0, common_1.Post)(':id/country'),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "country", null);
__decorate([
    (0, common_1.Get)(':id/all-countries'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllCountries", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService,
        flight_service_1.FlightService,
        country_service_1.CountryService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map