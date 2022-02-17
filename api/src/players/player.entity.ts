import { Team } from 'src/teams/team.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @ManyToOne(() => Team, team => team.players, {nullable: true})
  @JoinColumn()
  team: Team;
}