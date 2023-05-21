import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(@InjectRepository(Country) private repo: Repository<Country>) {}

  async create(createCountryDto: CreateCountryDto) {
    const country = await this.repo.create(createCountryDto);

    return this.repo.save(country);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new NotFoundException('Country not found');
    }
    const country = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!country) {
      throw new NotFoundException('Country not found');
    }
    return country;
  }
  async findAll() {
    const country = await this.repo.find({
      relations: ['city', 'city.flight.departure_airport'],
    });
    return country;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new NotFoundException('Country not found');
    }
    const country = await this.repo.findOne({
      where: { id },
      relations: {
        city: true,
      },
    });
    if (!country) {
      throw new NotFoundException('country not found');
    }
    return country;
  }
  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(id);
    if (!country) {
      throw new NotFoundException('Country not found');
    }
    Object.assign(country, updateCountryDto);
    return this.repo.save(country);
  }

  async remove(id: number) {
    const country = await this.findOne(id);
    if (!country) {
      throw new NotFoundException('Country not found');
    }
    return this.repo.remove(country);
  }
}
