"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeatDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_seat_dto_copy_1 = require("./create-seat.dto copy");
class UpdateSeatDto extends (0, swagger_1.PartialType)(create_seat_dto_copy_1.CreateSeatDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSeatDto = UpdateSeatDto;
//# sourceMappingURL=update-seat.dto.js.map