import { Body, Controller, Delete, Get, Param, PayloadTooLargeException, Post, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserEntity } from './database/user.entity';
import { UserDto, LoginDto, IdDto, AtualizaDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    // Busca registro pelo id
    @Post('login')
    @ApiBody({
        description : 'Rota para login do usuário',
        schema : {
            title : 'Rota para login do usuário'

        },
        type: LoginDto
    })
    
    async login(@Body() Dados : any ): Promise<UserEntity[]>{
        console.log(Dados);
        return await this.usersService.login( Dados );
    }
    
    // Lista todos os registros
    @Get()
    @ApiBody({
        description : 'Lista todos os registros',
     })
    async index(): Promise<UserEntity[]>{
        return await this.usersService.findAll();
    }

    // Cria um novo registro
    @Post()
    @ApiBody({ 
        description : 'Cria um novo registro',
        type: UserDto
    })
    async create(@Body() user: UserDto): Promise<UserEntity>{
        return await this.usersService.create(user);
    }

    // Busca registro pelo id
    @Get(':id')
    @ApiBody({ 
        description : 'Busca registro pelo id',
        type: IdDto 
    })
    async find(@Param('id') id : number): Promise<UserEntity>{
        return await this.usersService.findOne(id);
    }

    // Deleta registro pelo id
    @Delete(':id')
    @ApiBody({ 
        description : 'Deleta registro pelo id',
        type: IdDto 
    })
    async delete(@Param('id') id : number): Promise<void>{
        return await this.usersService.remove(id);

    }

    // Atualiza registro pelo id
    @Put(':id')
    @ApiBody({ 
        description : 'Atualiza registro pelo id',
        type: AtualizaDto 
    })
    async update( @Param('id') id : number, @Body() data: any ): Promise<void>{
        return await this.usersService.update({ id, data });
    }
    
}


