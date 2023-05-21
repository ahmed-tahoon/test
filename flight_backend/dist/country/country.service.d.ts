import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
export declare class CountryService {
    private repo;
    constructor(repo: Repository<Country>);
    create(createCountryDto: CreateCountryDto): Promise<Country>;
    findAllByIds(ids: []): Promise<Country[]>;
    findAll(): Promise<Country[]>;
    findOne(id: number): Promise<Country>;
    update(id: number, updateCountryDto: UpdateCountryDto): Promise<Country>;
    remove(id: number): Promise<Country>;
}
