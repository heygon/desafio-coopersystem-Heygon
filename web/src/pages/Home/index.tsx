import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Menu from '../../components/menu';

function Home() {
  return (
        <div className=" home row m-0">
            <Menu />
            <div className="col-10 content p-0 m-0">
                <div className="topo m-0 p-3 col-12 text-center">
                    <h1>Home</h1>
                </div>

                <div className="row col-12 mt-5 pt-5">
                    <Link to="/usuarios" className="col-4 offset-2">
                        <div className=" boxHome p-5 cursor-pointer text-center" >
                            <h1 className="col s12">10</h1>
                            <strong>Usuários</strong>
                        </div>
                    </Link>
                    <Link to="/administradores" className="col-4 offset-1">
                        <div className=" boxHome p-5 cursor-pointer text-center">
                            <h1 className="col s12">10</h1>
                            <strong>Administradores</strong>
                        </div>
                    </Link>
                </div>


            </div>
        </div>
  );
}

export default Home;