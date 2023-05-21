"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightCompanyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_flight_company_dto_1 = require("./create-flight-company.dto");
class UpdateFlightCompanyDto extends (0, swagger_1.PartialType)(create_flight_company_dto_1.CreateFlightCompanyDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFlightCompanyDto = UpdateFlightCompanyDto;
//# sourceMappingURL=update-flight-company.dto.js.map