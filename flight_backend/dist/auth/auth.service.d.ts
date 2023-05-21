import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signup(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
    signin(createUserDto: CreateUserDto): Promise<{
        Token: any;
        id: number;
        email: string;
        phone: string;
        photo: string;
        password: string;
        username: string;
        role: import("../users/entities/user.entity").UserRole;
        active: boolean;
        flight?: import("../flight/entities/flight.entity").Flight[];
        country?: import("../country/entities/country.entity").Country[];
        Docs: import("../Docs/entities/Docs.entity").Docs;
    }>;
}
