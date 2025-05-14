import { CreateUserService } from "aplication/services/CreateUserService";
import { Request, Response } from "express";
import { UserRepository } from "infrastructure/repositories/UserRepository";

export class UserController{
    async create(req:Request, res:Response){
        const repo = new UserRepository();
        const service = new CreateUserService(repo);
        const user = await service.execute(req.body)
        return res.json(user);

    }
}