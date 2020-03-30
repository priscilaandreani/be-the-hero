import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png';

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg}></img>

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder= "Sua ID"/>
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