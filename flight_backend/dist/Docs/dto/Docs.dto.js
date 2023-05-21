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
exports.DocsDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const keyify = (obj, prefix = '') => Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
        return res;
    }
    else if (typeof obj[el] === 'object' && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix)];
    }
    return [...res, prefix + el];
}, []);
const translate = (obj, item) => {
    const output = keyify(obj);
    if (Array.isArray(item)) {
        const returnedObj = Object.assign({}, obj);
        for (let index = 0; index < item.length; index++) {
            const result = output.find((itemInsideArr) => itemInsideArr == `${item[index]}_ar` ||
                itemInsideArr == `${item[index]}_en`);
            returnedObj[item[index]] = obj[`${result}`];
            console.log(result);
        }
        return returnedObj;
    }
    else {
        const varToString = (varObj) => Object.keys(varObj);
        const arr = varToString(obj);
        arr.includes(item);
        const result = arr.find((itemInsideArr) => itemInsideArr == `${item}_ar` || itemInsideArr == `${item}_en`);
        return obj[`${result}`];
    }
};
class DocsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, type: { required: true, type: () => String }, doc: { required: true, type: () => String }, extra: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DocsDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DocsDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DocsDto.prototype, "doc", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DocsDto.prototype, "extra", void 0);
exports.DocsDto = DocsDto;
//# sourceMappingURL=Docs.dto.js.map