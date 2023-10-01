import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, isNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@InputType({isAbstract:true})
@ObjectType()
@Entity()
export class Restaurant{
    @PrimaryGeneratedColumn()
    @Field(type=>Number)
    id:number;

    @Field(type=>String)
    @Column()
    @IsString()
    name:string;

    @Field(type=>Boolean,{defaultValue:true})
    @Column({default:true})
    @IsBoolean()
    @IsOptional()
    isVegan:boolean;

    @Field(type=> String)
    @Column()
    @IsString()
    address:string;

    @Field(type=>String)
    @Column()
    @IsString()
    ownerName:string;

    @Field(type=>String)
    @Column()
    @IsString()
    catergoryName:string;
}