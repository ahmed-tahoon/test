import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';
import { FlightService } from 'src/flight/flight.service';
import { FlightModule } from 'src/flight/flight.module';
import { SeatToSeat } from './entities/SeatToSeat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seat, SeatToSeat]), FlightModule],
  exports: [SeatModule],

  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
