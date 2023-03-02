<template>
    <h1 class="subtitle-1">Statistical View</h1>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';

</script>

<script>
export default {
    mounted() {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Very Satisfactory', 'Satisfactory', 'Poor'],
                datasets: [{
                    label: 'Number of Feedback',
                    data: [12, 19, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
</script>