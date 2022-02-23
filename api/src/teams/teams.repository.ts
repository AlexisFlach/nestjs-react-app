import { Player } from 'src/players/player.entity';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-teams.dto';
import { GetTeamsFilterDto } from './dto/get-teams-filter.dto';
import { Team } from './team.entity';

@EntityRepository(Team)
export class TeamsRepository extends Repository<Team> {
  async getTeams(filterDto: GetTeamsFilterDto): Promise<Team[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('team');

    if (search) {
      query.andWhere(
        'LOWER(team.title) LIKE LOWER(:search) OR LOWER(team.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }

    const teams = await query.getMany();
    return teams;
  }

  async getSquad(id: string): Promise<Player[]> {
    const players = getRepository(Player)
    .createQueryBuilder("player")
    .leftJoinAndSelect(Team, "team", "team.id = player.teamId")
    .where("team.id = :id", {id})
    .getMany();

    return players;
  }

  async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
    const { name, nation, fullname, nickname, stadium } = createTeamDto;

    const task = this.create({
      name,
      nation,
      fullname,
      nickname,
      stadium

    });

    await this.save(task);
    return task;
  }
}
