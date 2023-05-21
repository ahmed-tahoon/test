import { DapartureAirport } from 'src/daparture-airport/entities/daparture-airport.entity';
export declare class CreateFlightDto {
    flight_number: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    weight: string;
    company_id: number;
    country_id: number;
    city_id: number;
    departure_airport: DapartureAirport;
}
