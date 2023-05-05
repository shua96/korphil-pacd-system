<!-- <template >
    <h1 class="pl-10 mb-10">Summary Report</h1>
    <v-card style="border-radius: 15px; background-color: white;" class="px-16 pt-5 mx-10 mb-5 elevation-1">
        <v-row no-gutters>
            <v-col>
                <v-toolbar-title class="text-black; text-bold " style="font-weight: bold;">What are you looking
                    for?</v-toolbar-title>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="12">
                <v-text-field v-model="search" solo prepend-inner-icon="mdi-magnify"
                    label="Search for category, name, keyword, etc." single-line></v-text-field>
            </v-col>
        </v-row>
    </v-card>

    <v-data-table :search="search" v-model="selected" show-select :headers="headers" :items="data"
        class="v-table elevation-1 pt-5 ml-10 mb-5" style="border-radius: 15px; background-color:">
        <template v-slot:top>
            <v-toolbar flat>
                <v-col cols="8">

                    <v-toolbar-title>Feedback</v-toolbar-title>
                </v-col>
                <v-col>
                    <div class="my-5 ml-16">Sort by:</div>
                </v-col>
                <v-col class="mx-1">
                    <v-select label="Select Year" :items="[2000, 2001, 2002, 2003, 2004, 2004, 2005]" variant="solo">
                    </v-select>
                </v-col>
                <v-col>
                    <v-select label="Select Month"
                        :items="['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', ' September', 'October', 'November', 'December']"
                        variant="solo">
                    </v-select>
                </v-col>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ props }">
                        <v-btn class="mb-5 pa-7 elevation-1" style="background-color: #3C59A6; color: white;"
                            v-bind="props">
                            Generate
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.gender" label="Gender"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.contact" label="Contact Number"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.email" label="Email Address"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-square-edit-outline
            </v-icon>
            <v-icon size="small" color="red" @click="deleteItem(item.raw)">
                mdi-trash-can-outline
            </v-icon>
        </template>
        <template v-slot:no-data>
            <div>No Data Available</div>
        </template>
    </v-data-table>
    <v-main class="v-main"></v-main>
</template>
  
<script>
export default {
    data: () => ({
        search: '',
        selected: [],
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                title: 'Name',
                align: 'start',
                key: 'name',
            },
            { title: 'Age', key: 'age' },
            { title: 'Gender', key: 'gender' },
            { title: 'Contact No.', key: 'contact' },
            { title: 'Email Adr.', key: 'email' },
            { title: 'Address', key: 'address' },
            { title: 'Actions', key: 'actions' },
        ],
        data: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            age: '',
            gender: '',
            contact: '',
            email: '',
            address: '',
        },
        defaultItem: {
            name: '',
            age: '',
            gender: '',
            contact: '',
            email: '',
            address: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.data = [
                { name: 'John Doe' },
                { name: 'Curtis Carpenter' },
                { name: 'Presley Rodgers' },
                { name: 'Diego Estrada' },
                { name: 'Aedan Rivera' },
            ]
        },

        editItem(item) {
            this.editedIndex = this.data.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.data.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.data.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.data[this.editedIndex], this.editedItem)
            } else {
                this.data.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>
  
<style>
.v-main {
    background-color: #F7F7FB;
}

.v-table {
    max-width: 95%;
}

.v-toolbar__content {
    background-color: white;
}

.v-btn.v-theme--light.text-red.v-btn--density-default.v-btn--size-default.v-btn--variant-text mb-2 {
    background-color: #3C59A6;
}

.v-data-table__td.v-data-table-column--align-start.v-data-table__th.v-data-table__th {
    background-color: #F7F7FB;
}

.v-btn {
    align-content: center;
}
</style>
 -->

<!-- <template>
    <h1 class="text">Test Data</h1>
    <form @submit.prevent="submit">
        <v-text-field label="firstname" type="text" v-model="name.firstname" required></v-text-field>
        <v-text-field label="middlename" type="text" v-model="name.middlename" required> </v-text-field>
        <v-text-field label="lastname" type="text" v-model="name.lastname" required> </v-text-field>
        <v-text-field label="lastname" type="text" v-model="name.gender" required> </v-text-field>
        <v-text-field label="age" type="number" v-model="name.age" required> </v-text-field>
        <v-text-field label="age" type="number" v-model="name.contact" required> </v-text-field>
        <v-text-field label="email" type="text" v-model="name.email" required> </v-text-field>
        <v-text-field label="email" type="text" v-model="name.address" required> </v-text-field>
        <v-btn class="button" type="submit">Submit</v-btn>
    </form>
    <v-layout style="display: flex; justify-content: center;">
        <v-card class="elevetaion-2" width="500" height="500" color="#808080">
            <ul>
                <li v-for="item in items" :key="item.id">{{ item.firstname }} {{ item.middlename }} {{ item.lastname }}</li>
            </ul>
        </v-card>

    </v-layout>
</template>
  
<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';



let items = ref([
    { firstname: '' }
])

let name = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    age: 0,
    gender: '',
    contact: 0,
    email: '',
    address: '',
});

