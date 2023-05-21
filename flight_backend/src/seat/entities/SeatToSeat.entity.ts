import { Flight } from 'src/flight/entities/flight.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Seat } from './seat.entity';

@Entity()
export class SeatToSeat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public price: string;
  @Column()
  public days: string;
  @ManyToOne(() => Seat, (seat) => seat.seatToSeat)
  public seat: Seat;
  @ManyToOne(() => Seat, (seat) => seat.seatToSeat)
  public secondseat: Seat;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
