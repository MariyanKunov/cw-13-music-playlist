import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './mp/mp.module';

@Module({
  imports: [SongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
