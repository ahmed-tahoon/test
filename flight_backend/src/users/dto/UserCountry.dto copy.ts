import { Expose, Transform } from 'class-transformer';
import { Country } from 'src/country/entities/country.entity';
import { Docs } from 'src/Docs/entities/Docs.entity';
import { Flight } from 'src/flight/entities/flight.entity';

export class UserCountryDto {
  @Transform(({ obj }) => obj.country)
  @Expose()
  country: Country[];
}
