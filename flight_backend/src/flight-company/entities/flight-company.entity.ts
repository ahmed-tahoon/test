import { Flight } from 'src/flight/entities/flight.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class FlightCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column({ default: null })
  logo: string;
    @Column({ default: null })
  country: string;
    @Column({ default: null })
  city: string;
  
  @OneToMany(() => Flight, (flight) => flight.company) // specify inverse side as a second parameter
  flight: Flight;
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
