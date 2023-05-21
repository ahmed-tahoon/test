"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightModule = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const flight_controller_1 = require("./flight.controller");
const typeorm_1 = require("@nestjs/typeorm");
const flight_entity_1 = require("./entities/flight.entity");
const flight_company_module_1 = require("../flight-company/flight-company.module");
const country_module_1 = require("../country/country.module");
const city_module_1 = require("../city/city.module");
const daparture_airport_module_1 = require("../daparture-airport/daparture-airport.module");
let FlightModule = class FlightModule {
};
FlightModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([flight_entity_1.Flight]),
            flight_company_module_1.FlightCompanyModule,
            country_module_1.CountryModule,
            city_module_1.CityModule,
            daparture_airport_module_1.DapartureAirportModule
        ],
        controllers: [flight_controller_1.FlightController],
        providers: [flight_service_1.FlightService],
        exports: [flight_service_1.FlightService],
    })
], FlightModule);
exports.FlightModule = FlightModule;
//# sourceMappingURL=flight.module.js.map