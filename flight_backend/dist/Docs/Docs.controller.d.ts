import { DocsService } from './Docs.service';
import { CreateDocsDto } from './dto/create-Docs.dto';
import { UpdateDocsDto } from './dto/update-Docs.dto';
import { UsersService } from 'src/users/users.service';
export declare class DocsController {
    private readonly DocsService;
    private readonly usersService;
    constructor(DocsService: DocsService, usersService: UsersService);
    findAll(ClientId: number): Promise<import("../users/entities/user.entity").User>;
    uploadFile(body: CreateDocsDto, req: any): Promise<void>;
    findOne(id: string): Promise<import("./entities/Docs.entity").Docs>;
    update(id: string, updateDocsDto: UpdateDocsDto): string;
    remove(id: string): string;
}
