import { Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn('uuid')
    noti_id : string;

    @Column()
    noti_name : string;

    @Column()
    noti_url : string;
}