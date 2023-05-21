import { City } from 'src/city/entities/city.entity';
import { Flight } from 'src/flight/entities/flight.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Country {
    id: number;
    name: string;
    flight: Flight;
    city: City;
    user?: User[];
    created_at: Date;
    updated_at: Date;
}
