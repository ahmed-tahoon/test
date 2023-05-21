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
exports.FlightController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const create_flight_dto_1 = require("./dto/create-flight.dto");
const update_flight_dto_1 = require("./dto/update-flight.dto");
const flight_company_service_1 = require("../flight-company/flight-company.service");
const country_service_1 = require("../country/country.service");
const city_service_1 = require("../city/city.service");
const daparture_airport_service_1 = require("../daparture-airport/daparture-airport.service");
let FlightController = class FlightController {
    constructor(flightService, flightCompanyService, countryService, city, departureAirport) {
        this.flightService = flightService;
        this.flightCompanyService = flightCompanyService;
        this.countryService = countryService;
        this.city = city;
        this.departureAirport = departureAirport;
    }
    async create(createFlightDto) {
        const flightCompanyService = await this.flightCompanyService.findOne(createFlightDto.company_id);
        const countryService = await this.countryService.findOne(createFlightDto.country_id);
        const departureAirport = await this.departureAirport.findOne(+createFlightDto.departure_airport);
        const city = await this.city.findOne(createFlightDto.city_id);
        return this.flightService.create(createFlightDto, flightCompanyService, countryService, city, departureAirport);
    }
    findAll() {
        return this.flightService.findAll();
    }
    findOne(id) {
        return this.flightService.findOne(+id);
    }
    update(id, updateFlightDto) {
        return this.flightService.update(+id, updateFlightDto);
    }
    remove(id) {
        return this.flightService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/flight.entity").Flight }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_dto_1.CreateFlightDto]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/flight.entity").Flight] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flight.entity").Flight }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flight.entity").Flight }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flight_dto_1.UpdateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flight.entity").Flight }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "remove", null);
FlightController = __decorate([
    (0, common_1.Controller)('flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        flight_company_service_1.FlightCompanyService,
        country_service_1.CountryService,
        city_service_1.CityService,
        daparture_airport_service_1.DapartureAirportService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map