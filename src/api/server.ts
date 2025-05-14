import express from "express"
import { AppDataSource } from "infrastructure/dal/data-source";
import { UserController } from "./controller/UserController";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(()=>{
    console.log("Database Connected");

    const userController = new UserController();

    app.post("/users",(req,res) => userController.create(req,res));

    app.listen(3000, ()=> console.log("API running on port 3000"))
})