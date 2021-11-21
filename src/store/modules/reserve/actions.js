export function addReserve(trip) {
    return {
        type: 'ADD_RESERVE',
        trip: trip,
    }

}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id: id
    }
}

export function updateAmountReserve(id) {
    return {
        type: 'UPDATE_RESERVE',
        id: id,
        amount: 1
    }
}

export function removeAmountReserve(id) {
    return {
        type: 'REMOVE_AMOUNT_RESERVE',
        id: id,
        amount: 1
    }
}