import { IsNumber, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateCityDto {
  @IsString()
  name: string;
  @IsNumber()
  country_id: number;
}
