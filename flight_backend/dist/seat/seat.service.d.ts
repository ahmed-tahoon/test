import { Flight } from 'src/flight/entities/flight.entity';
import { Repository } from 'typeorm';
import { CreateSeatTwoDto } from './dto/create-seatTwoWay.dto';
import { CreateSeatDto } from './dto/create-seat.dto copy';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';
import { SeatToSeat } from './entities/SeatToSeat.entity';
export declare class SeatService {
    private repo;
    private repoTwoWay;
    constructor(repo: Repository<Seat>, repoTwoWay: Repository<SeatToSeat>);
    create(createSeatDto: CreateSeatDto[], flight: Flight): Promise<import("typeorm").InsertResult>;
    createTwoWay(createSeatTwoDto: CreateSeatTwoDto): Promise<SeatToSeat>;
    findAllByIds(ids: []): Promise<Seat[]>;
    findAll(): Promise<Seat[]>;
    findAllToWay(): Promise<SeatToSeat[]>;
    findOne(id: number): Promise<Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    updateTwo(id: number, body: {
        price: string;
    }): Promise<SeatToSeat>;
    remove(id: number): Promise<Seat>;
}
