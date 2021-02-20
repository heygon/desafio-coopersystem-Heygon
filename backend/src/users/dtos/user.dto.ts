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