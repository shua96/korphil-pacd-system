<template>
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
    <v-data-table :search="search" :headers="headers" :items="data" class="v-table elevation-1 pt-5 mx-10 mb-5"
        style="border-radius: 15px;">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Client Information</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px" persistent>
                    <template v-slot:activator="{ props }">
                        <v-btn class="mb-2 elevation-1" style="background-color: #3C59A6; color: white;" v-bind="props">
                            New Item
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
                                        <v-select :items="['Male', 'Female']" v-model="editedItem.gender"
                                            label="Gender"></v-select>
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
                                @click="deleteItemConfirm(editedItem)">Delete {{ editedItem.id }}</v-btn>
                            <v-spacer></v-spacer>

                        </v-card-actions>
                    </v-sheet>
                </v-dialog>
            </v-toolbar>
        </template>


        <template v-slot:item.fullname="{ item }">
            {{ item.raw.firstname }}
            {{ item.raw.lastname }}
        </template>

        <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-square-edit-outline
            </v-icon>
            <v-icon size="small" @click="deleteItem(item.raw)" color="error">
                mdi-trash-can-outline
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
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(printItems);

const headers = [
    { title: 'No.', align: 'start', sortable: false, key: 'id' },
    { title: 'Name', align: 'start', sortable: true, key: 'fullname' },
    { title: 'Age', align: 'start', sortable: false, key: 'age' },
    { title: 'Gender', align: 'start', sortable: false, key: 'gender' },
    { title: 'Contact No.', align: 'start', sortable: false, key: 'contact' },
    { title: 'Email Adr', align: 'start', sortable: false, key: 'email' },
    { title: 'Address', align: 'start', sortable: false, key: 'address' },
    { title: 'Actions', align: 'start', sortable: false, key: 'actions' },
]

const data = ref([]);

const search = ref('')

const dialog = ref(false)

const dialogDelete = ref(false)

const editedIndex = ref(-1)

const editedItem = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    age: 0,
    gender: '',
    contact: 0,
    email: '',
    address: '',
})


async function printItems() {
    let response = await axios.get("http://localhost/pacd-system-api/public/api/getclients");
    data.value = response.data;
}

function getFormTitle() {
    console.log(editedIndex.value)
    return editedIndex.value === -1 ? 'Edit Item' : 'New Item';
}

async function editItem(item) {
    editedIndex.value = this.data.indexOf(item)
    editedItem.value = Object.assign({}, item)
    await axios.post("http://localhost/pacd-system-api/public/api/updateclient", editedItem.value);
    dialog.value = true
}

async function save() {
    await axios.post("http://localhost/pacd-system-api/public/api/createclient", editedItem.value);
    printItems();
    this.close()
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
    // this.data.splice(this.editedIndex, 1)
    // this.closeDelete()
    let response = await axios.post('http://localhost/pacd-system-api/public/api/deleteClient', item);
    console.log(response.data);
    dialogDelete.value = false;

    printItems();
    // axios.delete(`http://localhost/pacd-system-api/public/api/items/${id}`)
    //     .then(response => {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         // handle error
    //         console.log(error);
    //     });
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
</style>