"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cookieSession = require('cookie-session');
const express = require('express');
const path_1 = require("path");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/public', express.static((0, path_1.join)(__dirname, '..', 'uploads')));
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('flight B2B example')
        .setDescription('The flight B2B API description')
        .setVersion('1.0')
        .addTag('flight B2B')
        .setExternalDoc('Postman Collection', '/docs-json')
        .build();
    const options = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    app.use(cookieSession({
        keys: ['secret'],
    }));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map