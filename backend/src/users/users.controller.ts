import { Body, Controller, Delete, Get, Param, PayloadTooLargeException, Post, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserEntity } from './database/user.entity';
import { UserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    // Lista todos os registros
    @Get()
    async index(): Promise<UserEntity[]>{
        return await this.usersService.findAll();
    }

    // Cria um novo registro
    @Post()
    @ApiBody({ type: UserDto })
    async create(@Body() user: UserDto): Promise<UserEntity>{
        return await this.usersService.create(user);
    }

    // Busca registro pelo id
    @Get(':id')
    async find(@Param('id') id : number): Promise<UserEntity>{
        return await this.usersService.findOne(id);
    }

    // Deleta registro pelo id
    @Delete(':id')
    async delete(@Param('id') id : number): Promise<void>{
        return await this.usersService.remove(id);

    }

    // Atualiza registro pelo id
    @Put(':id')
    async update( @Param('id') id : number, @Body() data: any ): Promise<void>{
        return await this.usersService.update({ id, data });
    }
    
}


