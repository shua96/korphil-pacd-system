<template>
    <v-layout class="container">
        <v-sheet class="elevation-1 ">
            <h1 style="text-align: center;">This is Header</h1>
            <v-table class="table fixed-table">
                <thead>
                    <tr>

                        <th style="font-weight: 900;height: 100px;">
                            A. Total Number of Clients Server by Gender
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Gender
                        </th>
                        <th style="font-weight: bold;" class="text-center">
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
                    <th></th>
                </tbody>
            </v-table>
        </v-sheet>
    </v-layout>

    <v-layout class="container">
        <v-sheet class="elevation-1 ">
            <h1 style="text-align: center; margin-top: 50px;">This is Header </h1>
            <v-table class="table fixed-table">
                <thead>

                    <tr>

                        <th style="font-weight: 900;height: 100px;">
                            B. Total Number of Clients Server by Gender
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Gender
                        </th>
                        <th style="font-weight: bold;" class="text-center">
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
                    <th></th>
                </tbody>
            </v-table>
        </v-sheet>
    </v-layout>
</template>
  
<script setup>
import { useAppStore } from '@/stores/app';
let app = useAppStore();
</script>
  
<style>
.text {
    text-align: center;
}



.table {
    margin-top: 190px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

}

.container>.v-sheet {
    flex: 1;
    max-width: 80%;
}

.fixed-table {
    table-layout: fixed;
}

.fixed-table th,
.fixed-table td {
    width: 50%;
    word-wrap: break-word;
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
  