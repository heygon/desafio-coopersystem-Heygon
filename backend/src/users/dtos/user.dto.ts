import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
    @ApiProperty()
    nome   : string;

    @ApiProperty()
    email  : string;

    @ApiProperty()
    cpf    : string;

    @ApiProperty()
    senha  : string;

    @ApiProperty()
    perfil : number;
}

export class LoginDto {
    @ApiProperty({
        description : "Esse campo aceita o E-mail ou o CPF",
        type: String
    })
    Login   : string;

    @ApiProperty({
        type: String
    })
    Senha  : string;
}

export class RecuperarSenhaDto {
    @ApiProperty()
    email : string;
}

export class IdDto {
    @ApiProperty()
    id : number;
}

export class AtualizaDto {
    @ApiProperty()
    nome   : string;

    @ApiProperty()
    email  : string;

    @ApiProperty()
    cpf    : string;

    @ApiProperty()
    senha  : string;

    @ApiProperty()
    perfil : number;
}

export class NovaSenhaDto {
    @ApiProperty()
    email   : string;

    @ApiProperty()
    novotoken  : string;

    @ApiProperty()
    novasenha    : string;
}

export class alterarPerfilDto {
    @ApiProperty()
    id   : string;

    @ApiProperty()
    userid  : string;

}
