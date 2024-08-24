import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  device_id: string;

  @ManyToOne(() => User, (user)=>user.account_id)
  owner: User;

  @Column()
  device_name : string;

  @Column({type:"timestamp"})
  device_login_at : Date;

  @Column()
  fcm_key : string;
}