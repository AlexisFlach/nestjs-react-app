import { Player } from 'src/players/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ default: ""})
  fullname: string;
  @Column({default: ""})
  nickname: string;
  @Column()
  stadium: string;
  @OneToMany(() => Player, player => player.team)
    players: Player[];
  @Column()
  nation: string;
}
