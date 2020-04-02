import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


import './styles.css';
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png';

export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault(); 

        try {
            const response = await api.post('session', { id });


            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);

            history.push('./profile')
            console.log(response.data.name);
        } catch  (err) { 
            alert('Falha no login, tente novamente.')
        }
    }
    
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg}></img>

                <form onSubmit= { handleLogin }>
                    <h1>Faça seu login</h1>
                    <input 
                    placeholder= "Sua ID"
                    value={id}
                    onChange={e=> setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar </button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02141"/>
                        Não tenho cadastro
                    </Link> 
                </form>
            </section>
        
            <img src={herosImg} alt="Heroes"></img>
        </div>
        );
}

// o component Link do react-router-dom substitui o 'a' (link) tornando o app ASP