import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Song } from './mp.entity';

@Injectable()
export class SongService {
  constructor(
    @Inject('SONG_REPOSITORY')
    private songRepository: Repository<Song>,
  ) {}


  async getAllSongsByGenre(genre: string): Promise<Song[]> {
    return this.songRepository.find({ where: { genre } });
  }

  async getSong(id: number): Promise<Song[]> {
    return this.songRepository.find({where: { id } });
  }

  createOne(song) {
    return this.songRepository.save(song);
  }

  async deleteOne(id) {
    return this.songRepository.delete(id);
  }
}
