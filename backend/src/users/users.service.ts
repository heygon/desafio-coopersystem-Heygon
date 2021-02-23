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

    // Busca usuário para fazer o login
    async login( Dados : any ): Promise<UserEntity[]>{
        const user = await this.userRepository.find({
            where: [
                { email: Dados.login, senha: Dados.senha, perfil: 2 },
                { cpf: Dados.login, senha: Dados.senha, perfil: 2 }
              ]
        });
        return user;
    }

    // Lista todos os usuários do sistema
    async findAll(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }

    // Cria e retorna os dados criados
    async create(user: any): Promise<UserEntity[]>{
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

    // Gera um token para recuperar senha
    async recuperarSenha( Dados : any ){
                
        const user = await this.userRepository.find({ email : Dados.email });
        console.log(user);

        if(user[0].email != ''){
            let token = new Date().getTime().toString();
            user[0].token = token;

            await this.userRepository.save(user);

            return { token };
        }else{
            return { "resposta":"Usuário não existe" };
        }
    }

    // Grava nova senha
    async novaSenha( Dados : any ){
        const user = await this.userRepository.find({ token : Dados.novotoken });
        console.log(user);
        if(user[0].email != ''){
            user[0].token = '';
            user[0].senha = Dados.novasenha;

            await this.userRepository.save(user);

            return { resp : 's', "msg":"Senha alterado com sucesso!" };            
        }else{
            return { resp : 's', "msg":"Usuário não existe" };
        }

    }

    // Grava nova senha
    async alterarPerfil( Dados : any ){
        const user = await this.userRepository.find({ id : Dados.id });
        if(user.length >= 1 && user[0].perfil == 2){
            const us = await this.userRepository.find({ id : Dados.userid });
            let per = 0;
            if(us[0].perfil == 1){
                us[0].perfil = 2;
                per = 2;
            }else if(us[0].perfil == 2){
                us[0].perfil = 1;
                per = 1;
            }

            await this.userRepository.save(us);
            return { resp : 's', "msg":"Senha alterado com sucesso!", per };            

        }else{
            return { resp : 's', "msg":"Você não tem permissão para acessar essa rota" };
        }

    }

    // Grava nova senha
    async seed( Dados : any ){
        console.log('Iniciando o seed do banco');
        console.log('Inserindo 2 usuários um administrador e 1 cliente');
        const novoUsuarios = [
            {
                nome   : "Admin",
                email  : "admin@email.com",
                cpf    : "000.000.000-00",
                senha  : "1234",
                perfil : 2
            },
            {
                nome   : "Cliente",
                email  : "cliente@email.com",
                cpf    : "000.000.000-00",
                senha  : "1234",
                perfil : 1
            }
        ]
        try {
            for (let u = 0; u < novoUsuarios.length; u++) {
                return await this.userRepository.save(novoUsuarios[u]);
            }
            console.log('Seed concluido');
        } catch (error) {
            console.log('Seed com erro');
        }

        return true;

    }
}


