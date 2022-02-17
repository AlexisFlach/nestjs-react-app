import { EntityRepository, Repository } from 'typeorm';
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

  async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
    const { name, nation } = createTeamDto;

    const task = this.create({
      name,
      nation,
    });

    await this.save(task);
    return task;
  }
}
