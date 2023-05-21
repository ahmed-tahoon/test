export declare enum UserRole {
    admin = "superadmin",
    b2badmin = "b2badmin"
}
export declare class CreateCodeDto {
    email: string;
    type: UserRole;
}
