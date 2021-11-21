import React, { useState, useEffect } from 'react';
import { MdFlightTakeoff } from 'react-icons/md'
import api from '../../services/api';

import './style.css';

export default function Home() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('http://localhost:3333/trips');
      setTrips(response.data)
      console.log(trips)
    }

    loadApi()

  }, [])


  return (
    <div>
      <div className="box">
        {
          trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.tile} />
              <strong>{trip.image}</strong>
              <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

              <button type="button" onClick={() => { }}>
                <div>
                  <MdFlightTakeoff size={16} color='#FFF' />
                </div>
                <span>Solicitar Reserva</span>
              </button>

            </li>
          ))
        }
      </div>
    </div>
  );
}