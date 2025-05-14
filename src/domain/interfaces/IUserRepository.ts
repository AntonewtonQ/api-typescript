import { User } from "domain/entities/User";

export interface IUserRepository{
    findById(id:number):Promise<User | null>;
    save(user:User):Promise<User>
}