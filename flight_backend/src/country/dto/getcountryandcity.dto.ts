import { Expose, Transform } from 'class-transformer';
import { Docs } from 'src/Docs/entities/Docs.entity';
import { City } from 'src/city/entities/city.entity';
import { Flight } from 'src/flight/entities/flight.entity';

export class CountryCityDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Transform(({ obj }) => obj.city)
  @Expose()
  flight: {};

  // @Transform(({ obj }) => obj.flight)
  // @Expose()
  // flight: Flight[];
}
