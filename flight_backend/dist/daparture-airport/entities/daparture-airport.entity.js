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
exports.DapartureAirport = void 0;
const openapi = require("@nestjs/swagger");
const city_entity_1 = require("../../city/entities/city.entity");
const flight_entity_1 = require("../../flight/entities/flight.entity");
const typeorm_1 = require("typeorm");
let DapartureAirport = class DapartureAirport {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, flight: { required: true, type: () => require("../../flight/entities/flight.entity").Flight }, country: { required: true, type: () => String }, city: { required: true, type: () => require("../../city/entities/city.entity").City }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DapartureAirport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DapartureAirport.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => flight_entity_1.Flight, (flight) => flight.departure_airport),
    __metadata("design:type", flight_entity_1.Flight)
], DapartureAirport.prototype, "flight", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], DapartureAirport.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.departure_airport),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", city_entity_1.City)
], DapartureAirport.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DapartureAirport.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DapartureAirport.prototype, "updated_at", void 0);
DapartureAirport = __decorate([
    (0, typeorm_1.Entity)()
], DapartureAirport);
exports.DapartureAirport = DapartureAirport;
//# sourceMappingURL=daparture-airport.entity.js.map