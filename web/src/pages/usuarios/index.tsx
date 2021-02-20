import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Menu from '../../components/menu';

function usuarios() {
  return (
        <div className=" home row m-0">
            <Menu />
            <div className="col-10 content p-0 m-0">
                <div className="topo m-0 p-3 col-12 text-center">
                    <h1>Usuários</h1>
                </div>

 


            </div>
        </div>
  );
}

export default usuarios;