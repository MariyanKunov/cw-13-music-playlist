import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { songProviders } from './mp.provider';
import { SongService } from './mp.service';
import { SongController } from './mp.controller';

@Module({
  controllers: [SongController],
  imports: [DatabaseModule],
  providers: [...songProviders, SongService],
})
export class SongModule {}
