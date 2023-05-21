import { Flight } from 'src/flight/entities/flight.entity';
import { SeatToSeat } from './SeatToSeat.entity';
export declare class Seat {
    id: number;
    airlines: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_date: string;
    arrival_date: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    weight: string;
    total_seat_number: string;
    available_seats: string;
    suppliers: string;
    seat_price_enduser: string;
    seat_price_company: string;
    flight: Flight;
    seats: Seat[];
    seatToSeat: SeatToSeat[];
    created_at: Date;
    updated_at: Date;
}
