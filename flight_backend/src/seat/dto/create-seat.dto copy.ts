import { IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @IsString()
  airlines: string;
  @IsString()
  flight_number: string;
  @IsString()
  departure_airport: string;
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
  @IsString()
  total_seat_number: string;
  @IsString()
  available_seats: string;
  @IsString()
  suppliers: string;
  @IsString()
  seat_price: string;
  @IsNumber()
  flightId: number;
}
