import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TeamsController } from './teams.controller';
import { TeamsRepository } from './teams.repository';
import { TeamsService } from './teams.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeamsRepository]),AuthModule],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
