import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';

import api from '../../services/api';



export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    async function handleRegisterSubmit(e){
        e.preventDefault();
        const dataApi = {
            name, city, email, whatsapp, uf
        }

        try{

            const response = await api.post('/ongs', dataApi);
            
            alert(response.data.id);
            history.push('/');
        }catch(err){
            alert('erro no cadastro')
        }
    }
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
                <form onSubmit={handleRegisterSubmit}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{width: 80}} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}