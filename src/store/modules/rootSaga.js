import { all } from 'redux-saga/effects';
import reserve_sagas from './reserve/sagas';

export default function* rootSaga() {
    return yield all([
        reserve_sagas
    ])
}