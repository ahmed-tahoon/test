import { IsNumber, IsOptional, IsString } from 'class-validator';
import { DapartureAirport } from 'src/daparture-airport/entities/daparture-airport.entity';

export class CreateFlightDto {
  

  @IsString()
  flight_number: string;

  @IsString()
  arrival_airport: string;
  @IsString()
  departure_time: string;
  @IsString()
  arrival_time: string;
  @IsString()
  duration: string;
  @IsString()
  weight: string;
  @IsNumber()
  company_id: number;
  @IsNumber()
  country_id: number;
  @IsNumber()
  city_id: number;
  @IsNumber()
  @IsOptional()
  departure_airport: DapartureAirport;
}
