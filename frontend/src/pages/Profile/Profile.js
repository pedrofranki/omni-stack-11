import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi';
import './style.css'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    useEffect(() =>{
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then(resp=>{
            console.log(resp.data);
            setIncidents(resp.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert('Erro ao deletar caso, vai la tenta de novo');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Logo"/>
                <span>Bem vinda APAD</span>

                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident=>(
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
    
                        <strong>DESCRICAO:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        
                        <button type="button" onClick={()=>handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
    
                    </li>
                ))
               
                }
              
            </ul>
        </div>
    )
}