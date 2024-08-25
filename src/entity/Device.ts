import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  device_id: string;

  @CreateDateColumn()
  device_login_at: Date;

  @ManyToOne(() => User, (user) => user.account_id)
  owner: User;

  @Column()
  device_name: string;

  @Column()
  fcm_key: string;
}