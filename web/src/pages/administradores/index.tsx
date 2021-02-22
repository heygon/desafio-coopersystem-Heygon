import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Menu from '../../components/menu';
import api from '../../services/api';
import TabelaUsuarios from '../../components/TabelaUsuarios';


function Usuarios() {

    const [usuarios, setusurios] = useState([]);

    async function listaUsuarios(){
        await api.get('users',{})
        .then((e) => {
            if(e.data.length >= 1){
                
                let us = [] as any;
                for (let u = 0; u < e.data.length; u++) {
                    if(e.data[u].perfil === 2){
                        us.push(e.data[u]);
                    }   
                }
                setusurios(us);
                
            }
        })
        .catch((e) => {})
        
    }

  return (
        <div className=" home row m-0" onLoad={ listaUsuarios }>
            <Menu />
            <div className="col-10 content p-0 m-0">
                <div className="topo m-0 p-3 col-12 text-center">
                    <h1>Usuários</h1>
                </div>

                <div className="col s12">&nbsp;</div>
                <div className="col s12">&nbsp;</div>
                <div className="col s12">&nbsp;</div>
                <div className="card col-10 offset-1 p-5">
                    <div className="card-content">
                        <h2 className="col-12">Administradores do sistema</h2>
                        <div className="col s12">&nbsp;</div>
                        <table className="table col-12">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>CPF</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(value => {
                                    return <TabelaUsuarios usuarios={ value }/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
  );
}

export default Usuarios;