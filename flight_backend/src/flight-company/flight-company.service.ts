import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateFlightCompanyDto } from './dto/create-flight-company.dto';
import { UpdateFlightCompanyDto } from './dto/update-flight-company.dto';
import { FlightCompany } from './entities/flight-company.entity';

@Injectable()
export class FlightCompanyService {
  constructor(
    @InjectRepository(FlightCompany) private repo: Repository<FlightCompany>,
  ) {}

  async create(createFlightCompanyDto: CreateFlightCompanyDto) {
    const flightCompoany = await this.repo.create(createFlightCompanyDto);

    return this.repo.save(flightCompoany);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new NotFoundException('flight Compoany not found');
    }
    const flightCompoany = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!flightCompoany) {
      throw new NotFoundException('flight Compoany not found');
    }
    return flightCompoany;
  }
  async findAll() {
    const flightCompoany = await this.repo.find({});
    return flightCompoany;
  }
  async findAllFlights(id: number) {
    const flightCompoany = await this.repo.find({
      where: { id },
      relations: { flight: true },
    });
    return flightCompoany;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new NotFoundException('flight Compoany not found');
    }
    const flightCompoany = await this.repo.findOne({ where: { id } });
    if (!flightCompoany) {
      throw new NotFoundException('flightCompoany not found');
    }
    return flightCompoany;
  }
  async update(id: number, updateFlightCompanyDto: UpdateFlightCompanyDto) {
    const flightCompoany = await this.findOne(id);
    if (!flightCompoany) {
      throw new NotFoundException('flight Compoany not found');
    }
    Object.assign(flightCompoany, updateFlightCompanyDto);
    return this.repo.save(flightCompoany);
  }

  async remove(id: number) {
    const flightCompoany = await this.findOne(id);
    if (!flightCompoany) {
      throw new NotFoundException('flight Compoany not found');
    }
    return this.repo.remove(flightCompoany);
  }
}
