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
exports.SeatController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const seat_service_1 = require("./seat.service");
const update_seat_dto_1 = require("./dto/update-seat.dto");
const flight_service_1 = require("../flight/flight.service");
const create_seatTwoWay_dto_1 = require("./dto/create-seatTwoWay.dto");
let SeatController = class SeatController {
    constructor(seatService, flightService) {
        this.seatService = seatService;
        this.flightService = flightService;
    }
    async create(createSeatDto) {
        const flight = await this.flightService.findOne(createSeatDto[0].flightId);
        return this.seatService.create(createSeatDto, flight);
    }
    async createTwoWay(createSeatTwoDto) {
        return this.seatService.createTwoWay(createSeatTwoDto);
    }
    findAll() {
        return this.seatService.findAll();
    }
    findAllTwoWay() {
        return this.seatService.findAllToWay();
    }
    findOne(id) {
        return this.seatService.findOne(+id);
    }
    update(id, updateSeatDto) {
        return this.seatService.update(+id, updateSeatDto);
    }
    updateTwo(id, updateSeatDto) {
        return this.seatService.updateTwo(+id, updateSeatDto);
    }
    remove(id) {
        return this.seatService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/two-way'),
    openapi.ApiResponse({ status: 201, type: require("./entities/SeatToSeat.entity").SeatToSeat }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seatTwoWay_dto_1.CreateSeatTwoDto]),
    __metadata("design:returntype", Promise)
], SeatController.prototype, "createTwoWay", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/seat.entity").Seat] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/two-way'),
    openapi.ApiResponse({ status: 200, type: [require("./entities/SeatToSeat.entity").SeatToSeat] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findAllTwoWay", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/seat.entity").Seat }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/seat.entity").Seat }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_seat_dto_1.UpdateSeatDto]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/twoway'),
    openapi.ApiResponse({ status: 200, type: require("./entities/SeatToSeat.entity").SeatToSeat }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "updateTwo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/seat.entity").Seat }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatController.prototype, "remove", null);
SeatController = __decorate([
    (0, common_1.Controller)('seat'),
    __metadata("design:paramtypes", [seat_service_1.SeatService,
        flight_service_1.FlightService])
], SeatController);
exports.SeatController = SeatController;
//# sourceMappingURL=seat.controller.js.map