import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateDocsDto {
  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  doc: string;

  @IsString()
  @IsOptional()
  extra: string;

  @IsNumber()
  user: User;
}
