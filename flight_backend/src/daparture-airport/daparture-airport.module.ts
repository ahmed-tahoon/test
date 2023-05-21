import { Module } from '@nestjs/common';
import { DapartureAirportService } from './daparture-airport.service';
import { DapartureAirportController } from './daparture-airport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DapartureAirport } from './entities/daparture-airport.entity';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([DapartureAirport]),CityModule],

  controllers: [DapartureAirportController],
  providers: [DapartureAirportService],
  exports: [DapartureAirportService],

})
export class DapartureAirportModule {}
