import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SupplierController {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    create(createSupplierDto: CreateSupplierDto): Promise<import("./entities/supplier.entity").Supplier>;
    findAll(): Promise<import("./entities/supplier.entity").Supplier[]>;
    findOne(id: string): Promise<import("./entities/supplier.entity").Supplier>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<import("./entities/supplier.entity").Supplier>;
    remove(id: string): Promise<import("./entities/supplier.entity").Supplier>;
}
