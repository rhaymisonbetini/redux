import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import './style.css';

import logo from '../../assets/logo.svg'

export default function Header() {

    const reserveSize = useSelector(state => state.reserve.length)

    return (
        <header className="container">
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <Link className="reserva" to="reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span> {reserveSize} Reservas</span>
                </div>
            </Link>
        </header>
    )
}