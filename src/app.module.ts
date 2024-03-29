import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { GraphQLModule } from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm'
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantsResolver } from './restaurants/restaurants.resolver';
import { ConfigModule } from '@nestjs/config';
import { Restaurant } from './restaurants/entities/restaurants.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      // envFilePath:process.env.NODE_ENV==="dev"?".env.dev":'.env.test',
      // ignoreEnvFile:process.env.NODE_ENV==="prod",
      envFilePath:process.env.NODE_ENV==="prod"?".env.prod":'.env.test',

      validationSchema:Joi.object({
        NODE_ENV:Joi.string().valid('dev','prod'),
        DB_HOST:Joi.string().required(),
        DB_PORT:Joi.string().required(),
        DB_USERNAME:Joi.string().required(),
        DB_PASSWORD:Joi.string().required(),
        DB_NAME:Joi.string().required(),


      })
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port:+process.env.DB_PORT,
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_NAME,
      synchronize:true,
      logging:true,
      entities:[Restaurant],
      ssl:true
    }),
    GraphQLModule.forRoot({
    autoSchemaFile:true
  }),
  RestaurantsModule,

  ],
  controllers: [],
  providers: [RestaurantsResolver],
})
export class AppModule {}
