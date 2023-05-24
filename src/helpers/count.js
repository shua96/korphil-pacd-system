export default {
    name: 'Snoopy',
    wag() {
        alert("Tail wagging");
    },
    bark() {
        alert('arf!');
    },
    countClients(clients) {
        return clients.count;
    },
    countMale(clients) {
        let maleCount = 0;
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].sex == 'Male') {
                maleCount++;
            }
        }
        return maleCount;
    },
    countRatingMabilis(clients) {
        let count = 0;
        for (let i = 0; i < clients.length; i++) {
            let feedbacks = clients[i].feedbacks;
            for (let j = 0; j < feedbacks.length; j++) {
                let feedback = feedbacks[j];
                if (feedback.page == 2 && feedback.rating == 1) {
                    count++;
                }
            }
        }
        return count;
    }
}