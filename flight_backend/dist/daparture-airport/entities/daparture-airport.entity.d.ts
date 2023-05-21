import { City } from "src/city/entities/city.entity";
import { Flight } from "src/flight/entities/flight.entity";
export declare class DapartureAirport {
    id: number;
    name: string;
    flight: Flight;
    country: string;
    city: City;
    created_at: Date;
    updated_at: Date;
}
