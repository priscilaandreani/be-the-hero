import React, { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import {FiPower, FiTrash2}  from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName');
    const [incidents, setIncidents] = useState([]);

    useEffect(()=> {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [userId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete( `incident/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(err){
            alert('Erro ao deletar incidente, tente novamente.');
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src= {logoImg} alt="be the hero"/>
                <span>Bem Vinda, {userName}</span> 

                <Link to="/incident/new" className="button">Cadastrar novo caso </Link>
                <button type="button">
                    <FiPower size={18} color= "#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>

            { incidents.map(incident => (
                <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
    
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat( 'pt-BR', {style: 'currency',  currency: 'BRL'}).format(incident.value)}</p>
    
                        <button onClick= {()=> handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                </li>
            ))}
            </ul>
        </div>
    );
}