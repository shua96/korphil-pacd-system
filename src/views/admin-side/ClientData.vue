<!-- <template>
    <h1 class="pl-10 mb-10 ">Client Data</h1>
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
    <v-data-table :search="search" :sortByYear="sortByYear" :headers="headers" :items="data"
        class="v-table elevation-1 pt-5 mx-10 mb-5" style="border-radius: 15px;">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Client Information</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px" persistent>
                    <template v-slot:activator="{ props }">
                        <v-btn class="mb-2 mr-2 elevation-1" style="background-color: #3C59A6; color: white;"
                            v-bind="props">
                            New Item
                        </v-btn>
                        <v-btn class="mb-2 elevation-1" style="background-color: #3C59A6; color: white;"
                            @click="printItems()">
                            Refresh
                        </v-btn>
                    </template>
                    <v-sheet>
                        <v-card-title>
                            <span class="text-h5">{{ getFormTitle() }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.firstname" label="First Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.middlename" label="Middle Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.lastname" label="Last Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.age" type="number" label="Age"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select :items="['Male', 'Female']" v-model="editedItem.sex"
                                            label="Sex"></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.contact" type="number"
                                            label="Contact No."></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.email" label="Email Address"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                                    </v-col>

                                </v-row>
                                <v-row cols="12">
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="editedItem.actionprovided" label="Action Provided"
                                            class="text-caption"></v-text-field>
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
                                @click="deleteItemConfirm(editedItem)">Delete {{ date }}</v-btn>
                            <v-spacer></v-spacer>

                        </v-card-actions>
                    </v-sheet>
                </v-dialog>

                <v-dialog v-model="showMoreDialog" max-width="500px" color="error">
                    <v-sheet class="pa-2">
                        <v-icon size="x-large" color="#E12727"
                            style="display: flex; margin: auto;">mdi-alert-circle-outline</v-icon>
                        <v-card-title class="text-h5" style="display: flex; justify-content: center;">Are you
                            sure?</v-card-title>
                        <p class="text-h7" style="display: flex; justify-content: center;">Do you really want
                            to delete this item?</p>
                        <h1>{{ data }}</h1>
                        <v-card-actions class="mt-6">
                            <v-spacer></v-spacer>
                            <v-btn class="text-capitalize px-5 border-button" style="border-color: #B4B2B2;" variant="flat"
                                @click="showMoreDialog = false">Cancel</v-btn>

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


        <template v-slot:item.fullname="{ item }">
            {{ item.raw.firstname }}
            {{ item.raw.lastname }}
        </template>

        <template v-slot:item._created_at="{ item }">
            {{ moment(item.raw.created_at).format('YYYY-MM-DD') }}
        </template>

        <template v-slot:item._actionprovided="{ item }">
            <div class="text-truncate">
                {{ item.raw.actionprovided }}
            </div>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-icon size="small" @click="editItem(item.raw)">
                mdi-square-edit-outline
            </v-icon>
            <v-icon size="small" class="mx-2" @click="deleteItem(item.raw)" color="error">
                mdi-trash-can-outline
            </v-icon>
            <v-icon size="small" @click="showMore(item.raw)">
                mdi-plus
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                No Data Available
            </v-btn>
        </template>

    </v-data-table>
    <v-main></v-main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import moment from 'moment';
import { computed } from '@vue/reactivity';

onMounted(printItems);

const headers = [
    { title: 'Date', align: 'start', sortable: false, key: '_created_at' },
    { title: 'Name', align: 'start', sortable: true, key: 'fullname' },
    { title: 'Age', align: 'start', sortable: false, key: 'age' },
    { title: 'Sex', align: 'start', sortable: false, key: 'sex' },
    { title: 'Contact No.', align: 'start', sortable: false, key: 'contact' },
    { title: 'Email Adr', align: 'start', sortable: false, key: 'email' },
    { title: 'Address', align: 'start', sortable: false, key: 'address' },
    { title: 'Action Provided', align: 'start', sortable: false, key: 'actionprovided', class: 'truncate' },
    { title: 'Actions', align: 'start', sortable: false, key: 'actions' },
]

const EditSnackbar = ref(false)
const showMoreDialog = ref(false)
const data = ref([]);
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
    firstname: '',
    middlename: '',
    lastname: '',
    age: '',
    sex: '',
    contact: '',
    email: '',
    address: '',
})

