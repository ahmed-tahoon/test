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
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_entity_1 = require("./entities/flight.entity");
let FlightService = class FlightService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createFlightDto, flightCompany, country, city, Departure_airport) {
        const flight = await this.repo.create(createFlightDto);
        flight.company = flightCompany;
        flight.country = country;
        flight.city = city;
        flight.departure_airport = Departure_airport;
        return this.repo.save(flight);
    }
    async findAllByIds(ids) {
        console.log(ids, 'id');
        if (!ids) {
            throw new exceptions_1.UnauthorizedException('unAuthorized');
        }
        const plan = await this.repo.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!plan) {
            throw new exceptions_1.NotFoundException('plan not found');
        }
        return plan;
    }
    async findAll() {
        const flight = await this.repo.find({
            relations: {
                city: true,
                company: true,
                country: true,
                departure_airport: true
            },
        });
        return flight;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new exceptions_1.UnauthorizedException('unAuthorized');
        }
        const flight = await this.repo.findOne({
            where: { id },
            relations: {
                city: true,
                company: true,
                country: true,
            },
        });
        if (!flight) {
            throw new exceptions_1.NotFoundException('flight not found');
        }
        return flight;
    }
    async update(id, updateFlightDto) {
        const flight = await this.findOne(id);
        if (!flight) {
            throw new exceptions_1.NotFoundException('flight not found');
        }
        Object.assign(flight, updateFlightDto);
        return this.repo.save(flight);
    }
    async remove(id) {
        const flight = await this.findOne(id);
        if (!flight) {
            throw new exceptions_1.NotFoundException('flight not found');
        }
        return this.repo.remove(flight);
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_entity_1.Flight)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map