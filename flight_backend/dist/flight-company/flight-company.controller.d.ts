/// <reference types="multer" />
import { FlightCompanyService } from './flight-company.service';
import { CreateFlightCompanyDto } from './dto/create-flight-company.dto';
import { UpdateFlightCompanyDto } from './dto/update-flight-company.dto';
export declare class FlightCompanyController {
    private readonly flightCompanyService;
    constructor(flightCompanyService: FlightCompanyService);
    create(createFlightCompanyDto: CreateFlightCompanyDto, files: {
        logo?: Express.Multer.File[];
    }): Promise<import("./entities/flight-company.entity").FlightCompany>;
    findAll(): Promise<import("./entities/flight-company.entity").FlightCompany[]>;
    findOne(id: string): Promise<import("./entities/flight-company.entity").FlightCompany>;
    findAllFlights(id: string): Promise<import("./entities/flight-company.entity").FlightCompany[]>;
    update(id: string, updateFlightCompanyDto: UpdateFlightCompanyDto): Promise<import("./entities/flight-company.entity").FlightCompany>;
    remove(id: string): Promise<import("./entities/flight-company.entity").FlightCompany>;
}
