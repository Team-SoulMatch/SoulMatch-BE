import { Entity,Column,PrimaryGeneratedColumn,OneToOne } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn('uuid')
    noti_id : String;

    @Column()
    noti_name : String;

    @Column()
    noti_url : String;
}