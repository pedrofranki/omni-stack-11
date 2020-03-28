import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';


import api from '../../services/api';
import './style.css';

import img from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

const Logon = ()=>{
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogonSubmit(e){
        e.preventDefault();
    
        try{
            const response = await api.post('/sessions', {
                id
            });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(e){
            alert('erro no login');

        }
    }

    return (
    <div className="logon-container">
        <section className="form">
            <img src={logo} alt="Logo"/>
            <form onSubmit={handleLogonSubmit}>
                <h2>Faça seu login</h2>
                <input type="text" placeholder="Sua ID" value={id} onChange={e=>setId(e.target.value)}/>
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