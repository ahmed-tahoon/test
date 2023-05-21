import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;
  
  @IsString()
  country: string;
  @IsString()
  city: string;
  @IsString()
  airport_name: string;
  
   @IsString()
  airline_name: string;
  
}

