import { DataSource } from 'typeorm';
import { Song } from './mp.entity';

export const songProviders = [
  {
    provide: 'SONG_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Song),
    inject: ['DATA_SOURCE'],
  },
];
