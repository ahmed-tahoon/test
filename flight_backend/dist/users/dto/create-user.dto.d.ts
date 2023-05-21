export declare enum UserRole {
    admin = "superadmin",
    b2badmin = "b2badmin"
}
export declare class CreateUserDto {
    email: string;
    password: string;
    username: string;
    role: UserRole;
    active: boolean;
}
