import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/city/entities/city.entity';
import { In, Repository } from 'typeorm';
import { CreateDapartureAirportDto } from './dto/create-daparture-airport.dto';
import { UpdateDapartureAirportDto } from './dto/update-daparture-airport.dto';
import { DapartureAirport } from './entities/daparture-airport.entity';

@Injectable()
export class DapartureAirportService {
  constructor(@InjectRepository(DapartureAirport) private repo: Repository<DapartureAirport>) {}

  async create(createDapartureAirportDto: CreateDapartureAirportDto,city:City) {
    const departureAirport = await this.repo.create(createDapartureAirportDto);
    departureAirport.city=city

    return this.repo.save(departureAirport);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new NotFoundException('departureAirport not found');
    }
    const departureAirport = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!departureAirport) {
      throw new NotFoundException('departureAirport not found');
    }
    return departureAirport;
  }
  async findAll() {
    const departureAirport = await this.repo.find({ relations: {
        city: true,
      }, });
    return departureAirport;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new NotFoundException('departureAirport not found');
    }
    const departureAirport = await this.repo.findOne({
      where: { id },
    
    });
    if (!departureAirport) {
      throw new NotFoundException('departureAirport not found');
    }
    return departureAirport;
  }
  async update(id: number, updateDapartureAirportDto: UpdateDapartureAirportDto) {
    const departureAirport = await this.findOne(id);
    if (!departureAirport) {
      throw new NotFoundException('departureAirport not found');
    }
    Object.assign(departureAirport, updateDapartureAirportDto);
    return this.repo.save(departureAirport);
  }

  async remove(id: number) {
    const departureAirport = await this.findOne(id);
    if (!departureAirport) {
      throw new NotFoundException('departureAirport not found');
    }
    return this.repo.remove(departureAirport);
  }

}
