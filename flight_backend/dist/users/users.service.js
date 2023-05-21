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
exports.UsersService = exports.UserRole = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "superadmin";
    UserRole["b2badmin"] = "b2badmin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let UsersService = class UsersService {
    constructor(repo) {
        this.repo = repo;
    }
    create(createUserDto) {
        const user = this.repo.create(createUserDto);
        return this.repo.save(user);
    }
    createcode(CreateCodeDto) {
        const user = this.repo.create(CreateCodeDto);
        return this.repo.save(user);
    }
    async findAll(userRole) {
        const users = await this.repo.find({
            where: { role: (0, typeorm_2.Not)(UserRole.admin) },
        });
        return users;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.UnauthorizedException('unAuthorized');
        }
        const user = await this.repo.findOne({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found5');
        }
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.repo.findOne({
            where: { email },
        });
        return user;
    }
    async update(id, updateUser) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        Object.assign(user, updateUser);
        return this.repo.save(user);
    }
    async AssignFlights(id, Flight) {
        const user = await this.repo.findOne({
            where: { id },
            relations: { flight: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        user.flight = Flight;
        return this.repo.save(user);
    }
    async AssignCountries(id, country) {
        const user = await this.repo.findOne({
            where: { id },
            relations: { country: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        user.country = country;
        return this.repo.save(user);
    }
    async getAllFlight(id) {
        const user = await this.repo.findOne({
            where: { id },
            relations: ['flight', 'flight.country', 'flight.city'],
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return user;
    }
    async getAllCountries(id) {
        const user = await this.repo.findOne({
            where: { id },
            relations: ['country', 'country.city.flight.departure_airport'],
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const countriesWithFlights = user.country.filter((country) => {
            if (Array.isArray(country.city)) {
                for (let i = 0; i < country.city.length; i++) {
                    const city = country.city[i];
                    if (city.flight && city.flight.length > 0) {
                        return true;
                    }
                }
            }
            return false;
        });
        const updatedRes = Object.assign(Object.assign({}, user), { country: countriesWithFlights });
        return updatedRes;
    }
    async remove(id) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return this.repo.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map