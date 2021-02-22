import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Menu from '../../components/menu';
import api from '../../services/api';

function Home() {

    const [usuarios, setusurios] = useState(0);
    const [admin, setadmin] = useState(0);

    function listaUsuarios(){
        api.get('users',{})
        .then((e) => {
            if(e.data.length >= 1){
                let us = 0;
                let ad = 0;
                for (let u = 0; u < e.data.length; u++) {
                    if(e.data[u].perfil === 1){
                        us++;
                    }else if(e.data[u].perfil === 2){
                        ad++;
                    }
                }
                setusurios(us);
                setadmin(ad);
            }
        })
        .catch((e) => {})
        
    }


  return (
        <div className=" home row m-0" onLoad={ listaUsuarios }>
            <Menu />
            <div className="col-10 content p-0 m-0">
                <div className="topo m-0 p-3 col-12 text-center">
                    <h1>Home</h1>
                </div>

                <div className="row col-12 mt-5 pt-5">
                    <Link to="/usuarios" className="col-4 offset-2">
                        <div className=" boxHome p-5 cursor-pointer text-center" >
                            <h1 className="col s12">{usuarios}</h1>
                            <strong>Usuários</strong>
                        </div>
                    </Link>
                    <Link to="/administradores" className="col-4 offset-1">
                        <div className=" boxHome p-5 cursor-pointer text-center">
                            <h1 className="col s12">{admin}</h1>
                            <strong>Administradores</strong>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
  );
}

export default Home;