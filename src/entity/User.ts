import { Entity, PrimaryGeneratedColumn, Column , OneToMany , ManyToOne } from 'typeorm';
import { Device } from './Device';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  account_id: String;

  @OneToMany(() => Device, (device) => device.owner)
  devices: Device[];

  @ManyToOne(() => Device)
  device_selected: Device;

  @Column()
  nanu_id: string;

  @Column()
  joined_at: Date;

  @Column()
  profile_img: URL;
}