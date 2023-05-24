 <template>
  <div class="main-container">
    <v-btn class="print-button" @click="printSummary">Print</v-btn>
    <table class="summary-table">
      <thead>
        <tr>
          <th>A. Total Number of Clients Served by Sex</th>
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
        <td>{{ sexes[1].clients }}</td>
      </tr>
      <tr>
        <td class="text-center divider">Female</td>
        <td>{{ sexes[0].clients }}</td>
      </tr>
            <tr>
        <th class="text-center divider">Total</th>
        <td>{{ getTotalSexes }}</td>
      </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th>B. Distribution of Clients Served by Age Group</th>
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
        <td>{{ age.clients }}</td>
      </tr>
      <tr>
        <th class="text-center divider">
          Total
        </th>
        <td>{{ getTotalAges }}</td>
      </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th>C. Total Number of Clients by Reason of Visit</th>
          <th></th>
        </tr>
        <tr>
          <th>Reason for Visit</th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
<tr v-for="reason in reasons" :key="reason.name">
        <td class="text-center divider">{{ reason.name }}</td>
        <td>{{ reason.clients }}</td>
      </tr>
      <tr>
        <th class="text-center divider">
          Total
        </th>
        <td>{{ getTotalReasons }}</td>
      </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th>D. Action Provided Relative to Purpose of Visit	</th>
          <th></th>
        </tr>
        <tr>
          <th>Action Provided</th>
          <th>No. of Clients</th>
        </tr>
      </thead>
      <tbody>
<tr v-for="action in actions" :key="action.name">
        <td class="text-center divider">{{ action.name }}</td>
        <td>{{ action.clients }}</td>
      </tr>
      <tr>
        <th class="text-center divider">
          Total
        </th>
        <td>{{ getTotalActions }}</td>
      </tr>
      </tbody>
    </table>
    <table class="summary-table">
      <thead>
        <tr>
          <th>E. Drivers of Satisfaction</th>
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
        <td class="text-center divider">{{ feedback.name }}</td>
        <td>{{ feedback.vsatisfied }}</td>
        <td>{{ feedback.satisfied }}</td>
        <td>{{ feedback.poor }}</td>
        <td>{{ getTotalFeedbacks }}</td>
        </tr>
       </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

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


onMounted(async () => {
    try {
        const response = await axios.get('/api/getclients');
        const { maleCount, femaleCount } = response.data;
        const { assessmentCount, registrarCount,trainingCount, othersCount } = response.data;

        sexes.value[1].clients = maleCount;
        sexes.value[0].clients = femaleCount;
        reasons.value[0].clients = assessmentCount;
        reasons.value[1].clients = registrarCount;
        reasons.value[2].clients = trainingCount;
        reasons.value[3].clients = othersCount;
        const ageCounts = response.data;

        ages.value.forEach((age) => {
            age.clients = ageCounts[age.name] || 0;
        });
    } catch (error) {
        console.error('Failed to fetch age group counts:', error);
    }
});

function printSummary() {
  window.print();
}
</script>

<style scoped>

.main-container{
  display: flex;
    margin-left: 20%;
    margin-right: 20%;
    box-sizing: border-box;
    border: black solid;
    flex-direction: column;
    align-items: center;
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
  padding: 0.5rem;
}
</style>
