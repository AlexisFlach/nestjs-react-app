import { Player } from 'src/players/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Nation } from './team-nation.enum';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  nation: Nation;
  @OneToMany(() => Player, player => player.team)
    players: Player[];
}
