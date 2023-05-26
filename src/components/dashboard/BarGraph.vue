<template>
    {{ clients }}
    <h1 class="subtitle-1">Statistical View</h1>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

onMounted(async () => {
    const ctx = document.getElementById('myChart');

    const response = await axios.get('/getclients');
    const clients = response.data;
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
})
</script>