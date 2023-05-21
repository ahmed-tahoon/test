import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CityService } from 'src/city/city.service';
import { DapartureAirportService } from './daparture-airport.service';
import { CreateDapartureAirportDto } from './dto/create-daparture-airport.dto';
import { UpdateDapartureAirportDto } from './dto/update-daparture-airport.dto';

@Controller('daparture-airport')
export class DapartureAirportController {
  constructor(private readonly dapartureAirportService: DapartureAirportService,    private readonly city: CityService,
    ) {}

  @Post()
  async create(@Body() createDapartureAirportDto: CreateDapartureAirportDto) {
    const city = await this.city.findOne(createDapartureAirportDto.city_id);
    return this.dapartureAirportService.create(createDapartureAirportDto,city);
  }

  @Get()
  findAll() {
    return this.dapartureAirportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dapartureAirportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDapartureAirportDto: UpdateDapartureAirportDto) {
    return this.dapartureAirportService.update(+id, updateDapartureAirportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dapartureAirportService.remove(+id);
  }
}
