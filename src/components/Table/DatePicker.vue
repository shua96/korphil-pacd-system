<template>
    <div>
        <div class="sort-controls">
            <div>
                <label for="sort-by-date">Sort By Date:</label>
                <select id="sort-by-date" v-model="sortDate">
                    <option disabled value="">Select Date</option>
                    <option v-for="date in uniqueDates" :value="date">{{ formatDate(date) }}</option>
                </select>
            </div>
            <div>
                <label for="sort-by-year">Sort By Year:</label>
                <select id="sort-by-year" v-model="sortYear">
                    <option disabled value="">Select Year</option>
                    <option v-for="year in uniqueYears" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <div class="sort-option">
            Sort by {{ sortDate ? formatDate(sortDate) : 'Date' }}{{ sortDate && sortYear ? ' and ' : '' }}{{ sortYear ?
                sortYear : 'Year' }}
        </div>
        <ul>
            <li v-for="date in filteredDates">{{ formatDate(date) }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            dates: [
                new Date(2022, 3, 15),
                new Date(2023, 1, 25),
                new Date(2020, 11, 7),
            ],
            sortDate: null,
            sortYear: null,
        };
    },
    computed: {
        uniqueDates() {
            return [...new Set(this.dates.map(date => date.getTime()))];
        },
        uniqueYears() {
            return [...new Set(this.dates.map(date => date.getFullYear()))];
        },
        filteredDates() {
            let datesCopy = [...this.dates];
            if (this.sortDate) {
                datesCopy = datesCopy.filter(date => date.getTime() === this.sortDate);
            }
            if (this.sortYear) {
                datesCopy = datesCopy.filter(date => date.getFullYear() === this.sortYear);
            }
            return datesCopy;
        },
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString(undefined, options);
        },
    },
};
</script>
  
<style>
.sort-controls {
    display: flex;
    gap: 1rem;
}

.sort-option {
    margin-top: 1rem;
}
</style>
  