"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DapartureAirportModule = void 0;
const common_1 = require("@nestjs/common");
const daparture_airport_service_1 = require("./daparture-airport.service");
const daparture_airport_controller_1 = require("./daparture-airport.controller");
const typeorm_1 = require("@nestjs/typeorm");
const daparture_airport_entity_1 = require("./entities/daparture-airport.entity");
const city_module_1 = require("../city/city.module");
let DapartureAirportModule = class DapartureAirportModule {
};
DapartureAirportModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([daparture_airport_entity_1.DapartureAirport]), city_module_1.CityModule],
        controllers: [daparture_airport_controller_1.DapartureAirportController],
        providers: [daparture_airport_service_1.DapartureAirportService],
        exports: [daparture_airport_service_1.DapartureAirportService],
    })
], DapartureAirportModule);
exports.DapartureAirportModule = DapartureAirportModule;
//# sourceMappingURL=daparture-airport.module.js.map