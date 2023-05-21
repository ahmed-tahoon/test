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
var Seat_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seat = void 0;
const openapi = require("@nestjs/swagger");
const flight_entity_1 = require("../../flight/entities/flight.entity");
const typeorm_1 = require("typeorm");
const SeatToSeat_entity_1 = require("./SeatToSeat.entity");
let Seat = Seat_1 = class Seat {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, airlines: { required: true, type: () => String }, flight_number: { required: true, type: () => String }, departure_airport: { required: true, type: () => String }, arrival_airport: { required: true, type: () => String }, departure_date: { required: true, type: () => String }, arrival_date: { required: true, type: () => String }, departure_time: { required: true, type: () => String }, arrival_time: { required: true, type: () => String }, duration: { required: true, type: () => String }, weight: { required: true, type: () => String }, total_seat_number: { required: true, type: () => String }, available_seats: { required: true, type: () => String }, suppliers: { required: true, type: () => String }, seat_price_enduser: { required: true, type: () => String }, seat_price_company: { required: true, type: () => String }, flight: { required: true, type: () => require("../../flight/entities/flight.entity").Flight }, seats: { required: true, type: () => [require("./seat.entity").Seat] }, seatToSeat: { required: true, type: () => [require("./SeatToSeat.entity").SeatToSeat] }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "airlines", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "flight_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "departure_airport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "arrival_airport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "departure_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "arrival_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "departure_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "arrival_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "total_seat_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "available_seats", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "suppliers", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "seat_price_enduser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seat.prototype, "seat_price_company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flight_entity_1.Flight, (flight) => flight.seats),
    __metadata("design:type", flight_entity_1.Flight)
], Seat.prototype, "flight", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => Seat_1),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Seat.prototype, "seats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SeatToSeat_entity_1.SeatToSeat, (seatToSeat) => seatToSeat.seat),
    __metadata("design:type", Array)
], Seat.prototype, "seatToSeat", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Seat.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Seat.prototype, "updated_at", void 0);
Seat = Seat_1 = __decorate([
    (0, typeorm_1.Entity)()
], Seat);
exports.Seat = Seat;
//# sourceMappingURL=seat.entity.js.map