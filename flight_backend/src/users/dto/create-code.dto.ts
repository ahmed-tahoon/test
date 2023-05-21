import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export enum UserRole {
  admin = 'superadmin',
  b2badmin = 'b2badmin',
}
export class CreateCodeDto {
  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  type: UserRole;
}
