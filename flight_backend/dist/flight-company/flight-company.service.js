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
exports.FlightCompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_company_entity_1 = require("./entities/flight-company.entity");
let FlightCompanyService = class FlightCompanyService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createFlightCompanyDto) {
        const flightCompoany = await this.repo.create(createFlightCompanyDto);
        return this.repo.save(flightCompoany);
    }
    async findAllByIds(ids) {
        console.log(ids, 'id');
        if (!ids) {
            throw new common_1.NotFoundException('flight Compoany not found');
        }
        const flightCompoany = await this.repo.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!flightCompoany) {
            throw new common_1.NotFoundException('flight Compoany not found');
        }
        return flightCompoany;
    }
    async findAll() {
        const flightCompoany = await this.repo.find({});
        return flightCompoany;
    }
    async findAllFlights(id) {
        const flightCompoany = await this.repo.find({
            where: { id },
            relations: { flight: true },
        });
        return flightCompoany;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.NotFoundException('flight Compoany not found');
        }
        const flightCompoany = await this.repo.findOne({ where: { id } });
        if (!flightCompoany) {
            throw new common_1.NotFoundException('flightCompoany not found');
        }
        return flightCompoany;
    }
    async update(id, updateFlightCompanyDto) {
        const flightCompoany = await this.findOne(id);
        if (!flightCompoany) {
            throw new common_1.NotFoundException('flight Compoany not found');
        }
        Object.assign(flightCompoany, updateFlightCompanyDto);
        return this.repo.save(flightCompoany);
    }
    async remove(id) {
        const flightCompoany = await this.findOne(id);
        if (!flightCompoany) {
            throw new common_1.NotFoundException('flight Compoany not found');
        }
        return this.repo.remove(flightCompoany);
    }
};
FlightCompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_company_entity_1.FlightCompany)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightCompanyService);
exports.FlightCompanyService = FlightCompanyService;
//# sourceMappingURL=flight-company.service.js.map