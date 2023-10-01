import { Injectable } from "@nestjs/common";
import { Restaurant } from "./entities/restaurants.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class RestaurantService{
    constructor(@InjectRepository(Restaurant)
    private readonly restaturants:Repository<Restaurant>,
    ){}

    getAll() : Promise<Restaurant[]>{
        return this.restaturants.find();
    }
}