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
exports.Flight = void 0;
const openapi = require("@nestjs/swagger");
const city_entity_1 = require("../../city/entities/city.entity");
const country_entity_1 = require("../../country/entities/country.entity");
const daparture_airport_entity_1 = require("../../daparture-airport/entities/daparture-airport.entity");
const flight_company_entity_1 = require("../../flight-company/entities/flight-company.entity");
const seat_entity_1 = require("../../seat/entities/seat.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Flight = class Flight {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, airlines: { required: true, type: () => String }, flight_number: { required: true, type: () => String }, arrival_airport: { required: true, type: () => String }, departure_time: { required: true, type: () => String }, arrival_time: { required: true, type: () => String }, duration: { required: true, type: () => String }, weight: { required: true, type: () => String }, company: { required: true, type: () => require("../../flight-company/entities/flight-company.entity").FlightCompany }, country: { required: true, type: () => require("../../country/entities/country.entity").Country }, departure_airport: { required: true, type: () => require("../../daparture-airport/entities/daparture-airport.entity").DapartureAirport }, city: { required: true, type: () => require("../../city/entities/city.entity").City }, seats: { required: true, type: () => require("../../seat/entities/seat.entity").Seat }, user: { required: false, type: () => [require("../../users/entities/user.entity").User] }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Flight.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Flight.prototype, "airlines", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "flight_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "arrival_airport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "departure_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "arrival_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flight_company_entity_1.FlightCompany, (flightCompany) => flightCompany.flight),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", flight_company_entity_1.FlightCompany)
], Flight.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.flight),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", country_entity_1.Country)
], Flight.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => daparture_airport_entity_1.DapartureAirport, (dapartureAirport) => dapartureAirport.flight),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", daparture_airport_entity_1.DapartureAirport)
], Flight.prototype, "departure_airport", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, (city) => city.flight),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", city_entity_1.City)
], Flight.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seat_entity_1.Seat, (seat) => seat.flight),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", seat_entity_1.Seat)
], Flight.prototype, "seats", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.flight, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'user_flight',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'flight_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Flight.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Flight.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Flight.prototype, "updated_at", void 0);
Flight = __decorate([
    (0, typeorm_1.Entity)()
], Flight);
exports.Flight = Flight;
//# sourceMappingURL=flight.entity.js.map