"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDapartureAirportDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_daparture_airport_dto_1 = require("./create-daparture-airport.dto");
class UpdateDapartureAirportDto extends (0, swagger_1.PartialType)(create_daparture_airport_dto_1.CreateDapartureAirportDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateDapartureAirportDto = UpdateDapartureAirportDto;
//# sourceMappingURL=update-daparture-airport.dto.js.map