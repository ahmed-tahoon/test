import { Repository } from 'typeorm';
import { CreateFlightCompanyDto } from './dto/create-flight-company.dto';
import { UpdateFlightCompanyDto } from './dto/update-flight-company.dto';
import { FlightCompany } from './entities/flight-company.entity';
export declare class FlightCompanyService {
    private repo;
    constructor(repo: Repository<FlightCompany>);
    create(createFlightCompanyDto: CreateFlightCompanyDto): Promise<FlightCompany>;
    findAllByIds(ids: []): Promise<FlightCompany[]>;
    findAll(): Promise<FlightCompany[]>;
    findAllFlights(id: number): Promise<FlightCompany[]>;
    findOne(id: number): Promise<FlightCompany>;
    update(id: number, updateFlightCompanyDto: UpdateFlightCompanyDto): Promise<FlightCompany>;
    remove(id: number): Promise<FlightCompany>;
}
