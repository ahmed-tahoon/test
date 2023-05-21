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
exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const Docs_entity_1 = require("../../Docs/entities/Docs.entity");
class UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, email: { required: true, type: () => String }, username: { required: true, type: () => String }, role: { required: true, type: () => String }, createBy: { required: true, type: () => Number }, Token: { required: true, type: () => String }, Docs: { required: true, type: () => require("../../Docs/entities/Docs.entity").Docs }, flight: { required: true, type: () => [require("../../flight/entities/flight.entity").Flight] } };
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserDto.prototype, "createBy", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "Token", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.Docs),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Docs_entity_1.Docs)
], UserDto.prototype, "Docs", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.flight),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserDto.prototype, "flight", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map