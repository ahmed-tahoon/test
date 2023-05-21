import { Country } from 'src/country/entities/country.entity';
import { Flight } from 'src/flight/entities/flight.entity';
import { Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare enum UserRole {
    admin = "superadmin",
    b2badmin = "b2badmin"
}
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    createcode(CreateCodeDto: CreateCodeDto): Promise<User>;
    findAll(userRole: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, updateUser: Partial<User>): Promise<User>;
    AssignFlights(id: number, Flight: Flight[]): Promise<User>;
    AssignCountries(id: number, country: Country[]): Promise<User>;
    getAllFlight(id: number): Promise<User>;
    getAllCountries(id: number): Promise<{
        country: Country[];
        id: number;
        email: string;
        phone: string;
        photo: string;
        password: string;
        username: string;
        role: import("./entities/user.entity").UserRole;
        active: boolean;
        flight?: Flight[];
        Docs: import("../Docs/entities/Docs.entity").Docs;
    }>;
    remove(id: number): Promise<User>;
}
