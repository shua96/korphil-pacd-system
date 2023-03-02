<template>
    <div class="text-center">
        <h1>Reason For Visit</h1>
        <div>
            <canvas ref="chartCanvas"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    mounted() {
        const data = {
            labels: [
                'Training',
                'Registrar',
                'Certification And Assessment'
            ],
            datasets: [{
                label: 'Number of Clients',
                data: [300, 50, 100],
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

        this.chart = new Chart(this.$refs.chartCanvas, config);
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
}
</script>