// function getSnackbarText() {
//     console.log(editedIndex.value)
//     return editedIndex.value === -1 ? 'Item saved successfully!' : 'Item edited successfully!';
// }

async function printItems() {
    let response = await axios.get("http://localhost/pacd-system-api/public/api/getclients");
    data.value = response.data;
}

function getFormTitle() {
    console.log(editedIndex.value)
    return editedIndex.value === -1 ? 'New Item' : 'Edit Item';
}

function showMore() {
    showMoreDialog.value = true
}

function editItem(item) {
    editedIndex.value = this.data.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
}

// async function saveEditItem(item) {
//     await axios.post("http://localhost/pacd-system-api/public/api/updateclient", editedItem.value);
//     dialog.value = false
//     printItems();
// }

async function save() {
    if (editedIndex.value === -1) {
        await axios.post("http://localhost/pacd-system-api/public/api/createclient", editedItem.value);
        printItems();
        this.close()
        // EditSnackbar.value = true
    } else if (editedIndex.value >= 0) {
        await axios.post("http://localhost/pacd-system-api/public/api/updateclient", editedItem.value);
        dialog.value = false
        printItems();
        // EditSnackbar.value = true
    }
}

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

async function deleteItemConfirm(item) {
    await axios.post('http://localhost/pacd-system-api/public/api/deleteClient', item);
    dialogDelete.value = false;
    printItems();
}

function closeDelete() {
    this.dialogDelete = false
    this.editedItem = Object.assign({}, this.defaultItem)
    this.editedIndex = -1
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

.v-icon--size-x-large {
    font-size: calc(var(--v-icon-size-multiplier) * 5em);
    margin: auto;
}

.text-truncate {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style> -->


<template >
    <h1 class="pl-10 mb-10">Client Data</h1>
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
                <v-select label="Select Year" :items="[2000, 2001, 2002, 2003, 2004, 2004, 2005]" variant="solo">
                </v-select>
            </v-col>
            <v-col>
                <v-select label="Select Month"
                    :items="['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', ' September', 'October', 'November', 'December']"
                    variant="solo">
                </v-select>
            </v-col>
        </v-row>
    </v-sheet>

    <v-data-table :search="search" v-model="selected" show-select :headers="headers" :items="data"
        class="v-table elevation-1 pt-5 ml-10 mb-5" style="border-radius: 15px; background-color:">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Client Information</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-snackbar v-model="EditSnackbar" :timeout="timeout" color="info" vertical>
                    <v-icon size="large" class="mr-2">mdi-check-circle-outline</v-icon>
                    {{ editText }}

                    <template v-slot:actions>
                        <v-btn color="white" variant="text" @click="EditSnackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>

                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ props }">
                        <v-btn class="mb-2 elevation-1 " style="background-color: #3C59A6; color: white;" v-bind="props">
                            New Item
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
                                        <v-text-field v-model="editedItem.age" label="Age" type="number"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select v-model="editedItem.gender" label="Gender" :items="['Male', 'Female']">
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.contact" label="Contact Number"
                                            type="number"></v-text-field>
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
                            <v-btn color="blue-darken-1" variant="text" @click="close" class="border-button">
                                Cancel
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save" class="border-button">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-snackbar v-model="snackbar" :timeout="timeout" color="info" vertical>
                    <v-icon size="large" class="mr-2">mdi-check-circle-outline</v-icon>
                    {{ text }}

                    <template v-slot:actions>
                        <v-btn color="white" variant="text" @click="snackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>


                <v-dialog v-model="dialogDelete" max-width="500px" color="error">
                    <v-card class="pa-2">
                        <v-icon size="x-large" color="#E12727">mdi-alert-circle-outline</v-icon>
                        <v-card-title class="text-h5" style="display: flex; justify-content: center;">Are you
                            sure?</v-card-title>
                        <p class="text-h7" style="display: flex; justify-content: center;">Do you really want
                            to delete this item?</p>
                        <v-card-actions class="mt-6">
                            <v-spacer></v-spacer>
                            <v-btn color="#B4B2B2" class="text-capitalize px-5 color-white" rounded="xl" variant="flat"
                                @click="closeDelete">Cancel</v-btn>
                            <v-btn color="#E12727" class="text-capitalize px-5 color-white" rounded="xl" variant="flat"
                                @click="deleteItemConfirm">Delete</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog class="dialog" :style="{ width: width, height: height }" v-model="showDialog" max-width="500px"
                    height="350px" color="blue">
                    <v-card>
                        <h1 style="text-align: center;">Client Information</h1>
                        <div class="person-details">
                            <form>
                                <div class="details-grid">
                                    <div class="detail-row">
                                        <label style="margin-bottom: 0.5rem;">Name:</label>
                                        <span style="margin-left: 0.5rem;">{{ editedItem.name }}</span>
                                    </div>
                                    <div class="detail-row">
                                        <label style="margin-bottom: 0.5rem;">Age:</label>
                                        <span style="margin-left: 0.5rem;">{{ editedItem.age }}</span>
                                    </div>
                                    <div class="detail-row">
                                        <label style="margin-bottom: 0.5rem;">Gender:</label>
                                        <span style="margin-left: 0.5rem;">{{ editedItem.gender }}</span>
                                    </div>
                                    <div class="detail-row">
                                        <label style="margin-bottom: 0.5rem;">Contact:</label>
                                        <span style="margin-left: 0.5rem;">{{ editedItem.contact }}</span>
                                    </div>
                                    <div class="detail-row">
                                        <label style="margin-bottom: 0.5rem;">Email:</label>
                                        <span style="margin-left: 0.5rem;">{{ editedItem.email }}</span>
                                    </div>
                                    <div class="detail-row">
                                        <label style="margin-bottom: 0.5rem;">Address:</label>
                                        <span style="margin-left: 0.5rem;">{{ editedItem.address }}</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="showDialog = false">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item, index }">
            <v-icon size="small" @click="editItem(item.raw)">
                mdi-square-edit-outline
            </v-icon>
            <v-icon size="small" class="mx-2" color="red" @click="deleteItem(item.raw)">
                mdi-trash-can-outline
            </v-icon>
            <v-icon size="small" color="red" @click="showMore(item.raw, index)">
                mdi-dots-horizontal-circle-outline
            </v-icon>
        </template>
        <template v-slot:no-data>
            <div>No Data Available</div>
        </template>
    </v-data-table>
    <v-main class="v-main"></v-main>
