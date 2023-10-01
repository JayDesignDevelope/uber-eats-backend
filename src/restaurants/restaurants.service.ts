import { Injectable } from "@nestjs/common";
import { Restaurant } from "./entities/restaurants.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";



@Injectable()
export class RestaurantService{
    constructor(@InjectRepository(Restaurant)
    private readonly restaturants:Repository<Restaurant>,
    ){}

    getAll() : Promise<Restaurant[]>{
        return this.restaturants.find();
    }

    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>{
        const newRestaurant=this.restaturants.create(createRestaurantDto)
        return this.restaturants.save(newRestaurant);
    }
}