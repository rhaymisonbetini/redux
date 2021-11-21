import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdFlightTakeoff } from 'react-icons/md'
import api from '../../services/api';

import { addReserve } from '../../store/modules/reserve/actions';


import './style.css';

export default function Home() {

  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    loadApi()
  }, [])

  async function loadApi() {
    const response = await api.get('http://localhost:3333/trips');
    setTrips(response.data)
  }

  function handleAdd(trip) {
    dispatch(addReserve(trip))
  }


  return (
    <div>
      <div className="box">
        {
          trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.tile} />
              <strong>{trip.image}</strong>
              <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

              <button type="button" onClick={() => handleAdd(trip)}>
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