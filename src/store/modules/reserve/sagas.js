import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { addReserveSuccess, updateAmountReserve } from './actions';

import api from '../../../services/api'

function* addToReserve({ id }) {

    const tripExist = yield select(state => state.reserve.find(trip => trip.id === id))
    if (tripExist) {
        yield put(updateAmountReserve(id))
    } else {
        const response = yield call(api.get, `http://localhost:3333/trips/${id}`)
        const data = {
            ...response.data,
            amount: 1
        }
        yield put(addReserveSuccess(data))
    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])