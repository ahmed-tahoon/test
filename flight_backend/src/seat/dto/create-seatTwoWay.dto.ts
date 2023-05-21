import { IsNumber, IsString } from 'class-validator';

export class CreateSeatTwoDto {
  @IsString()
  price: string;
  @IsNumber()
  seatId: number;
  @IsNumber()
  secondseatId: number;
  @IsString()
  days: string;
}
