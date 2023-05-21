"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupplierDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_supplier_dto_1 = require("./create-supplier.dto");
class UpdateSupplierDto extends (0, swagger_1.PartialType)(create_supplier_dto_1.CreateSupplierDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSupplierDto = UpdateSupplierDto;
//# sourceMappingURL=update-supplier.dto.js.map