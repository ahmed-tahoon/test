"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocsDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_Docs_dto_1 = require("./create-Docs.dto");
class UpdateDocsDto extends (0, mapped_types_1.PartialType)(create_Docs_dto_1.CreateDocsDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateDocsDto = UpdateDocsDto;
//# sourceMappingURL=update-Docs.dto.js.map