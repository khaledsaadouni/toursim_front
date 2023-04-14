function daysCount(date1, date2) {
    // Convert the date strings to Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Calculate the number of milliseconds between the two dates
    const diffMs = Math.abs(d1 - d2);

    // Convert milliseconds to days
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return days;
}

export default daysCount;