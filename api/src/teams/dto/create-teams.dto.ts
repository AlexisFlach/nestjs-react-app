import { IsNotEmpty } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  name: string;
  
  fullname: string;

  nickname: string;

  @IsNotEmpty()
  nation: string;

  @IsNotEmpty()
  stadium: string;
}
