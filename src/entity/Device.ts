import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Timestamp } from 'typeorm';
import { User } from './User';

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  device_id: string;

  @ManyToOne(() => User, (user)=>user.account_id)
  owner: User;

  @Column()
  device_name : String;

  @Column({type:"timestamp"})
  device_login_at : Timestamp;

  @Column()
  fcm_key : String;
}