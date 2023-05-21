import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    create(createCountryDto: CreateCountryDto): Promise<import("./entities/country.entity").Country>;
    findAll(): Promise<import("./entities/country.entity").Country[]>;
    findOne(id: string): Promise<import("./entities/country.entity").Country>;
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<import("./entities/country.entity").Country>;
    remove(id: string): Promise<import("./entities/country.entity").Country>;
}
