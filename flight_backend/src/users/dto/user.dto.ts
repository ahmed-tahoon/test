import { Expose, Transform } from 'class-transformer';
import { Docs } from 'src/Docs/entities/Docs.entity';
import { Flight } from 'src/flight/entities/flight.entity';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  username: string;

  @Expose()
  role: string;

  @Expose()
  createBy: number;
  @Expose()
  Token: string;
  @Transform(({ obj }) => obj.Docs)
  @Expose()
  Docs: Docs;

  @Transform(({ obj }) => obj.flight)
  @Expose()
  flight: Flight[];
}
