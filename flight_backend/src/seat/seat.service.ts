import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from 'src/flight/entities/flight.entity';
import { In, Repository } from 'typeorm';
import { CreateSeatTwoDto } from './dto/create-seatTwoWay.dto';
import { CreateSeatDto } from './dto/create-seat.dto copy';

import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';
import { SeatToSeat } from './entities/SeatToSeat.entity';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat) private repo: Repository<Seat>,
    @InjectRepository(SeatToSeat) private repoTwoWay: Repository<SeatToSeat>,
  ) {}

  async create(createSeatDto: CreateSeatDto[], flight: Flight) {
    const seat = await this.repo.create(createSeatDto);
    for (let index = 0; index < createSeatDto.length; index++) {
      seat[index].flight = flight;
    }

    return this.repo.insert(seat);
  }

  async createTwoWay(createSeatTwoDto: CreateSeatTwoDto) {
    console.log(createSeatTwoDto, 'createSeatTwoDto');

    const seat = await this.repoTwoWay.create(createSeatTwoDto);
    const firstSeat = await this.findOne(+createSeatTwoDto.seatId);
    const secondSeat = await this.findOne(+createSeatTwoDto.secondseatId);

    seat.seat = firstSeat;
    seat.secondseat = secondSeat;

    return this.repoTwoWay.save(seat);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new UnauthorizedException('unAuthorized');
    }
    const plan = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    return plan;
  }
  async findAll() {
    const seat = await this.repo.find({ relations: { flight: true } });
    return seat;
  }
  async findAllToWay() {
    const seat = await this.repoTwoWay.find({
      relations: {
        seat: true,
        secondseat: true,
      },
    });
    return seat;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const seat = await this.repo.findOne({ where: { id } });
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    return seat;
  }
  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.findOne(id);
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    Object.assign(seat, updateSeatDto);
    return this.repo.save(seat);
  }
  async updateTwo(id: number, body:{price:string}) {
    const seat = await this.repoTwoWay.findOne({where: {id}});
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    Object.assign(seat, body);
    return this.repoTwoWay.save(seat);
  }

  async remove(id: number) {
    const seat = await this.findOne(id);
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    return this.repo.remove(seat);
  }
}
