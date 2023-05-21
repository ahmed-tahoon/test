import { Module } from '@nestjs/common';
import { FlightCompanyService } from './flight-company.service';
import { FlightCompanyController } from './flight-company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightCompany } from './entities/flight-company.entity';
import { FlightModule } from 'src/flight/flight.module';

@Module({
  imports: [TypeOrmModule.forFeature([FlightCompany])],

  controllers: [FlightCompanyController],
  providers: [FlightCompanyService],
  exports: [FlightCompanyService],

})
export class FlightCompanyModule {}