</template>

<script setup>
import { ref } from 'vue';

import { defineProps } from 'vue';

const props = defineProps({
    editedItem: Object
});

const showDialog = ref(false)

function showMore(item, index) {
    selectedTableIndex.value = index
    editedItem.value = { ...item }
    showDialog.value = true
}


function editItem(item) {
    selectedTableIndex.value = index
    editedItem.value = { ...item }
    showDialog.value = true
}

const editedItem = ref({
    name: '',
    age: 0,
    gender: '',
    contact: '',
    email: '',
    address: '',
});

const selectedTableIndex = ref(0);


const data = ref([
    { name: 'John Doe', age: 25, gender: 'Male', contact: '123-456-7890', email: 'john.doe@example.com', address: '123 Main St.' },
    { name: 'Curtis Carpenter', age: 32, gender: 'Male', contact: '123-456-7890', email: 'curtis.carpenter@example.com', address: '456 Oak Ave.' },
    { name: 'Presley Rodgers', age: 28, gender: 'Female', contact: '123-456-7890', email: 'presley.rodgers@example.com', address: '789 Pine St.' },
    { name: 'Diego Estrada', age: 29, gender: 'Male', contact: '123-456-7890', email: 'diego.estrada@example.com', address: '321 Elm St.' },
    { name: 'Aedan Rivera', age: 27, gender: 'Male', contact: '123-456-7890', email: 'aedan.rivera@example.com', address: '654 Maple Ave.' },

]);


const headers = ref([
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
]
) 
</script>


<style>
.dialog {

    top: -10%;
    left: -4%;
    width: 950px;
    height: 500px;
}

.person-details {
    padding: 2rem;
    border-radius: 5px;
}

form {
    display: grid;
    grid-template-columns: 170px 1fr;
    grid-row-gap: 1rem;
    margin-top: 2rem;
}

label {
    font-weight: bold;
}

.detail-row {
    display: table-row;
    display: flex;
}
</style>


<!-- <script>
export default {
    data: () => ({
        EditSnackbar: false,
        snackbar: false,
        timeout: 1500,
        text: 'Item deleted successfully!',
        editText: 'Item edited successfully',
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
            age: 0,
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
            this.snackbar = true
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
            this.EditSnackbar = true
        },
    },
}
</script> -->
  
<style>
.border-button {
    border-width: 1px;
}

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