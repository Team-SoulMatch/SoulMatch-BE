import { DataSource } from 'typeorm';
import { User } from '../entity/User';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [User],
  synchronize: true, // 개발 중에만 true로 설정 (프로덕션 환경에서는 false)
});
