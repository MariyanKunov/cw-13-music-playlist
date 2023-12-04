import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SongService } from './mp.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('/genre/:genre')
  async getAllSongsByGenre(@Param('genre') genre){
    return await this.songService.getAllSongsByGenre(genre);
  }


  @Get(':id')
  async getSong(@Param('id') id) {
    return await this.songService.getSong(id);
  }

  @Post()
  createSongs(@Body() song) {
    return this.songService.createOne(song);
  }

  @Delete(':id')
  deleteSong(@Param('id') id) {
    return this.songService.deleteOne(id);
  }
}
