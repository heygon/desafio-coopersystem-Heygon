import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


interface usuariosItemProps{
    usuarios : {
        id     : string;
        nome   : string;
        email  : string;
        cpf    : string;
        perfil : number;
    }
}

const TabelaUsuarios: React.FC<usuariosItemProps> = ({ usuarios }) => {
    const history = useHistory();
    function atualizarPerfil(id:any, userid:any){

        api.post('alterarPerfil',{
            id,
            userid
        }).then((e) => {
            if(e.data.resp == 's'){
                if(e.data.per == 1){
                    history.push("/usuarios");
                }else{
                    history.push("/administradores");
                }
            }
        }).catch(() => {

        })

    }

    return (
        <tr>
            <td>{ usuarios.nome }</td>
            <td>{ usuarios.email }</td>
            <td>{ usuarios.cpf }</td>
            {usuarios.perfil === 1 ? 
                <td><div className="btn btn-info ">Virar Administrador</div></td>
                :
                <td><div className="btn btn-info " onClick={ () => { atualizarPerfil('', usuarios.id) }  }>Virar Usuário</div></td>
            }
        </tr>
    )
}

export default TabelaUsuarios;