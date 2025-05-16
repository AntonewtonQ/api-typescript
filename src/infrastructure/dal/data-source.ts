import "reflect-metadata";
import { UserEntity } from "infrastructure/dal/entities/UserEntity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"postgres",
    database:"tsapi",
    synchronize:true,
    logging:false,
    entities:[UserEntity],
})