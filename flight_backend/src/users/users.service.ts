import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/country/entities/country.entity';
import { Flight } from 'src/flight/entities/flight.entity';
import { Any, Not, Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export enum UserRole {
  admin = 'superadmin',
  b2badmin = 'b2badmin',
}
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  // async create(UpdateUser: UpdateUserDto) {
  //   const user = await this.repo.findOne({
  //     where: {
  //       email: UpdateUser.email,
  //     },
  //   });
  //   if (!user) {
  //     Object.assign(user, UpdateUser);
  //     return this.repo.save(user);
  //   }
  //   throw new NotFoundException('user  found please call admin for more info');
  // }
  createcode(CreateCodeDto: CreateCodeDto) {
    const user = this.repo.create(CreateCodeDto);
    return this.repo.save(user);
  }

  async findAll(userRole: string) {
    const users = await this.repo.find({
      where: { role: Not(UserRole.admin) },
    });

    return users;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const user = await this.repo.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('user not found5');
    }
    return user;
  }
  async findOneByEmail(email: string) {
    const user = await this.repo.findOne({
      where: { email },
    });

    return user;
  }
  async update(id: number, updateUser: Partial<User>) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, updateUser);
    return this.repo.save(user);
  }
  async AssignFlights(id: number, Flight: Flight[]) {
    const user = await this.repo.findOne({
      where: { id },
      relations: { flight: true },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    // Object.assign(user, Flight);
    user.flight = Flight;
    return this.repo.save(user);
  }
  async AssignCountries(id: number, country: Country[]) {
    const user = await this.repo.findOne({
      where: { id },
      relations: { country: true },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    // Object.assign(user, Flight);
    user.country = country;
    return this.repo.save(user);
  }
  async getAllFlight(id: number) {
    const user = await this.repo.findOne({
      where: { id },
      relations: ['flight', 'flight.country', 'flight.city'],
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
  async getAllCountries(id: number) {
    const user = await this.repo.findOne({
      where: { id },
      relations: ['country', 'country.city.flight.departure_airport'],
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const countriesWithFlights = user.country.filter((country) => {
      if (Array.isArray(country.city)) {
        for (let i = 0; i < country.city.length; i++) {
          const city = country.city[i];
          if (city.flight && city.flight.length > 0) {
            return true;
          }
        }
      }
      return false;
    });

    const updatedRes = {
      ...user,
      country: countriesWithFlights,
    };

    return updatedRes;
  }





  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
