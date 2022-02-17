import { IsNotEmpty } from 'class-validator';
import { Team } from 'src/teams/team.entity';

export class defaultTeam {
  readonly teamItem: Team | string = "No club";
}

export class CreatePlayerDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  
  team: Team;
}