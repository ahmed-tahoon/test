import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { FlightModule } from 'src/flight/flight.module';
import { CountryModule } from 'src/country/country.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), FlightModule, CountryModule],
  controllers: [UsersController],
  providers: [UsersService, AuthService, CurrentUserInterceptor],
  exports: [UsersService],
})
export class UsersModule {}
