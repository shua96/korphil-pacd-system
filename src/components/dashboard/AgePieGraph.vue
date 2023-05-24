<template>
    <div class="text-center">
        <h1>Age Group</h1>
        <div>
            <canvas ref="chartCanvas"></canvas>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

const instance = getCurrentInstance();

const data = {
    labels: [
        '15-25',
        '26-35',
        '36-45'
    ],
    datasets: [{
        label: 'Number of Clients',
        data: [300, 50],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
};

let chart;

onMounted(() => {
    chart = new Chart(instance.refs.chartCanvas, config);
});

onBeforeUnmount(() => {
    if (chart) {
        chart.destroy();
    }
});
</script>
