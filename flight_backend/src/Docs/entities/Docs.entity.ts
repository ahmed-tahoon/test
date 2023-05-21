import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Docs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({ type: 'json' })
  doc: string;

  @Column()
  extra: string;

  @Column()
  typeOfFile: string;

  @ManyToOne(() => User, (user) => user.Docs) // specify inverse side as a second parameter
  user: User;
}
