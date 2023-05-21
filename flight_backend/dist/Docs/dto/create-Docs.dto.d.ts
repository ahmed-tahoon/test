import { User } from 'src/users/entities/user.entity';
export declare class CreateDocsDto {
    type: string;
    doc: string;
    extra: string;
    user: User;
}
