import { IsNotEmpty } from 'class-validator';
import { Nation } from '../team-nation.enum';

export class CreateTeamDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  nation: Nation;
}
