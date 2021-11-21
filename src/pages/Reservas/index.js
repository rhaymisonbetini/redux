import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import { removeReserve, updateAmountReserve, removeAmountReserve } from '../../store/modules/reserve/actions';

import './style.css';

export default function Reservas() {

  const dispatch = useDispatch()
  const reservers = useSelector(state => state.reserve)

  function handleRemove(id) {
    dispatch(removeReserve(id))
  }

  function decrementAmount(reserve) {
    dispatch(removeAmountReserve(reserve.id))
  }

  function incrementAmount(reserve) {
    dispatch(updateAmountReserve(reserve.id))
  }

  return (
    <div>
      <h1 className="title">Voce solicitou {reservers.length} {reservers.length === 1 ? 'reserva' : 'reservas'}</h1>
      {
        reservers.map(reserve => (
          <div className="reservas" key={reserve.id}>
            <img
              src={reserve.image}
              alt={reserve.title}
            />
            <strong>{reserve.title}</strong>

            <div>
              <button type="button" onClick={() => decrementAmount(reserve)}>
                <MdRemoveCircle size={25} color="#191919" />
              </button>
              <span>Quantidade: {reserve.amount}</span>
              <button type="button" onClick={() => incrementAmount(reserve)}>
                <MdAddCircle size={25} color="#191919" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleRemove(reserve.id)}
            >
              <MdDelete size={20} color="#191919" />
            </button>
          </div>

        ))
      }
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>

    </div>
  );
}