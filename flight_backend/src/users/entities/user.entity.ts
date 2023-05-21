import { Country } from 'src/country/entities/country.entity';
import { Docs } from 'src/Docs/entities/Docs.entity';
import { Flight } from 'src/flight/entities/flight.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  admin = 'superadmin',
  b2badmin = 'b2badmin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column({ default: 'test' })
  phone: string;
  @Column({ default: 'test' })
  photo: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.b2badmin,
  })
  role: UserRole;

  @Column({
    default: false,
  })
  active: boolean;

  @ManyToMany(() => Flight, (flight) => flight.user, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  flight?: Flight[];
  @ManyToMany(() => Country, (country) => country.user, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  country?: Country[];

  @OneToMany(() => Docs, (Docs) => Docs.user) // specify inverse side as a second parameter
  @JoinColumn()
  Docs: Docs;
}
