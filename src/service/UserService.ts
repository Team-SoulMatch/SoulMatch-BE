import { AppDataSource } from "../config/datasource";
import { User } from "../entity/User";

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async GetAllUser    
}