import { Injectable, PayloadTooLargeException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './database/user.entity';
import { User } from './interfaces/user.interface'; 

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity) 
        private userRepository : Repository<UserEntity>
    ){}

    // Lista todos os usuários do sistema
    async findAll(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }

    // Cria e retorna os dados criados
    async create(user: User): Promise<UserEntity>{
        return await this.userRepository.save(user);
    }

    // Busca pelo id
    async findOne(id: number): Promise<UserEntity>{
        return await this.userRepository.findOne(id);
    }

    // Remove registro pelo id
    async remove(id: number): Promise<void>{
        await this.userRepository.delete({id});
    }

    // Atualiza dados do registro
    async update( userData: any): Promise<void>{

        const { nome, email, cpf, senha } = userData.data;
        const user = await this.findOne(userData.id);

        user.nome  = nome  ? nome  : user.nome;
        user.email = email ? email : user.email;
        user.cpf   = cpf   ? cpf   : user.cpf;
        user.senha = senha ? senha : user.senha;

        await this.userRepository.save(user);
    }
}


