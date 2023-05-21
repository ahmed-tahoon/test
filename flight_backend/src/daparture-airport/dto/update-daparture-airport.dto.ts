import { PartialType } from '@nestjs/swagger';
import { CreateDapartureAirportDto } from './create-daparture-airport.dto';

export class UpdateDapartureAirportDto extends PartialType(CreateDapartureAirportDto) {}
