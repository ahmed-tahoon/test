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
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto copy';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { FlightService } from 'src/flight/flight.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateSeatTwoDto } from './dto/create-seatTwoWay.dto';

// @UseGuards(AuthGuard)
@Controller('seat')
export class SeatController {
  constructor(
    private readonly seatService: SeatService,
    private readonly flightService: FlightService,
  ) {}

  @Post()
  async create(@Body() createSeatDto: CreateSeatDto[]) {
    const flight = await this.flightService.findOne(createSeatDto[0].flightId);
    return this.seatService.create(createSeatDto, flight);
  }

  @Post('/two-way')
  async createTwoWay(@Body() createSeatTwoDto: CreateSeatTwoDto) {
    return this.seatService.createTwoWay(createSeatTwoDto);
  }
  @Get()
  findAll() {
    return this.seatService.findAll();
  }
  @Get('/two-way')
  findAllTwoWay() {
    return this.seatService.findAllToWay();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }
  @Patch(':id/twoway')
  updateTwo(@Param('id') id: string, @Body() updateSeatDto: {price:string}) {
    return this.seatService.updateTwo(+id, updateSeatDto);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
