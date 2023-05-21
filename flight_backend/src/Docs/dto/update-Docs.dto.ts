import { PartialType } from '@nestjs/mapped-types';
import { CreateDocsDto } from './create-Docs.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDocsDto extends PartialType(CreateDocsDto) {}
