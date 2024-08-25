import { AppDataSource } from "../config/datasource";
import { Repository } from "typeorm";
import { User } from "../entity/User";
import { Device } from "../entity/Device";

export class UserService {
    private userRepository: Repository<User>;
    private deviceRepository: Repository<Device>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
        this.deviceRepository = AppDataSource.getRepository(Device);
    }
    
    async CreateUser(nanuId:string,profileImg:string,device:string,deviceName:string,fcm_key:string): Promise<User | null> { //유저 또는 유저가 없을 경우에 NULL반환 명시
        
        
        return this.userRepository.create({
            nanu_id:nanuId,
            profile_img:profileImg
        })
    }

    async GetAllUser(): Promise<User[]> {
        return this.userRepository.find();
    }

    async GetUserById(account_id: string): Promise<User | null> { //유저 또는 유저가 없을 경우에 NULL반환 명시
        return this.userRepository.findOneBy({ account_id });
    }

    async EditUser(account_id: string): Promise<User | null> { //유저 또는 유저가 없을 경우에 NULL반환 명시
        return this.userRepository.findOneBy({ account_id });
    }
}