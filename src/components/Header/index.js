import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <header className="container">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <Link className="reserva" to="reservas">
                <div>
                    <strong>Minhas reservas</strong> 
                    <span> 0 Reservas</span>
                </div>
            </Link>
        </header>
    )
}