<template>
  <v-btn class="print-button" @click="printSummary">Print</v-btn>
  <h1 class="pl-10 mb-10 ">Summary Report</h1>
  <v-sheet style="border-radius: 15px; background-color: white;" class="px-16 pt-5 mx-10 mb-5 elevation-1">
    <v-btn @click="count.countClients(clients)">
      COUNT CLIENT
    </v-btn>
    <v-btn @click="count.countMale(clients)">
      Male Count
    </v-btn>

    <v-row no-gutters>
      <v-col cols="1">
        <div class="my-5">Sort by:</div>
      </v-col>
      <v-col cols="5" class="mr-1">
        <v-combobox label="Month"
          :items="['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', ' September', 'October', 'November', 'December']"
          variant="solo" clearable v-model="sortByMonth">
        </v-combobox>
      </v-col>
      <v-col cols="5">
        <v-combobox label="Year" v-model="sortByYear" :items="years" variant="solo" clearable>
        </v-combobox>
      </v-col>
    </v-row>
  </v-sheet>
  <div class="main-container">
    <h4 class="mt-5">SUMMARY REPORT FOR FACE TO FACE TRANSACTION</h4>
    <h5>(Customer Feedback Form TESDA-OP-AS-03-F01)</h5>
    <h5>For the month of {{ sortByMonth }} {{ sortByYear }}</h5>
    <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">A. Total Number of Clients Served by Sex</th>
          <th></th>
        </tr>
        <tr>
          <th>Gender</th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center divider">Male</td>
          <td class="text-center">{{ count.countMale(clients) }}</td>
        </tr>
        <tr>
          <td class="text-center divider">Female</td>
          <td class="text-center">{{ sexes[0].clients }}</td>
        </tr>
        <tr>
          <th class="text-center divider">Total</th>
          <td class="text-center">{{ getTotalSexes }}</td>
        </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">B. Distribution of Clients Served by Age Group</th>
          <th></th>
        </tr>
        <tr>
          <th>Age Group</th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="age in ages" :key="age.name">
          <td class="text-center divider">{{ age.name }}</td>
          <td class="text-center">{{ age.clients }}</td>
        </tr>
        <tr>
          <th class="text-center divider">
            Total
          </th>
          <td class="text-center">{{ getTotalAges }}</td>
        </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">C. Total Number of Clients by Reason of Visit</th>
          <th></th>
        </tr>
        <tr>
          <th>Reason for Visit</th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reason in reasons" :key="reason.name">
          <td class="divider">{{ reason.name }}</td>
          <td class="text-center">{{ reason.clients }}</td>
        </tr>
        <tr>
          <th class="text-center divider">
            Total
          </th>
          <td class="text-center">{{ getTotalReasons }}</td>
        </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">D. Action Provided Relative to Purpose of Visit </th>
          <th></th>
        </tr>
        <tr>
          <th>Action Provided</th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="action in actions" :key="action.name">
          <td class="divider">{{ action.name }}</td>
          <td class="text-center">{{ action.clients }}</td>
        </tr>
        <tr>
          <th class="text-center divider">
            Total
          </th>
          <td class="text-center">{{ getTotalActions }}</td>
        </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">E. Drivers of Satisfaction</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Other Areas Rated</th>
          <th>VS</th>
          <th>S</th>
          <th>P</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feedback in feedbacks" :key="feedback.name">
          <td class="divider">{{ feedback.name }}</td>
          <td class="text-center">{{ feedback.vsatisfied }}</td>
          <td class="text-center">{{ feedback.satisfied }}</td>
          <td class="text-center">{{ feedback.poor }}</td>
          <td class="text-center">{{ getTotalFeedbacks }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">F. Overall Rating </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Other Areas Rated</th>
          <th>No. of </th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feedback in feedbacks" :key="feedback.name">
          <td class="divider">{{ feedback.name }}</td>
          <td class="text-center">{{ getTotalFeedbacks }}</td>
        </tr>
      </tbody>
    </table> -->
    <table class="summary-table">
      <thead>
        <tr>
          <th class="text-left">F. Overall Rating</th>
          <th></th>
        </tr>
        <tr>
          <th>Rating </th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rate in rates" :key="rate.name">
          <td class="text-center divider">{{ rate.name }}</td>
          <td class="text-center">{{ rate.clients }}</td>
        </tr>
        <tr>
          <th class="text-center divider">
            Total
          </th>
          <td class="text-center">{{ getTotalRates }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import count from '@/helpers/count';

const sortByMonth = ref('')
const sortByYear = ref('');
const years = computed(() => {
  const year = new Date().getFullYear();
  return Array.from({ length: year - 1900 }, (_, index) => 1901 + index);
});

let sexes = ref([
  {
    name: 'Male',
    clients: '',
  },
  {
    name: 'Female',
    clients: '',
  },
]);

const getTotalSexes = computed(() => {
  let total = 0;
  for (let sex of sexes.value) {
    total += sex.clients;
  }
  return total;
});

let reasons = ref([
  {
    name: 'Assessment & Certification',
    clients: '',
  },
  {
    name: 'Registrar',
    clients: '',
  },
  {
    name: 'Training',
    clients: '',
  },
  {
    name: 'Others (Procurement, Finance and Admin, Scholarship)',
    clients: '',
  },
])

const getTotalReasons = computed(() => {
  let total = 0;
  for (let reason of reasons.value) {
    total += reason.clients;
  }
  return total;
});

let ages = ref([
  {
    name: '15-25',
    clients: '',
  },
  {
    name: '26-35',
    clients: '',
  },
  {
    name: '36-45',
    clients: '',
  },
  {
    name: '46-55',
    clients: '',
  },
  {
    name: '56-65',
    clients: '',
  },
  {
    name: '66 and Above',
    clients: '',
  },
  {
    name: 'Age not indicated',
    clients: '',
  },
]);

const getTotalAges = computed(() => {
  let total = 0;
  for (let age of ages.value) {
    total += age.clients;
  }
  return total;
});

let actions = ref([
  {
    name: '',
    clients: '',
  },
]);

const getTotalActions = computed(() => {
  let total = 0;
  for (let action of actions.value) {
    total += action.clients;
  }
  return total;
});

let feedbacks = ref([
  {
    name: '1. Mabilis na serbisyo',
    vsatisfied: 0,
    satisfied: 0,
    poor: 0,
  },
  {
    name: '2. Mahusay at may malakasakit na serbisyo',
    vsatisfied: 0,
    satisfied: 0,
    poor: 0,
  },
  {
    name: '3. Magalang at tapat na serbisyo',
    vsatisfied: 0,
    satisfied: 0,
    poor: 0,
  },
  {
    name: '4. Malinis at Maayos na tanggapan',
    vsatisfied: 0,
    satisfied: 0,
    poor: 0,
  },
  {
    name: '5. Mapagkatiwalaan na serbisyo',
    vsatisfied: 0,
    satisfied: 0,
    poor: 0,
  },
  {
    name: '6. Abot ang Lahat ang serbisyo ng TESDA',
    vsatisfied: 0,
    satisfied: 0,
    poor: 0,
  },
]);

const getTotalFeedbacks = computed(() => {
  let total = 0;
  for (let feedback of feedbacks.value) {
    total += feedback.vsatisfied + feedback.satisfied + feedback.poor;
  }
  return total;
});


let rates = ref([
  {
    name: 'Very Satisfactory',
    clients: '',
  },
  {
    name: 'Female',
    clients: '',
  },
]);

const getTotalRates = computed(() => {
  let total = 0;
  for (let rate of rates.value) {
    total += rate.clients;
  }
  return total;
});

let clients = ref([]);
onMounted(async () => {
  const response = await axios.get('/api/getClients');
  clients.value = response.data;
  console.log(clients.value);
  // try {
  //   // const response = await axios.get('/api/getclients');
  //   // const { maleCount, femaleCount } = response.data;
  //   // const { assessmentCount, registrarCount, trainingCount, othersCount } = response.data;

  //   sexes.value[1].clients = maleCount;
  //   sexes.value[0].clients = femaleCount;
  //   reasons.value[0].clients = assessmentCount;
  //   reasons.value[1].clients = registrarCount;
  //   reasons.value[2].clients = trainingCount;
  //   reasons.value[3].clients = othersCount;
  //   const ageCounts = response.data;

  //   ages.value.forEach((age) => {
  //     age.clients = ageCounts[age.name] || 0;
  //   });
  // } catch (error) {
  //   console.error('Failed to fetch age group counts:', error);
  // }
});

function printSummary() {
  window.print();
}
</script>

<style scoped>
.main-container {
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
  box-sizing: border-box;
  border: black solid;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.print-button {
  margin-bottom: 1rem;
}

.summary-table {
  width: 90%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.summary-table th,
.summary-table td {
  border: 1px solid #ccc;
  padding: 0.02rem 0.1rem;
}
</style>
