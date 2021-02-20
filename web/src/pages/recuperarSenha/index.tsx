import React from 'react';

import './style.css';
import Logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function RecuperarSenha() {
  return (
        <div className=" cardLogin row">
            
            <div className="cardl col-4">
                <img src={Logo} alt="Logo"/>
                <div className="col-12">&nbsp;</div>
                <h2 className="text-center">Recuperar Senha</h2>
                <div className="col-12">&nbsp;</div>
                <div className="input-group input-group-lg mb-3">
                    <strong className="col-12">Informe seu E-mail ou CPF para recuperar a senha</strong>
                    <input type="text" className="form-control rounded" placeholder="Digite seu E-mail ou CPF" />
                </div>
                
                <div className="col-12">&nbsp;</div>
                <div className="col-12 btn btn-success btn-lg">Enviar E-mail</div>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 text-center cursor-pointer">
                    <Link to="/">
                        <strong>Voltar</strong>
                    </Link>
                </div>
                
            </div>

        </div>
  );
}

export default RecuperarSenha;