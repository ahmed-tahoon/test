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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const country_entity_1 = require("./entities/country.entity");
let CountryService = class CountryService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createCountryDto) {
        const country = await this.repo.create(createCountryDto);
        return this.repo.save(country);
    }
    async findAllByIds(ids) {
        console.log(ids, 'id');
        if (!ids) {
            throw new common_1.NotFoundException('Country not found');
        }
        const country = await this.repo.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!country) {
            throw new common_1.NotFoundException('Country not found');
        }
        return country;
    }
    async findAll() {
        const country = await this.repo.find({
            relations: ['city', 'city.flight.departure_airport'],
        });
        return country;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.NotFoundException('Country not found');
        }
        const country = await this.repo.findOne({
            where: { id },
            relations: {
                city: true,
            },
        });
        if (!country) {
            throw new common_1.NotFoundException('country not found');
        }
        return country;
    }
    async update(id, updateCountryDto) {
        const country = await this.findOne(id);
        if (!country) {
            throw new common_1.NotFoundException('Country not found');
        }
        Object.assign(country, updateCountryDto);
        return this.repo.save(country);
    }
    async remove(id) {
        const country = await this.findOne(id);
        if (!country) {
            throw new common_1.NotFoundException('Country not found');
        }
        return this.repo.remove(country);
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map