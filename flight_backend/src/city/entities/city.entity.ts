import { Country } from 'src/country/entities/country.entity';
import { DapartureAirport } from 'src/daparture-airport/entities/daparture-airport.entity';
import { Flight } from 'src/flight/entities/flight.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Flight, (flight) => flight.city) // specify inverse side as a second parameter
  flight: Flight;

  @ManyToOne(() => Country, (country) => country.city) // specify inverse side as a second parameter
  @JoinColumn()
  country: Country;

  @OneToMany(() => DapartureAirport, (DapartureAirport) => DapartureAirport.city) // specify inverse side as a second parameter
  departure_airport: DapartureAirport;

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
