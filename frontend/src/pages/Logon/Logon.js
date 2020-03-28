import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import img from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi'

const Logon = ()=>{
    return (
    <div className="logon-container">
        <section className="form">
            <img src={logo} alt="Logo"/>
            <form>
                <h2>Faça seu login</h2>
                <input type="text" placeholder="Sua ID"/>
                <button type="submit" className="button">Entrar</button>
                <Link to="/register" className="back-link">
                    <FiLogIn size={16} color="#e02041"/>
                    <span>Não tenho cadastro</span>
                </Link>
            </form>
        </section>
        <img src={img} alt="Heroes"/>
    </div>)
}

export default Logon;