import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  genre: string;

  @Column({ length: 500 })
  text: string;

  @Column({ length: 500 })
  musician: string;

}
