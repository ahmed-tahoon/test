import { IsOptional, IsString } from 'class-validator';

export class CreateFlightCompanyDto {
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  logo: string;
  @IsString()
  country: string;
  
  @IsString()
  city: string;
}
