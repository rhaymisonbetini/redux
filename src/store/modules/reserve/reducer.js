import produce from 'immer';

export default function reserver(state = [], action) {

    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);
                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1
                    })
                }
            })

        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >= 0) {
                    draft.splice(tripIndex, 1)
                }
            })

        case 'UPDATE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1
                }
            })


        case 'REMOVE_AMOUNT_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >= 0) {
                    draft[tripIndex].amount = draft[tripIndex].amount === 0 ? 0 : draft[tripIndex].amount -= 1;
                }
            })
        default:
            return state;
    }
}