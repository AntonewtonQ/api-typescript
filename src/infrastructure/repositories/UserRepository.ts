import { User } from "domain/entities/User";
import { UserEntity } from "infrastructure/dal/entities/UserEntity";
import { IUserRepository } from "domain/interfaces/IUserRepository";
import { AppDataSource } from "infrastructure/dal/data-source";

export class UserRepository implements IUserRepository{
    
    async findById(id: number): Promise<User | null> {
        const repo = AppDataSource.getRepository(UserEntity);
        const entity = await repo.findOneBy({id});
        return entity ? new User(entity.id, entity.name, entity.email) : null;
    }

    async save(user: User): Promise<User> {
        const repo = AppDataSource.getRepository(UserEntity);
        const entity =  repo.create(user);
        const saved = await repo.save(entity);
        return new User(saved.id, saved.name, saved.email);
    }
}