function calculateAverageRate(reviews) {
    if (reviews.length === 0) {
        return 0
    } else {
        let totalRate = 0;
        let count = 0;

        // loop through each review and calculate the total rate
        reviews.forEach((review) => {
            // calculate the average rate (rounding to nearest integer)
            if (review.rate !== -1) {
                totalRate += Math.round(review.rate / 2);
                count++;
            }
        });

        // calculate the average rate (rounding to nearest integer)
        const averageRate = Math.round(totalRate / count);

        // ensure the average rate is between 0 and 5
        return Math.max(Math.min(averageRate, 5), 0);
    }
}

export default calculateAverageRate;