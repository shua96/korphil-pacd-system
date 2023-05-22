<template>
    <v-btn @click="printReport">Print</v-btn>
    <div class="container">
        <v-sheet class="elevation-1">
            <div class="text-center">
                <h4>CUSTOMER FEEDBACK STATISTICAL REPORT</h4>
                <h5>For the period covered of JANUARY 2023</h5>
            </div>
            <v-table class="table fixed-table" style="border-bottom: 1px solid;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px; font-size: 14px;">
                            A. Total Number of Clients Served by Gender
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold; font-size: 14px;" class="text-center divider">
                            Gender
                        </th>
                        <th style="font-weight: bold; font-size: 14px;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text" style="font-size: 14px;">
                    <tr v-for="gender in genders" :key="gender.name">
                        <td class="text-center divider">{{ gender.name }}</td>
                        <td>{{ gender.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalGenders }}</td>
                    </tr>
                    <th></th>
                </tbody>
            </v-table>
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px; border-bottom: 1px solid;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            B. Distribution of Clients Served by Age Group
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Age Group
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="age in ages" :key="age.name">
                        <td class="text-center divider">{{ age.name }}</td>
                        <td>{{ age.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalAges }}</td>
                    </tr>
                    <th></th>
                </tbody>
            </v-table>
        </v-sheet>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

let genders = ref([
    {
        name: 'Male',
        clients: 305,
    },
    {
        name: 'Female',
        clients: 305,
    },
]);

const getTotalGenders = computed(() => {
    let total = 0;
    for (let gender of genders.value) {
        total += gender.clients;
    }
    return total;
});
let ages = ref([
    {
        name: '15-25',
        clients: 305,
    },
    {
        name: '26-35',
        clients: 305,
    },
    {
        name: '36-45',
        clients: 305,
    },
    {
        name: '46-55',
        clients: 305,
    },
    {
        name: '56-65',
        clients: 305,
    },
    {
        name: '66 and Above',
        clients: 305,
    },
    {
        name: 'Age not indicated',
        clients: 305,
    },
]);

const getTotalAges = computed(() => {
    let total = 0;
    for (let age of ages.value) {
        total += age.clients;
    }
    return total;
});


function printReport() {
    window.print()
};

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
  