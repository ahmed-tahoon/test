import { Flight } from 'src/flight/entities/flight.entity';
export declare class FlightCompany {
    id: number;
    name: string;
    logo: string;
    country: string;
    city: string;
    flight: Flight;
    created_at: Date;
    updated_at: Date;
}
