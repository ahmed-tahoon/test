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
exports.DapartureAirportController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const city_service_1 = require("../city/city.service");
const daparture_airport_service_1 = require("./daparture-airport.service");
const create_daparture_airport_dto_1 = require("./dto/create-daparture-airport.dto");
const update_daparture_airport_dto_1 = require("./dto/update-daparture-airport.dto");
let DapartureAirportController = class DapartureAirportController {
    constructor(dapartureAirportService, city) {
        this.dapartureAirportService = dapartureAirportService;
        this.city = city;
    }
    async create(createDapartureAirportDto) {
        const city = await this.city.findOne(createDapartureAirportDto.city_id);
        return this.dapartureAirportService.create(createDapartureAirportDto, city);
    }
    findAll() {
        return this.dapartureAirportService.findAll();
    }
    findOne(id) {
        return this.dapartureAirportService.findOne(+id);
    }
    update(id, updateDapartureAirportDto) {
        return this.dapartureAirportService.update(+id, updateDapartureAirportDto);
    }
    remove(id) {
        return this.dapartureAirportService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/daparture-airport.entity").DapartureAirport }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_daparture_airport_dto_1.CreateDapartureAirportDto]),
    __metadata("design:returntype", Promise)
], DapartureAirportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/daparture-airport.entity").DapartureAirport] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DapartureAirportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/daparture-airport.entity").DapartureAirport }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DapartureAirportController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/daparture-airport.entity").DapartureAirport }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_daparture_airport_dto_1.UpdateDapartureAirportDto]),
    __metadata("design:returntype", void 0)
], DapartureAirportController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/daparture-airport.entity").DapartureAirport }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DapartureAirportController.prototype, "remove", null);
DapartureAirportController = __decorate([
    (0, common_1.Controller)('daparture-airport'),
    __metadata("design:paramtypes", [daparture_airport_service_1.DapartureAirportService, city_service_1.CityService])
], DapartureAirportController);
exports.DapartureAirportController = DapartureAirportController;
//# sourceMappingURL=daparture-airport.controller.js.map