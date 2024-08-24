import { Entity,Column,PrimaryGeneratedColumn,OneToOne, Generated, CreateDateColumn, Timestamp } from "typeorm";

@Entity()
export class Volunteer {
    @PrimaryGeneratedColumn('uuid')
    volunteer_id : String;

    @Column()
    volunteer_name : String;

    @Column()
    volunteer_location_more : String; 

    @Column()
    volunteer_location : String;

    @Column()
    volunteer_url : String;

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
    volunteer_message : String;

    @Column()
    volunteer_sido_code : number;

    @CreateDateColumn()
    created_at : Date;

    @Column()
    teen_avaliable : Boolean;
}