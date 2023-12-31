import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app/app.resolver';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
  }),TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  providers: [AppResolver]

})
export class AppModule {}
