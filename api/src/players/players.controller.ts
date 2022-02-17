import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-players.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { Player } from './player.entity';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Post()
  createTeam(@Body() createTeamDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.createPlayer(createTeamDto);
  }
  @Get()
  getPlayers(@Query() filterDto: GetPlayersFilterDto): Promise<Player[]> {
    return this.playersService.getPlayers(filterDto);
  }
}
