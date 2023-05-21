import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { FlightCompanyService } from 'src/flight-company/flight-company.service';
import { CountryService } from 'src/country/country.service';
import { CityService } from 'src/city/city.service';
import { DapartureAirportService } from 'src/daparture-airport/daparture-airport.service';

//@UseGuards(AuthGuard)
@Controller('flight')
export class FlightController {
  constructor(
    private readonly flightService: FlightService,
    private readonly flightCompanyService: FlightCompanyService,
    private readonly countryService: CountryService,
    private readonly city: CityService,
    private readonly departureAirport: DapartureAirportService,

  ) {}

  //  @UseGuards(AdminGuard)
  @Post()
  async create(@Body() createFlightDto: CreateFlightDto) {
    const flightCompanyService = await this.flightCompanyService.findOne(
      createFlightDto.company_id,
    );
    const countryService = await this.countryService.findOne(
      createFlightDto.country_id,
    );
    const departureAirport = await this.departureAirport.findOne(
      +createFlightDto.departure_airport,
    );
    const city = await this.city.findOne(createFlightDto.city_id);
    return this.flightService.create(
      createFlightDto,
      flightCompanyService,
      countryService,
      city,
      departureAirport

    );
  }

  @Get()
  findAll() {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightService.update(+id, updateFlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightService.remove(+id);
  }
}
