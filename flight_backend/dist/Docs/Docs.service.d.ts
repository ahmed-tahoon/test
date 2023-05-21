import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateDocsDto } from './dto/create-Docs.dto';
import { UpdateDocsDto } from './dto/update-Docs.dto';
import { Docs } from './entities/Docs.entity';
export declare class DocsService {
    private repo;
    private readonly usersService;
    constructor(repo: Repository<Docs>, usersService: UsersService);
    create(createDocsDto: CreateDocsDto, user: User): Promise<Docs>;
    findAll(ClientId: number): Promise<User>;
    findOne(id: number): Promise<Docs>;
    update(id: number, updateDocsDto: UpdateDocsDto): string;
    remove(id: number): string;
}
