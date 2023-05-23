<template>
    <v-btn @click="printReport">Print</v-btn>
    <div class="container">
        <!-- <v-sheet class="elevation-1">
            <div class="text-center" style="margin-bottom: -180px; margin-top: 20px;">
                <h4>CUSTOMER FEEDBACK STATISTICAL REPORT</h4>
                <h5>For the period covered of JANUARY 2023</h5>
            </div>

            <v-table class="table fixed-table">
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

            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
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

            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            C. Total Number of Clients by Reason of Visit
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Reason for Visit
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="visit in visits" :key="visit.name">
                        <td class="text-center divider">{{ visit.reason }}</td>
                        <td>{{ visit.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalvisits }}</td>
                    </tr>
                    <th></th>
                </tbody>
            </v-table>

            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            D. Action Provided Relative to Purpose of Visit
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Action Provided
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="action in actions" :key="action.name">
                        <td class="text-center divider">{{ action.provided }}</td>
                        <td>{{ action.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalactions }}</td>
                    </tr>
                    <th></th>
                </tbody>
            </v-table>

            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            E. Drivers of Satisfaction
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Other Areas Related
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            VS
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            S
                        </th>

                        <th style="padding-left: 190px;"></th>

                        <th style="font-weight: bold;" class="text-center">
                            P
                        </th>
                        <th style="padding-left: 190px;"></th>

                        <th class="text-center divider">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="area in areas" :key="area.provided" class="divider">
                        <td class="text-center divider">{{ area.provided }}</td>
                        <td class="divider">{{ area.vsatisfied }}</td>
                        <td>{{ area.satisfied }}</td>
                        <th class="divider"></th>
                        <td>{{ area.poor }}</td>
                        <th class="divider"></th>
                        <td>{{ getTotalFeedbacks }}</td>
                    </tr>
                </tbody>
            </v-table>
            <th class="divider"></th>

            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            F. Overall Rating
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Rating
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="rate in rating" :key="rate.provided">
                        <td class="text-center divider">{{ rate.reason }}</td>
                        <td>{{ rate.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalratings }}</td>
                    </tr>
                    <th></th>
                </tbody>
            </v-table>
            <th></th>
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            Would you recommend TESDA to you relatives and friends?
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center">
                            Yes
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No
                        </th>

                        <th style="padding-left: 190px;" class="text-center divider"></th>

                        <th style="font-weight: bold;" class="text-center">
                            No Answer
                        </th>
                        <th style="padding-left: 190px;"></th>

                        <th class="text-center divider">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="recommends in recommend" :key="recommends.provided">
                        <td class="text-center divider">{{ recommends.clients }}</td>
                        <td>{{ recommends.clients }}</td>
                        <th></th>
                        <td>{{ getTotalrecommend }}</td>
                        <th></th>
                        <td>{{ getTotalrecommend }}</td>
                    </tr>
                    <th></th>
                </tbody>
            </v-table>
        </v-sheet> -->

        <v-sheet class="elevation-1">
            <div class="text-center" style="margin-bottom: -180px; margin-top: 20px;">
                <h4>CUSTOMER FEEDBACK STATISTICAL REPORT</h4>
                <h5>For the period covered of JANUARY 2023</h5>
            </div>

            <v-table class="table fixed-table">
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
                </tbody>
            </v-table>
            <hr style="margin-top: 20px; margin-bottom: 20px;">
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
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
                </tbody>
            </v-table>
            <hr style="margin-top: 20px; margin-bottom: 20px;">
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            C. Total Number of Clients by Reason of Visit
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Reason for Visit
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="visit in visits" :key="visit.name">
                        <td class="text-center divider">{{ visit.reason }}</td>
                        <td>{{ visit.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalvisits }}</td>
                    </tr>
                </tbody>
            </v-table>
            <hr style="margin-top: 20px; margin-bottom: 20px;">
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            D. Action Provided Relative to Purpose of Visit
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Action Provided
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="action in actions" :key="action.name">
                        <td class="text-center divider">{{ action.provided }}</td>
                        <td>{{ action.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalactions }}</td>
                    </tr>
                </tbody>
            </v-table>
            <hr style="margin-top: 20px; margin-bottom: 20px;">
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            E. Drivers of Satisfaction
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Other Areas Related
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            VS
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            S
                        </th>
                        <th style="padding-left: 190px;"></th>
                        <th style="font-weight: bold;" class="text-center">
                            P
                        </th>
                        <th style="padding-left: 190px;"></th>
                        <th class="text-center divider">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="area in areas" :key="area.provided" class="divider">
                        <td class="text-center divider">{{ area.provided }}</td>
                        <td class="divider">{{ area.vsatisfied }}</td>
                        <td>{{ area.satisfied }}</td>
                        <td class="divider"></td>
                        <td>{{ area.poor }}</td>
                        <td class="divider"></td>
                        <td>{{ getTotalFeedbacks }}</td>
                    </tr>
                </tbody>
            </v-table>
            <hr style="margin-top: 20px; margin-bottom: 20px;">
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            F. Overall Rating
                        </th>

                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center divider">
                            Rating
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No. of Clients
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="rate in rating" :key="rate.provided">
                        <td class="text-center divider">{{ rate.reason }}</td>
                        <td>{{ rate.clients }}</td>
                    </tr>
                    <tr>
                        <th class="text-center divider">
                            Total
                        </th>
                        <td>{{ getTotalratings }}</td>
                    </tr>
                </tbody>
            </v-table>
            <hr style="margin-top: 20px; margin-bottom: 20px;">
            <v-table class="table fixed-table" style="margin-top: -20px; font-size: 14px;">
                <thead>
                    <tr>
                        <th style="font-weight: 900;height: 100px;">
                            Would you recommend TESDA to your relatives and friends?
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <th style="font-weight: bold;" class="text-center">
                            Yes
                        </th>
                        <th style="font-weight: bold;" class="text-center">
                            No
                        </th>
                        <th style="padding-left: 190px;" class="text-center divider"></th>
                        <th style="font-weight: bold;" class="text-center">
                            No Answer
                        </th>
                        <th style="padding-left: 190px;"></th>
                        <th class="text-center divider">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody class="text">
                    <tr v-for="recommends in recommend" :key="recommends.provided">
                        <td class="text-center divider">{{ recommends.clients }}</td>
                        <td>{{ recommends.clients }}</td>
                        <td></td>
                        <td>{{ getTotalrecommend }}</td>
                        <td></td>
                        <td>{{ getTotalrecommend }}</td>
                    </tr>
                    <tr>
                        <th></th>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </div>
    <!-- <h3>
        <p class="textdown">Prepared by:</p>
        <p class="name" style="margin-left: 410px;">John Doe</p>
    </h3>
    <h3>
        <p class="textdown">Prepared by:</p>
        <p class="name" style="margin-left: 410px;">John Doe</p>
    </h3> -->

    <div style="display: flex;">
        <h3 style="display: inline-block">
            <p class="textdown">Prepared by</p>
            <p class="name" style="margin-left: 360px;"> JASMINNE N. OMALZA</p>
            <p class="name" style="margin-left: 380px;"> TESD Specialist II</p>
            <p class="name" style="margin-left: 350px;"> Customer Satisfaction Focal </p>
        </h3>
        <h3 style="display: inline-block; margin-left: 20px;">
            <p class="textdown">Noted by</p>
            <p class="name" style="margin-left: 290px;"> ENGR. CONSTANTINO B. PANES, Jr. Ed.D</p>
            <p class="name" style="margin-left: 350px;"> Center Administrator</p>
        </h3>
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

