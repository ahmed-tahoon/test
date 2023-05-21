import { PartialType } from '@nestjs/swagger';
import { CreateSeatDto } from './create-seat.dto copy';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {}
