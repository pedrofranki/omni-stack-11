import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'
import './style.css';

import logo from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const handleIncidentSubmit = async e =>{
        e.preventDefault();
        try{
            await api.post('/incidents', {title,description,value}, {
                headers: {
                    Authorization: ongId,
                }
            });   
            alert('item cadastrado com sucesso');
            
        }catch(e){
            alert('erro ao cadastrar');
        }
        
    }

    return (
        <div className="new-incident">
        <div className="content">
            <section>
                <img src={logo} alt="Logo"/>
                <h1>Cadastrar novo caso</h1>
                <p> Descreva o caso ae filhão pra tu acha quem pode te ajudar</p>
                <Link to="/profile" className="back-link">
                <FiArrowLeft size={16} color="#e02041"/>
                <span>Voltar para inicio</span>
            </Link>
            </section>
            <form onSubmit={handleIncidentSubmit}>
                <input placeholder="Titulo do caso" value={title} onChange={e=>setTitle(e.target.value)}/>
                <textarea placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)} />
                <input placeholder="Valor em reais" value={value} onChange={e=>setValue(e.target.value)} />
            
                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    </div>
    )
}