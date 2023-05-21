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
exports.City = void 0;
const openapi = require("@nestjs/swagger");
const country_entity_1 = require("../../country/entities/country.entity");
const daparture_airport_entity_1 = require("../../daparture-airport/entities/daparture-airport.entity");
const flight_entity_1 = require("../../flight/entities/flight.entity");
const typeorm_1 = require("typeorm");
let City = class City {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, flight: { required: true, type: () => require("../../flight/entities/flight.entity").Flight }, country: { required: true, type: () => require("../../country/entities/country.entity").Country }, departure_airport: { required: true, type: () => require("../../daparture-airport/entities/daparture-airport.entity").DapartureAirport }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => flight_entity_1.Flight, (flight) => flight.city),
    __metadata("design:type", flight_entity_1.Flight)
], City.prototype, "flight", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.city),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", country_entity_1.Country)
], City.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => daparture_airport_entity_1.DapartureAirport, (DapartureAirport) => DapartureAirport.city),
    __metadata("design:type", daparture_airport_entity_1.DapartureAirport)
], City.prototype, "departure_airport", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], City.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], City.prototype, "updated_at", void 0);
City = __decorate([
    (0, typeorm_1.Entity)()
], City);
exports.City = City;
//# sourceMappingURL=city.entity.js.map