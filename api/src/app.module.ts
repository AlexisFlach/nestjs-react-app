import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TeamsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // postgres_db
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'retro-football',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlayersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
