import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Docs } from './Docs/entities/Docs.entity';
import { CategoryModule } from './category/category.module';
import { DocsModule } from './Docs/Docs.module';
import { FlightModule } from './flight/flight.module';
import { Flight } from './flight/entities/flight.entity';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/entities/seat.entity';
import { SupplierModule } from './supplier/supplier.module';
import { Supplier } from './supplier/entities/supplier.entity';
import { SeatToSeat } from './seat/entities/SeatToSeat.entity';
import { FlightCompanyModule } from './flight-company/flight-company.module';
import { FlightCompany } from './flight-company/entities/flight-company.entity';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { Country } from './country/entities/country.entity';
import { City } from './city/entities/city.entity';
import { DapartureAirportModule } from './daparture-airport/daparture-airport.module';
import { DapartureAirport } from './daparture-airport/entities/daparture-airport.entity';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: './src/i18n/',
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'dbaas-db-8874763-do-user-13931175-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'doadmin',
      password: 'AVNS_Z23AI-0BdDjUv_QDATf',
      database: 'defaultdb',

      // username: 'root',
      // port: 3306,
      // host: 'localhost',
      // database: 'flight',
      // password: '',

      entities: [
        User,
        Docs,
        Flight,
        Seat,
        SeatToSeat,
        Supplier,
        FlightCompany,
        Country,
        City,
        DapartureAirport,
      ],
      synchronize: true,
    }),
    UsersModule,
    DocsModule,
    FlightModule,
    SeatModule,
    SupplierModule,
    FlightCompanyModule,
    CountryModule,
    CityModule,
    DapartureAirportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
