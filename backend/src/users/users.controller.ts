import { Body, Controller, Delete, Get, Param, PayloadTooLargeException, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserEntity } from './database/user.entity';
import { UserDto, LoginDto, IdDto, AtualizaDto, RecuperarSenhaDto, NovaSenhaDto, alterarPerfilDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    // Busca registro pelo id
    @Post('login')
    @ApiOperation({ summary: 'Rota para login do usuário' })
    @ApiBody({
        description : 'Rota para login do usuário',
        type: LoginDto
    })
    async login(@Body() Dados : any ): Promise<UserEntity[]>{
        return await this.usersService.login( Dados );
    }
    
    // Lista todos os registros
    @Get()
    @ApiOperation({ summary: 'Lista todos os registros' })
    @ApiBody({
        description : 'Lista todos os registros',
     })
    async index(): Promise<UserEntity[]>{
        return await this.usersService.findAll();
    }

    // Cria um novo registro
    @Post()
    @ApiOperation({ summary: 'Lista todos os registros' })
    @ApiBody({ 
        description : 'Cria um novo registro',
        type: UserDto
    })
    async create(@Body() user: any): Promise<UserEntity[]>{
        return await this.usersService.create(user);
    }

    // Busca registro pelo id
    @Get(':id')
    @ApiOperation({ summary: 'Busca registro pelo id' })
    @ApiBody({ 
        description : 'Busca registro pelo id',
        type: IdDto 
    })
    async find(@Param('id') id : number): Promise<UserEntity>{
        return await this.usersService.findOne(id);
    }

    // Deleta registro pelo id
    @Delete(':id')
    @ApiOperation({ summary: 'Deleta registro pelo id' })
    @ApiBody({ 
        description : 'Deleta registro pelo id',
        type: IdDto 
    })
    async delete(@Param('id') id : number): Promise<void>{
        return await this.usersService.remove(id);

    }

    // Atualiza registro pelo id
    @Put(':id')
    @ApiOperation({ summary: 'Atualiza registro pelo id' })
    @ApiBody({ 
        description : 'Atualiza registro pelo id',
        type: AtualizaDto 
    })
    async update( @Param('id') id : number, @Body() data: any ): Promise<void>{
        return await this.usersService.update({ id, data });
    }

    // Gera token para recuperar senha
    @Post('recuperarSenha')
    @ApiOperation({ summary: 'Rota responsável por gerar um token para o usuário recuperar a senha' })
    @ApiBody({ 
        description : 'Rota responsável por gerar um token para o usuário recuperar a senha',
        type: RecuperarSenhaDto 
    })
    async recuperarSenha(  @Body() Dados: any ){
        return await this.usersService.recuperarSenha( Dados );
    }
    
    // Informa a nova senha
    @Post('novaSenha')
    @ApiOperation({ summary: 'Rota responsável por salvar a nova senha' })
    @ApiBody({ 
        description : 'Rota responsável por salvar a nova senha',
        type: NovaSenhaDto 
    })
    async novaSenha(  @Body() Dados: any ){
        return await this.usersService.novaSenha(Dados);
    }
    
    // Alterar Perfil do usuário
    @Post('alterarPerfil')
    @ApiOperation({ summary: 'Rota responsável por alterar o peril do usuário' })
    @ApiBody({ 
        description : 'Rota responsável por alterar o peril do usuário',
        type: alterarPerfilDto 
    })
    async alterarPerfil( @Body() Dados: any ){
        return await this.usersService.alterarPerfil(Dados);
    }
    
    // Alterar Perfil do usuário
    @Get('seed')
    async seed(){
        console.log('Passando aqui');
        //return await this.usersService.seed(Dados);
    }
}


