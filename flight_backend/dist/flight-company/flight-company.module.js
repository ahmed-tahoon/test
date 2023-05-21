"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const flight_company_service_1 = require("./flight-company.service");
const flight_company_controller_1 = require("./flight-company.controller");
const typeorm_1 = require("@nestjs/typeorm");
const flight_company_entity_1 = require("./entities/flight-company.entity");
let FlightCompanyModule = class FlightCompanyModule {
};
FlightCompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([flight_company_entity_1.FlightCompany])],
        controllers: [flight_company_controller_1.FlightCompanyController],
        providers: [flight_company_service_1.FlightCompanyService],
        exports: [flight_company_service_1.FlightCompanyService],
    })
], FlightCompanyModule);
exports.FlightCompanyModule = FlightCompanyModule;
//# sourceMappingURL=flight-company.module.js.map