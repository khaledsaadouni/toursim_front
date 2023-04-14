export function countPendingReservations(reservations) {
    let count = 0;
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].state === "Pending") {
            count++;
        }
    }
    return count;
}

export function countConfirmedReservations(reservations) {
    let count = 0;
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].state === "Confirmed") {
            count++;
        }
    }
    return count;
}

export function countCanceleddReservations(reservations) {
    let count = 0;
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].state === "Canceled") {
            count++;
        }
    }
    return count;
}
