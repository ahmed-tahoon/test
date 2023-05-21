import { Country } from 'src/country/entities/country.entity';
import { DapartureAirport } from 'src/daparture-airport/entities/daparture-airport.entity';
import { Flight } from 'src/flight/entities/flight.entity';
export declare class City {
    id: number;
    name: string;
    flight: Flight;
    country: Country;
    departure_airport: DapartureAirport;
    created_at: Date;
    updated_at: Date;
}
