import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/database/user.entity';

@Module({
    imports : [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'cooper',
            entities: [UserEntity],
            synchronize: true,
          }),
    ]
})
export class DatabaseModule {}
