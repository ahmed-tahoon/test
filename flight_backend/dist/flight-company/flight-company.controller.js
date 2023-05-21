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
exports.FlightCompanyController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const flight_company_service_1 = require("./flight-company.service");
const create_flight_company_dto_1 = require("./dto/create-flight-company.dto");
const update_flight_company_dto_1 = require("./dto/update-flight-company.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let FlightCompanyController = class FlightCompanyController {
    constructor(flightCompanyService) {
        this.flightCompanyService = flightCompanyService;
    }
    async create(createFlightCompanyDto, files) {
        var _a, _b;
        return this.flightCompanyService.create(Object.assign(Object.assign({}, createFlightCompanyDto), { logo: (_b = (_a = files === null || files === void 0 ? void 0 : files.logo) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.filename }));
    }
    findAll() {
        return this.flightCompanyService.findAll();
    }
    findOne(id) {
        return this.flightCompanyService.findOne(+id);
    }
    findAllFlights(id) {
        return this.flightCompanyService.findAllFlights(+id);
    }
    update(id, updateFlightCompanyDto) {
        return this.flightCompanyService.update(+id, updateFlightCompanyDto);
    }
    remove(id) {
        return this.flightCompanyService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'logo', maxCount: 1 }], {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/flight-company.entity").FlightCompany }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_company_dto_1.CreateFlightCompanyDto, Object]),
    __metadata("design:returntype", Promise)
], FlightCompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/flight-company.entity").FlightCompany] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightCompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flight-company.entity").FlightCompany }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightCompanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/flights'),
    openapi.ApiResponse({ status: 200, type: [require("./entities/flight-company.entity").FlightCompany] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightCompanyController.prototype, "findAllFlights", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flight-company.entity").FlightCompany }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flight_company_dto_1.UpdateFlightCompanyDto]),
    __metadata("design:returntype", void 0)
], FlightCompanyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flight-company.entity").FlightCompany }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightCompanyController.prototype, "remove", null);
FlightCompanyController = __decorate([
    (0, common_1.Controller)('flight-company'),
    __metadata("design:paramtypes", [flight_company_service_1.FlightCompanyService])
], FlightCompanyController);
exports.FlightCompanyController = FlightCompanyController;
//# sourceMappingURL=flight-company.controller.js.map