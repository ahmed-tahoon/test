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
exports.CreateFlightDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const daparture_airport_entity_1 = require("../../daparture-airport/entities/daparture-airport.entity");
class CreateFlightDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { flight_number: { required: true, type: () => String }, arrival_airport: { required: true, type: () => String }, departure_time: { required: true, type: () => String }, arrival_time: { required: true, type: () => String }, duration: { required: true, type: () => String }, weight: { required: true, type: () => String }, company_id: { required: true, type: () => Number }, country_id: { required: true, type: () => Number }, city_id: { required: true, type: () => Number }, departure_airport: { required: true, type: () => require("../../daparture-airport/entities/daparture-airport.entity").DapartureAirport } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "flight_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "arrival_airport", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "departure_time", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "arrival_time", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFlightDto.prototype, "company_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFlightDto.prototype, "country_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFlightDto.prototype, "city_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", daparture_airport_entity_1.DapartureAirport)
], CreateFlightDto.prototype, "departure_airport", void 0);
exports.CreateFlightDto = CreateFlightDto;
//# sourceMappingURL=create-flight.dto.js.map