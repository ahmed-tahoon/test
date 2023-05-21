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
exports.SeatToSeat = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const seat_entity_1 = require("./seat.entity");
let SeatToSeat = class SeatToSeat {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, price: { required: true, type: () => String }, days: { required: true, type: () => String }, seat: { required: true, type: () => require("./seat.entity").Seat }, secondseat: { required: true, type: () => require("./seat.entity").Seat }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SeatToSeat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeatToSeat.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeatToSeat.prototype, "days", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seat_entity_1.Seat, (seat) => seat.seatToSeat),
    __metadata("design:type", seat_entity_1.Seat)
], SeatToSeat.prototype, "seat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seat_entity_1.Seat, (seat) => seat.seatToSeat),
    __metadata("design:type", seat_entity_1.Seat)
], SeatToSeat.prototype, "secondseat", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], SeatToSeat.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], SeatToSeat.prototype, "updated_at", void 0);
SeatToSeat = __decorate([
    (0, typeorm_1.Entity)()
], SeatToSeat);
exports.SeatToSeat = SeatToSeat;
//# sourceMappingURL=SeatToSeat.entity.js.map