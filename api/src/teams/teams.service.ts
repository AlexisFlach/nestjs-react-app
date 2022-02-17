import { Injectable, NotFoundException } from '@nestjs/common';
import { Nation } from './team-nation.enum';
import { CreateTeamDto } from './dto/create-teams.dto';
import { GetTeamsFilterDto } from './dto/get-teams-filter.dto';
import { TeamsRepository } from './teams.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamsRepository) private teamsRepository: TeamsRepository,
  ) {}

  getTeams(filterDto: GetTeamsFilterDto): Promise<Team[]> {
    return this.teamsRepository.getTeams(filterDto);
  }

  async getTeamById(id: string): Promise<Team> {
    const found = await this.teamsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  createTeam(createTaskDto: CreateTeamDto): Promise<Team> {
    return this.teamsRepository.createTeam(createTaskDto);
  }

  async deleteTeam(id: string): Promise<void> {
    const result = await this.teamsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTeamNation(id: string, nation: Nation): Promise<Team> {
    const task = await this.getTeamById(id);

    task.nation = nation;
    await this.teamsRepository.save(task);

    return task;
  }
}
