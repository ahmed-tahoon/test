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

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  username: string;
  // @IsString()
  // phone: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  active: boolean;
}
