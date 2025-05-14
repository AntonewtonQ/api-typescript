
import {CreateUserDTO} from "domain/dtos/CreateUserDTO"
import { User } from "domain/entities/User";
import { IUserRepository } from "domain/interfaces/IUserRepository";

export class CreateUserService{
    constructor(private userRepository:IUserRepository){}

    async execute(dto:CreateUserDTO): Promise<User>{
        const user = new User(0, dto.name, dto.email);
        return this.userRepository.save(user);
    }
}