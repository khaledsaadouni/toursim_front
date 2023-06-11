export function getIncome(reservations) {

    let income = 0;
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].state === "Confirmed") {
            income += reservations[i].price
        }

    }

    return income;
}

export function getReserNumver(reservations) {

    let income = [0, 0, 0];
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].offer.generic_Type === "accomodation") {
            income[0]++;
        }
        if (reservations[i].offer.generic_Type === "restoration") {
            income[1]++;
        }
        if (reservations[i].offer.generic_Type === "event") {
            income[2]++;
        }

    }

    return income;
}

export function getClient(reservations) {

    const clientArray = []
    for (let i = 0; i < reservations.length; i++) {

        clientArray.push(reservations[i].user.email)


    }

    const set = new Set(clientArray)
    return set.size;
}

export function getCount(offers, type) {

    let total = 0
    for (let i = 0; i < offers.length; i++) {
        if (offers[i].generic_Type === type) {
            total++
        }


    }

    return total;
}

export function getNumber(reservations) {
    const current = new Date()


    const reservationCounts = new Array(12).fill(0);

// Iterate over the reservations
    for (const reservation of reservations) {
        const date = new Date(reservation.creation_date);
        if (current.getFullYear() === date.getFullYear()) {
            const month = date.getMonth();
            reservationCounts[month]++;
        }
    }

    return reservationCounts;
}

export function get6latest(reservations) {

    reservations.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));


    return reservations.slice(0, 6);
}

export function getAccomDates(accommodation) {

    const dates = [];
    for (let j = 0; j < accommodation.length; j++) {

        if (accommodation[j].reservations !== []) {
            for (let i = 0; i < accommodation[j].reservations.length; i++) {
                if (accommodation[j].reservations[i].state === "Confirmed") {
                    const currentDate = new Date(accommodation[j].reservations[i].date);
                    const lastDate = new Date(accommodation[j].reservations[i].checkout);
                    const date = {}
                    date["title"] = accommodation[j].name;
                    date["date"] = accommodation[j].reservations[i].date;
                    date["color"] = "#a38182"
                    dates.push(date)
                    while (currentDate < lastDate) {
                        currentDate.setDate(currentDate.getDate() + 1);
                        const date = {}
                        date["title"] = accommodation[j].name;
                        const formattedDate = currentDate.toISOString().slice(0, 10);
                        date["date"] = formattedDate;
                        date["color"] = "#a38182"
                        dates.push(date)
                        //  currentDate.setDate(currentDate.getDate() + 1);

                    }
                }
            }
        }
    }
    return dates;
}

export function getRestaDates(accommodation) {

    const dates = [];
    for (let j = 0; j < accommodation.length; j++) {

        if (accommodation[j].reservations !== []) {
            for (let i = 0; i < accommodation[j].reservations.length; i++) {
                if (accommodation[j].reservations[i].state === "Confirmed") {
                    const date = {}
                    date["title"] = accommodation[j].name + ": " + accommodation[j].reservations[i].count_people + " places";
                    date["date"] = accommodation[j].reservations[i].date;
                    date["color"] = "#a4a2ad"
                    dates.push(date)
                }
            }
        }
    }
    return dates;
}

export function getEventDates(accommodation) {

    const dates = [];
    for (let j = 0; j < accommodation.length; j++) {
        const date = {}
        date["title"] = accommodation[j].name;
        date["date"] = accommodation[j].eventDate;

        dates.push(date)

    }
    return dates;
}

