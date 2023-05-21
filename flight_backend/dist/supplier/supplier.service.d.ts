import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
export declare class SupplierService {
    private repo;
    constructor(repo: Repository<Supplier>);
    create(createSupplierDto: CreateSupplierDto): Promise<Supplier>;
    findAllByIds(ids: []): Promise<Supplier[]>;
    findAll(): Promise<Supplier[]>;
    findOne(id: number): Promise<Supplier>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<Supplier>;
    remove(id: number): Promise<Supplier>;
}