let visits = ref([
    {
        reason: 'Assessment & Certification',
        clients: 1,
    },
    {
        reason: 'Registrar',
        clients: 1,
    },
    {
        reason: 'Training',
        clients: 1,
    },
    {
        reason: 'Others (Procurement, Finance and Admin, Scholarship)',
        clients: 2,
    },
]);

let actions = ref([
    {
        provided: 'Assisted Client for Assessment Application',
        clients: 305,
    },
    {
        provided: 'For Entrance Exam',
        clients: 305,
    },
    {
        provided: 'Provided Information on Scholarship',
        clients: 305,
    },
    {
        provided: 'Provided Information on Competency Assessment',
        clients: 305,
    },
    {
        provided: 'For Registration on Short Term Course',
        clients: 305,
    },
    {
        provided: 'For Registration on Diploma Program',
        clients: 305,
    },
    {
        provided: 'Referred to PO',
        clients: 305,
    },
    {
        provided: 'Released CARS',
        clients: 305,
    },
    {
        provided: 'Provided Information on Program Registration',
        clients: 305,
    },
]);

let areas = ref([
    {
        provided: 'Assisted Client for Assessment Application',
        vsatisfied: 305,
        satisfied: 302,
        poor: 2,
    },
    {
        provided: 'For Entrance Exam',
        vsatisfied: 305,
        satisfied: 302,
        poor: 2,
    },
    {
        provided: 'Provided Information on Scholarship',
        vsatisfied: 305,
        satisfied: 302,
        poor: 2,
    },
    {
        provided: 'Provided Information on Competency Assessment',
        vsatisfied: 305,
        satisfied: 302,
        poor: 2,
    },
]);

let rating = ref([
    {
        reason: 'VERY SATISFACTORY',
        clients: 1,
    },
    {
        reason: 'SATISFACTORY',
        clients: 1,
    },
    {
        reason: 'POOR',
        clients: 1,
    },
]);

let recommend = ref([
    {
        clients: 1,
        clients: 1,
    },
]);

const getTotalrecommend = computed(() => {
    let total = 0;
    for (let recommends of recommend.value) {
        total = recommends.clients + recommends.clients
    }
    return total;
});


const getTotalFeedbacks = computed(() => {
    let total = 0;
    for (let area of areas.value) {
        total = area.vsatisfied + area.satisfied + area.poor;
    }
    return total;
});

const getTotalactions = computed(() => {
    let total = 0;
    for (let action of actions.value) {
        total += action.clients;
    }
    return total;
});

const getTotalvisits = computed(() => {
    let total = 0;
    for (let visit of visits.value) {
        total += visit.clients;
    }
    return total;
});

const getTotalAges = computed(() => {
    let total = 0;
    for (let age of ages.value) {
        total += age.clients;
    }
    return total;
});

const printReport = () => {
    window.print()
}
</script>
  
<style>
.textdown {
    margin-top: 90px;
    margin-left: 400px;
}

.textdown1 {
    margin-top: -25px;
    margin-left: 1400px;
}


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
  