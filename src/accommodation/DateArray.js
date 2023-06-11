export function getBookedDates(reservations) {

    const dates = [];
    for (let i = 0; i < reservations.length; i++) {

        const currentDate = new Date(reservations[i].date);
        const lastDate = new Date(reservations[i].checkout);
        const date = {}
        date["title"] = "Booked";
        date["date"] = reservations[i].date;
        dates.push(date)
        while (currentDate < lastDate) {
            currentDate.setDate(currentDate.getDate() + 1);
            const date = {}
            date["title"] = "Booked";
            const formattedDate = currentDate.toISOString().slice(0, 10);
            date["date"] = formattedDate;
            dates.push(date)
            //  currentDate.setDate(currentDate.getDate() + 1);

        }
    }

    return dates;
}