async function submit() {
    await axios.post("http://localhost/pacd-system-api/public/api/createclient", name.value)
    getdata();
}

onMounted(getdata);

async function getdata() {
    let response = await axios.get("http://localhost/pacd-system-api/public/api/getclients")
    items.value = response.items
}

</script>
  
<style>
.text {
    text-align: center;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style> -->

<!-- <template>
    <v-card>
        <v-card-title>
            <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" show-expand single-expand item-key="name" :search="search">
            <template #item.address="{ value }">
                <div class="text-truncate" style="max-width: 130px">
                    {{ value }}
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';

let search = ref('')
let items = ref([
    {
        "_id": "5ea1e60a7104924488c67093",
        "name": {
            "first": "Wilma",
            "last": "Ferrell"
        },
        "company": "OMATOM",
        "email": "wilma.ferrell@omatom.info",
        "phone": "+1 (815) 526-2057",
        "url": "//google.com",
        "address": "621 Pilling Street, Elliston, Arizona, 4968"
    },
])

let headers = ref([
    { text: 'company', align: 'left', width: 300, filterable: false, value: 'company' },
    { text: 'email', value: 'email', width: 200 },
    { text: 'url', value: 'url', width: 200 },
    { text: 'address', value: 'address', width: 130 },
])
</script>
<style>
.text-truncate {
    display: inline-block;
    /* width: 200px; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style> -->

<template>
    <h1 class="pl-10 mb-10 ">Reports</h1>
    <v-sheet style="border-radius: 15px; background-color: white;" class="px-16 pt-5 mx-10 mb-5 elevation-1">
        <v-row no-gutters>
            <v-col>
                <v-toolbar-title class="text-black; text-bold " style="font-weight: bold;">What are you looking
                    for?</v-toolbar-title>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="9">
                <v-text-field v-model="search" solo prepend-inner-icon="mdi-magnify"
                    label="Search for category, name, keyword, etc." single-line></v-text-field>
            </v-col>
            <v-col>
                <div class="my-5 ml-8">Sort by:</div>
            </v-col>
            <v-col class="mx-1">
                <v-combobox label="Year" v-model="sortByYear" :items="years" variant="solo" clearable>
                </v-combobox>
            </v-col>
            <v-col>
                <v-combobox label="Month"
                    :items="['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', ' September', 'October', 'November', 'December']"
                    variant="solo" clearable>
                </v-combobox>
            </v-col>
        </v-row>
    </v-sheet>
    <v-data-table :search="search" :headers="headers" :items="data" class="v-table elevation-1 pt-5 mx-10 mb-5"
        style="border-radius: 15px;">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Department/s</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px" persistent>
                    <template v-slot:activator="{ props }">
                        <v-btn class="mb-2 elevation-1" style="background-color: #3C59A6; color: white;" v-bind="props">
                            New Item
                        </v-btn>
                    </template>
                    <v-sheet>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.name"
                                            label="New Department(Service/s)"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" class="border-button" @click="close()">
                                Cancel
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" class="border-button" @click="save()">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-sheet>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px" color="error">
                    <v-sheet class="pa-2">
                        <v-icon size="x-large" color="#E12727"
                            style="display: flex; margin: auto;">mdi-alert-circle-outline</v-icon>
                        <v-card-title class="text-h5" style="display: flex; justify-content: center;">Are you
                            sure?</v-card-title>
                        <p class="text-h7" style="display: flex; justify-content: center;">Do you really want
                            to delete this item?</p>
                        <v-card-actions class="mt-6">
                            <v-spacer></v-spacer>
                            <v-btn class="text-capitalize px-5 border-button" style="border-color: #B4B2B2;" variant="flat"
                                @click="closeDelete()">Cancel</v-btn>
                            <v-btn class="text-capitalize px-5 border-button" style="border-color: #E12727;" variant="flat"
                                @click="deleteItemConfirm">Delete</v-btn>
                            <v-spacer></v-spacer>

                        </v-card-actions>
                    </v-sheet>
                </v-dialog>
            </v-toolbar>
            <v-snackbar v-model="EditSnackbar" :timeout="timeout" color="info" vertical>
                <v-icon size="large" class="mr-2">mdi-check-circle-outline</v-icon>
                {{ getSnackbarText() }}

                <template v-slot:actions>
                    <v-btn color="white" variant="text" @click="EditSnackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-square-edit-outline
            </v-icon>
            <v-icon size="small" @click="deleteItem(item.raw)" color="error">
                mdi-trash-can-outline
            </v-icon>
            <v-icon size="small" @click="routeTo(item)" class="ml-2">
                mdi-arrow-right-circle-outline
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                No Data Available
            </v-btn>
        </template>
    </v-data-table>
    <v-main class="ml-14" color="primary"></v-main>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import axios from 'axios';
// import { onMounted } from 'vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
// onMounted(printItems);
const headers = ref([
    { title: 'Reports', align: 'start', sortable: true, key: 'name' },
    { title: 'Actions', align: 'start', sortable: false, key: 'actions' },
])

const data = ref([
])

const timeout = ref(1500)
const EditSnackbar = ref(false)
const search = ref('')
const dialog = ref(false)
const dialogDelete = ref(false)
const editedIndex = ref(-1)
const sortByYear = ref('');
const years = computed(() => {
    const year = new Date().getFullYear();
    return Array.from({ length: year - 1900 }, (_, index) => 1901 + index);
});
const editedItem = ref({
    name: '',
})

function getSnackbarText() {
    console.log(editedIndex.value)
    return editedIndex.value > -1 ? 'Item saved successfully!' : 'Item edited successfully!';
}

const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'New Item' : 'Edit Item'
})

function editItem(item) {
    editedIndex.value = this.data.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
}

// async function save() {
//     await axios.post("http://localhost/pacd-system-api/public/api/updatefaq", editedItem.value)
//     this.close()
//     this.EditSnackbar = true
// }

// async function printItems() {
//     let response = await axios.get("http://localhost/pacd-system-api/public/api/getfaq");
//     console.log(response)
//     data.value = response.data;
// }

// async function save() {
//     if (editedIndex.value === -1) {
//         await axios.post("http://localhost/pacd-system-api/public/api/createfaq", editedItem.value);
//         printItems();
//         this.close()
//     } else if (editedIndex.value >= 0) {
//         await axios.post("http://localhost/pacd-system-api/public/api/updatefaq", editedItem.value);
//         dialog.value = false
//         printItems();
//     }
// }

function close() {
    this.dialog = false
    this.editedItem = Object.assign({}, this.defaultItem)
    this.editedIndex = -1
}


function deleteItem(item) {
    this.editedIndex = this.data.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
}

function deleteItemConfirm() {
    this.item.splice(this.editedIndex, 1)
    this.closeDelete()
}

function closeDelete() {
    this.dialogDelete = false
    this.editedItem = Object.assign({}, this.defaultItem)
    this.editedIndex = -1
}

function routeTo(item) {
    router.push(item.value.path);
}

</script>

<style>
.v-main {
    background-color: #F7F7FB;
}

.v-table {
    max-width: 95%;
}

.v-data-table__td.v-data-table-column--align-start.v-data-table__th.v-data-table__th {
    background-color: #F7F7FB;
}

.v-toolbar__content {
    background-color: white;
}

.border-button {
    border-width: 1px;
}

/* style for snackbar */

.v-icon--size-x-large {
    font-size: calc(var(--v-icon-size-multiplier) * 5em);
    margin: auto;
}

.color-white {
    grid-area: content;
    justify-content: center;
    white-space: nowrap;
    color: white;
}

.v-snackbar__wrapper.v-theme--light.bg-info.v-snackbar--variant-elevated {
    display: flex;
    flex-direction: row;
}

/* end */
</style>