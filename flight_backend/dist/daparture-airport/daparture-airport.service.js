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
exports.DapartureAirportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const daparture_airport_entity_1 = require("./entities/daparture-airport.entity");
let DapartureAirportService = class DapartureAirportService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createDapartureAirportDto, city) {
        const departureAirport = await this.repo.create(createDapartureAirportDto);
        departureAirport.city = city;
        return this.repo.save(departureAirport);
    }
    async findAllByIds(ids) {
        console.log(ids, 'id');
        if (!ids) {
            throw new common_1.NotFoundException('departureAirport not found');
        }
        const departureAirport = await this.repo.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!departureAirport) {
            throw new common_1.NotFoundException('departureAirport not found');
        }
        return departureAirport;
    }
    async findAll() {
        const departureAirport = await this.repo.find({ relations: {
                city: true,
            }, });
        return departureAirport;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.NotFoundException('departureAirport not found');
        }
        const departureAirport = await this.repo.findOne({
            where: { id },
        });
        if (!departureAirport) {
            throw new common_1.NotFoundException('departureAirport not found');
        }
        return departureAirport;
    }
    async update(id, updateDapartureAirportDto) {
        const departureAirport = await this.findOne(id);
        if (!departureAirport) {
            throw new common_1.NotFoundException('departureAirport not found');
        }
        Object.assign(departureAirport, updateDapartureAirportDto);
        return this.repo.save(departureAirport);
    }
    async remove(id) {
        const departureAirport = await this.findOne(id);
        if (!departureAirport) {
            throw new common_1.NotFoundException('departureAirport not found');
        }
        return this.repo.remove(departureAirport);
    }
};
DapartureAirportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(daparture_airport_entity_1.DapartureAirport)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DapartureAirportService);
exports.DapartureAirportService = DapartureAirportService;
//# sourceMappingURL=daparture-airport.service.js.map