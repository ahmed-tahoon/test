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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
const openapi = require("@nestjs/swagger");
const country_entity_1 = require("../../country/entities/country.entity");
const Docs_entity_1 = require("../../Docs/entities/Docs.entity");
const flight_entity_1 = require("../../flight/entities/flight.entity");
const typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "superadmin";
    UserRole["b2badmin"] = "b2badmin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, photo: { required: true, type: () => String }, password: { required: true, type: () => String }, username: { required: true, type: () => String }, role: { required: true, enum: require("./user.entity").UserRole }, active: { required: true, type: () => Boolean }, flight: { required: false, type: () => [require("../../flight/entities/flight.entity").Flight] }, country: { required: false, type: () => [require("../../country/entities/country.entity").Country] }, Docs: { required: true, type: () => require("../../Docs/entities/Docs.entity").Docs } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'test' }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'test' }),
    __metadata("design:type", String)
], User.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserRole,
        default: UserRole.b2badmin,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => flight_entity_1.Flight, (flight) => flight.user, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], User.prototype, "flight", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => country_entity_1.Country, (country) => country.user, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Docs_entity_1.Docs, (Docs) => Docs.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Docs_entity_1.Docs)
], User.prototype, "Docs", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map