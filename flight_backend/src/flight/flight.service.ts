import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { DapartureAirport } from 'src/daparture-airport/entities/daparture-airport.entity';
import { FlightCompany } from 'src/flight-company/entities/flight-company.entity';
import { In, Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightService {
  constructor(@InjectRepository(Flight) private repo: Repository<Flight>) {}

  async create(
    createFlightDto: CreateFlightDto,
    flightCompany: FlightCompany,
    country: Country,
    city: City,
    Departure_airport:DapartureAirport
  ) {
    const flight = await this.repo.create(createFlightDto);
    flight.company = flightCompany;
    flight.country = country;
    flight.city = city;
    flight.departure_airport=Departure_airport

    return this.repo.save(flight);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new UnauthorizedException('unAuthorized');
    }
    const plan = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    return plan;
  }
  async findAll() {
    const flight = await this.repo.find({
      relations: {
        city: true,
        company: true,
        country: true,
        departure_airport:true
      },
    });
    return flight;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const flight = await this.repo.findOne({
      where: { id },
      relations: {
        city: true,
        company: true,
        country: true,
      },
    });
    if (!flight) {
      throw new NotFoundException('flight not found');
    }
    return flight;
  }
  async update(id: number, updateFlightDto: UpdateFlightDto) {
    const flight = await this.findOne(id);
    if (!flight) {
      throw new NotFoundException('flight not found');
    }
    Object.assign(flight, updateFlightDto);
    return this.repo.save(flight);
  }

  async remove(id: number) {
    const flight = await this.findOne(id);
    if (!flight) {
      throw new NotFoundException('flight not found');
    }
    return this.repo.remove(flight);
  }
}
