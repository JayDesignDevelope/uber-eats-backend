import {Resolver,Query} from '@nestjs/graphql';


@Resolver()
export class RestaurantsResolver{
    @Query(returns => Boolean)
    isPizzaGood():Boolean{
        return true;
    }
}