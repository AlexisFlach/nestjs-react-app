import { Team } from 'src/teams/team.entity';
import { EntityRepository, Repository, getRepository, createQueryBuilder } from 'typeorm';
import {getConnection} from "typeorm"; 
import { CreatePlayerDto } from './dto/create-players.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { Player } from './player.entity';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {

  async getPlayers(filterDto: GetPlayersFilterDto): Promise<Player[]> {

    const players = getRepository(Player)
    .createQueryBuilder("player")
    .leftJoinAndSelect(Team, "team", "team.id = player.teamId")
    .getMany();

    return players;
    // const { search } = filterDto;

    // const query = this.createQueryBuilder('player');

    // if (search) {
    //   query.andWhere(
    //     'LOWER(player.firstName) LIKE LOWER(:search) OR LOWER(player.lastName) LIKE LOWER(:search)',
    //     { search: `%${search}%` },
    //   );
    // }

    // const players = await query.getMany();
    // return players;
  }

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { firstName, lastName, team } = createPlayerDto;
    const player = this.create({
      firstName,
      lastName,
      team,
    });
    await this.save(player);
    return player;
}
}

