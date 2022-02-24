import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Player } from 'src/players/player.entity';
import { CreateTeamDto } from './dto/create-teams.dto';
import { GetTeamsFilterDto } from './dto/get-teams-filter.dto';
import { Team } from './team.entity';
import { TeamsService } from './teams.service';


@Controller('teams')
@UseGuards(AuthGuard())
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  getTeams(@Query() filterDto: GetTeamsFilterDto): Promise<Team[]> {
    return this.teamsService.getTeams(filterDto);
  }
  @Get('/:id')
  getTeamById(@Param('id') id: string): Promise<Team> {
    return this.teamsService.getTeamById(id);
  }
  @Get('/:id/squad')
  getTeamSquadById(@Param('id') id: string): Promise<Player[]> {
    return this.teamsService.getSquad(id);
  }
  @Post()
  createTeam(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.createTeam(createTeamDto);
  }

  // @Get()
  // getTeams(@Query() filterDto: GetTeamsFilterDto): Team[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.teamsService.getTeamsWithFilters(filterDto);
  //   } else {
  //     return this.teamsService.getAllTeams();
  //   }
  // }

  // @Get('/:id')
  // getTeamById(@Param('id') id: string): Team {
  //   return this.teamsService.getTeamById(id);
  // }
  @Delete('/:id')
  deleteTeam(@Param('id') id: string): Promise<void> {
    return this.teamsService.deleteTeam(id);
  }
}
