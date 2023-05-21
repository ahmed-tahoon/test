import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightCompanyService } from 'src/flight-company/flight-company.service';
import { CountryService } from 'src/country/country.service';
import { CityService } from 'src/city/city.service';
import { DapartureAirportService } from 'src/daparture-airport/daparture-airport.service';
export declare class FlightController {
    private readonly flightService;
    private readonly flightCompanyService;
    private readonly countryService;
    private readonly city;
    private readonly departureAirport;
    constructor(flightService: FlightService, flightCompanyService: FlightCompanyService, countryService: CountryService, city: CityService, departureAirport: DapartureAirportService);
    create(createFlightDto: CreateFlightDto): Promise<import("./entities/flight.entity").Flight>;
    findAll(): Promise<import("./entities/flight.entity").Flight[]>;
    findOne(id: string): Promise<import("./entities/flight.entity").Flight>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("./entities/flight.entity").Flight>;
    remove(id: string): Promise<import("./entities/flight.entity").Flight>;
}
