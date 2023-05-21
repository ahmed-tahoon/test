import { Module } from '@nestjs/common';
import { DocsService } from './Docs.service';
import { DocsController } from './Docs.controller';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { UsersModule } from 'src/users/users.module';
import { Docs } from './entities/Docs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Docs]), UsersModule],

  controllers: [DocsController],
  providers: [DocsService, CurrentUserInterceptor],
})
export class DocsModule {}
