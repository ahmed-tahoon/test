import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

import { AppModule } from './app.module';
const cookieSession = require('cookie-session');
const express = require('express');
import { join } from 'path';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', express.static(join(__dirname, '..', 'uploads'))); // <-
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('flight B2B example')
    .setDescription('The flight B2B API description')
    .setVersion('1.0')
    .addTag('flight B2B')
    .setExternalDoc('Postman Collection', '/docs-json')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.use(
    cookieSession({
      keys: ['secret'],
    }),
  );
  await app.listen(5000);
}
bootstrap();
