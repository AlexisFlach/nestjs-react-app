import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlayerDto } from './dto/create-players.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { Player } from './player.entity';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersRepository) private playersRepository: PlayersRepository,
  ) {} 
  
  createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersRepository.createPlayer(createPlayerDto);
  }

  getPlayers(filterDto: GetPlayersFilterDto): Promise<Player[]> {
    return this.playersRepository.getPlayers(filterDto);
  }
}
