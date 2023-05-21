import { Country } from 'src/country/entities/country.entity';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
export declare class CityService {
    private repo;
    constructor(repo: Repository<City>);
    create(createCityDto: CreateCityDto, country: Country): Promise<City>;
    findAllByIds(ids: []): Promise<City[]>;
    findAll(): Promise<City[]>;
    findOne(id: number): Promise<City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<City>;
    remove(id: number): Promise<City>;
}
