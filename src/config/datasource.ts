import { DataSource } from 'typeorm';
import { User } from '../entity/User';
import { Category } from '../entity/Category';
import { Device } from '../entity/Device';
import { Notification } from '../entity/Notification';
import { Volunteer } from '../entity/Volunteer';

const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: 'sqlite',  
  //type: 'mysql', 
  //host: 'localhost',
  //port: 3306,
  //username: 'your-username',
  //password: 'your-password',
  //database: 'your-database-name',
  database: 'db.sqlite', 
  entities: [User,Volunteer,Notification,Device,Category],
  synchronize: !isProduction , // 성능 손실 가능성이 있어 개발 환경에서만 사용하게 함
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
