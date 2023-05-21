import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SupplierService {
  constructor(@InjectRepository(Supplier) private repo: Repository<Supplier>) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const supplier = await this.repo.create(createSupplierDto);

    return this.repo.save(supplier);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new UnauthorizedException('unAuthorized');
    }
    const supplier = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!supplier) {
      throw new NotFoundException('supplier not found');
    }
    return supplier;
  }
  async findAll() {
    const supplier = await this.repo.find({});
    return supplier;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const supplier = await this.repo.findOne({ where: { id } });
    if (!supplier) {
      throw new NotFoundException('supplier not found');
    }
    return supplier;
  }
  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const supplier = await this.findOne(id);
    if (!supplier) {
      throw new NotFoundException('supplier not found');
    }
    Object.assign(supplier, updateSupplierDto);
    return this.repo.save(supplier);
  }

  async remove(id: number) {
    const supplier = await this.findOne(id);
    if (!supplier) {
      throw new NotFoundException('supplier not found');
    }
    return this.repo.remove(supplier);
  }
}
