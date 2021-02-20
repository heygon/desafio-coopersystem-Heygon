import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Logo from './../../assets/images/logo.png';

function Login() {
  return (
        <div className=" cardLogin row">
            
            <div className="cardl col-4">
                <img src={Logo} alt="Logo"/>
                <div className="col-12">&nbsp;</div>
                <h2 className="text-center">Login</h2>
                <div className="col-12">&nbsp;</div>
                <div className="input-group input-group-lg mb-3">
                    <strong className="col-12">E-mail ou CPF</strong>
                    <input type="text" className="form-control rounded" placeholder="Digite seu E-mail ou CPF" />
                </div>
                <div className="input-group input-group-lg mb-3">
                    <strong className="col-12">Senha</strong>
                    <input type="password" className="form-control rounded" placeholder="Senha" />
                </div>
                <div className="col-12">&nbsp;</div>
                <Link to="/home" >
                    <div className="col-12 btn btn-success btn-lg">Entrar</div>
                </Link>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 row p-0 m-0">
                    <Link to="/recuperarSenha" className="cursor-pointer col-4 p-0">
                        <strong>Recuperar senha</strong>
                    </Link>
                    <span className="col-4 text-center">OU</span> 
                    <Link to="/cadastro"  className="cursor-pointer text-end col-4 p-0">
                        <strong>Cadastre-se</strong>
                    </Link>
                </div>
                
            </div>

        </div>
  );
}

export default Login;