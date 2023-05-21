import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/country/entities/country.entity';
import { In, Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(@InjectRepository(City) private repo: Repository<City>) {}

  async create(createCityDto: CreateCityDto, country: Country) {
    const City = await this.repo.create(createCityDto);
    City.country = country;

    return this.repo.save(City);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new NotFoundException('City not found');
    }
    const City = await this.repo.find({
      where: { id: In(ids) },
      relations: { flight: true },
    });
    if (!City) {
      throw new NotFoundException('City not found');
    }
    return City;
  }
  async findAll() {
    const City = await this.repo.find({ relations: { flight: true } });
    return City;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new NotFoundException('City not found');
    }
    const City = await this.repo.findOne({
      where: { id },
      relations: { departure_airport: true },
    });
    if (!City) {
      throw new NotFoundException('City not found');
    }
    return City;
  }
  async update(id: number, updateCityDto: UpdateCityDto) {
    const City = await this.findOne(id);
    if (!City) {
      throw new NotFoundException('City not found');
    }
    Object.assign(City, updateCityDto);
    return this.repo.save(City);
  }

  async remove(id: number) {
    const City = await this.findOne(id);
    if (!City) {
      throw new NotFoundException('City not found');
    }
    return this.repo.remove(City);
  }
}
