import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Nation } from './team-nation.enum';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  nation: Nation;
}
