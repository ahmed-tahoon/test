import { City } from "src/city/entities/city.entity";
import { Flight } from "src/flight/entities/flight.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class DapartureAirport {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @OneToMany(() => Flight, (flight) => flight.departure_airport) // specify inverse side as a second parameter
  flight: Flight;
    
    @Column({ default: null })
  country: string;
    


  @ManyToOne(() => City, (city) => city.departure_airport) // specify inverse side as a second parameter
  @JoinColumn()
  city: City;
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
