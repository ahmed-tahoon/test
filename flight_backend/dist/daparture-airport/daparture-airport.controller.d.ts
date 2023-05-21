import { CityService } from 'src/city/city.service';
import { DapartureAirportService } from './daparture-airport.service';
import { CreateDapartureAirportDto } from './dto/create-daparture-airport.dto';
import { UpdateDapartureAirportDto } from './dto/update-daparture-airport.dto';
export declare class DapartureAirportController {
    private readonly dapartureAirportService;
    private readonly city;
    constructor(dapartureAirportService: DapartureAirportService, city: CityService);
    create(createDapartureAirportDto: CreateDapartureAirportDto): Promise<import("./entities/daparture-airport.entity").DapartureAirport>;
    findAll(): Promise<import("./entities/daparture-airport.entity").DapartureAirport[]>;
    findOne(id: string): Promise<import("./entities/daparture-airport.entity").DapartureAirport>;
    update(id: string, updateDapartureAirportDto: UpdateDapartureAirportDto): Promise<import("./entities/daparture-airport.entity").DapartureAirport>;
    remove(id: string): Promise<import("./entities/daparture-airport.entity").DapartureAirport>;
}
