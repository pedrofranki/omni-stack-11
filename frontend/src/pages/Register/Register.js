import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';

import logo from '../../assets/logo.svg';


export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>
                    <h1>Cadastro</h1>
                    <p>Façs seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/register" className="back-link">
                    <FiArrowLeft size={16} color="#e02041"/>
                    <span>Não tenho cadastro</span>
                </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 80}} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}