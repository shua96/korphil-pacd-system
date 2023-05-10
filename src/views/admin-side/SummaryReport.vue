<template>
    <v-layout class="container">
        <v-card class="size">
            <v-table class="table">
                <thead>
                    <tr>
                        <th style="font-weight: 900; " colspan="2" class="mb-1">
                            A. Total Number of Clients Server by Gender
                        </th>

                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Gender
                        </th>
                        <th class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="item in app.items" :key="item.name">
                        <td class="text-center divider">{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ app.items.total }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-layout>
</template>


<script setup>
import { useAppStore } from '@/stores/app';
let app = useAppStore();
</script>

<style>
.texthead {
    margin-top: 50px;
}

.text {
    text-align: center;
}

.size {
    margin-left: 500px;
    margin-right: 550px;

}

.table {
    margin-top: 200px;

}

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
}

.divider {
    border-right: 1px solid rgb(204, 191, 191);
    height: 50px;
}

@media (max-width: 767px) {
    .size {
        margin: 0 20px;
    }
}

@media (max-width: 991px) {
    .table {
        margin-top: 20px;
    }
}
</style>