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
exports.DocsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const Docs_service_1 = require("./Docs.service");
const create_Docs_dto_1 = require("./dto/create-Docs.dto");
const update_Docs_dto_1 = require("./dto/update-Docs.dto");
const Docs_dto_1 = require("./dto/Docs.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const users_service_1 = require("../users/users.service");
let DocsController = class DocsController {
    constructor(DocsService, usersService) {
        this.DocsService = DocsService;
        this.usersService = usersService;
    }
    findAll(ClientId) {
        return this.DocsService.findAll(ClientId);
    }
    async uploadFile(body, req) {
        const User = await this.usersService.findOne(+body.user);
        const product = await this.DocsService.create(Object.assign({}, body), User);
        throw new common_1.HttpException('CREATED', common_1.HttpStatus.CREATED);
    }
    findOne(id) {
        return this.DocsService.findOne(+id);
    }
    update(id, updateDocsDto) {
        return this.DocsService.update(+id, updateDocsDto);
    }
    remove(id) {
        return this.DocsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("../users/entities/user.entity").User }),
    __param(0, (0, common_1.Query)('ClientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Docs_dto_1.CreateDocsDto, Object]),
    __metadata("design:returntype", Promise)
], DocsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/Docs.entity").Docs }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_Docs_dto_1.UpdateDocsDto]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "remove", null);
DocsController = __decorate([
    (0, common_1.Controller)('docs'),
    (0, serialize_interceptor_1.Serialize)(Docs_dto_1.DocsDto),
    __metadata("design:paramtypes", [Docs_service_1.DocsService,
        users_service_1.UsersService])
], DocsController);
exports.DocsController = DocsController;
//# sourceMappingURL=Docs.controller.js.map