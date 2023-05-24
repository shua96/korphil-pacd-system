<template>
    <div class="text-center">
        <h1>Gender Group</h1>
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
    labels: ['Female', 'Male'],
    datasets: [{
        label: 'Number of Clients',
        data: [300, 50],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
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
