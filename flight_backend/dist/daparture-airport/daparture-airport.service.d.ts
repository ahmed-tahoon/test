import { City } from 'src/city/entities/city.entity';
import { Repository } from 'typeorm';
import { CreateDapartureAirportDto } from './dto/create-daparture-airport.dto';
import { UpdateDapartureAirportDto } from './dto/update-daparture-airport.dto';
import { DapartureAirport } from './entities/daparture-airport.entity';
export declare class DapartureAirportService {
    private repo;
    constructor(repo: Repository<DapartureAirport>);
    create(createDapartureAirportDto: CreateDapartureAirportDto, city: City): Promise<DapartureAirport>;
    findAllByIds(ids: []): Promise<DapartureAirport[]>;
    findAll(): Promise<DapartureAirport[]>;
    findOne(id: number): Promise<DapartureAirport>;
    update(id: number, updateDapartureAirportDto: UpdateDapartureAirportDto): Promise<DapartureAirport>;
    remove(id: number): Promise<DapartureAirport>;
}
