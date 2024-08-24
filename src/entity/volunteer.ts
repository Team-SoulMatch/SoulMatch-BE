import { Entity,Column,PrimaryGeneratedColumn,OneToOne, CreateDateColumn} from "typeorm";

@Entity()
export class Volunteer {
    @PrimaryGeneratedColumn('uuid')
    volunteer_id : string;

    @Column()
    volunteer_name : string;

    @Column()
    volunteer_location_more : string; 

    @Column()
    volunteer_location : string;

    @Column()
    volunteer_url : string;

    @Column()
    volunteer_status : number;

    @Column({type:'timestamp'})
    notice_start : Date;

    @Column({type:'timestamp'})
    notice_end : Date;

    @Column({type:'timestamp'})
    volunteer_start : Date;

    @Column({type:'timestamp'})
    volunteer_end : Date;

    @Column()
    volunteer_message : string;

    @Column()
    volunteer_sido_code : number;

    @CreateDateColumn()
    created_at : Date;

    @Column()
    teen_avaliable : Boolean;
}