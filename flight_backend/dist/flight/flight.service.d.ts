import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { DapartureAirport } from 'src/daparture-airport/entities/daparture-airport.entity';
import { FlightCompany } from 'src/flight-company/entities/flight-company.entity';
import { Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';
export declare class FlightService {
    private repo;
    constructor(repo: Repository<Flight>);
    create(createFlightDto: CreateFlightDto, flightCompany: FlightCompany, country: Country, city: City, Departure_airport: DapartureAirport): Promise<Flight>;
    findAllByIds(ids: []): Promise<Flight[]>;
    findAll(): Promise<Flight[]>;
    findOne(id: number): Promise<Flight>;
    update(id: number, updateFlightDto: UpdateFlightDto): Promise<Flight>;
    remove(id: number): Promise<Flight>;
}
