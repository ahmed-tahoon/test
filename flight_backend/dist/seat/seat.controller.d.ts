import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto copy';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { FlightService } from 'src/flight/flight.service';
import { CreateSeatTwoDto } from './dto/create-seatTwoWay.dto';
export declare class SeatController {
    private readonly seatService;
    private readonly flightService;
    constructor(seatService: SeatService, flightService: FlightService);
    create(createSeatDto: CreateSeatDto[]): Promise<import("typeorm").InsertResult>;
    createTwoWay(createSeatTwoDto: CreateSeatTwoDto): Promise<import("./entities/SeatToSeat.entity").SeatToSeat>;
    findAll(): Promise<import("./entities/seat.entity").Seat[]>;
    findAllTwoWay(): Promise<import("./entities/SeatToSeat.entity").SeatToSeat[]>;
    findOne(id: string): Promise<import("./entities/seat.entity").Seat>;
    update(id: string, updateSeatDto: UpdateSeatDto): Promise<import("./entities/seat.entity").Seat>;
    updateTwo(id: string, updateSeatDto: {
        price: string;
    }): Promise<import("./entities/SeatToSeat.entity").SeatToSeat>;
    remove(id: string): Promise<import("./entities/seat.entity").Seat>;
}
