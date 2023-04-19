<!-- <template >
    <h1 class="pl-10 mb-10">Assessment Data</h1>
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
                                        <v-text-field v-model="editedItem.qualification"
                                            label="Qualification"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.course" label="Course/Year"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.school" label="School/Institution"></v-text-field>
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
                    </v-sheet>
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
                    <v-sheet class="pa-2">
                        <v-icon size="x-large" color="#E12727" style="display: flex; margin: auto;">mdi-alert-circle-outline</v-icon>
                        <v-card-title class="text-h5" style="display: flex; justify-content: center;">Are you
                            sure?</v-card-title>
                        <p class="text-h7" style="display: flex; justify-content: center;">Do you really want
                            to delete this item?</p>
                        <v-card-actions class="mt-6">
                            <v-spacer></v-spacer>
                            <v-btn class="text-capitalize px-5 border-button" style="border-color: #B4B2B2;" variant="flat"
                                @click="closeDelete">Cancel</v-btn>
                            <v-btn class="text-capitalize px-5 border-button" style="border-color: #E12727;" variant="flat"
                                @click="deleteItemConfirm">Delete</v-btn>
                            <v-spacer></v-spacer>

                        </v-card-actions>
                    </v-sheet>
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
            { title: 'Qualification', key: 'qualification' },
            { title: 'Address', key: 'address' },
            { title: 'Course/Year', key: 'course' },
            { title: 'School/Institution', key: 'school' },
            { title: 'Actions', key: 'actions' },
        ],
        data: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            age: 0,
            gender: '',
            qualification: '',
            address: '',
            course: '',
            school: '',
        },
        defaultItem: {
            name: '',
            age: '',
            gender: '',
            qualification: '',
            address: '',
            course: '',
            school: '',
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
</style> -->


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
                <v-dialog v-model="dialog" max-width="500px">
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
                                        <v-text-field v-model="editedItem.qualification"
                                            label="Qualification"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.course" label="Course/Year"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.school" label="School/Institution"></v-text-field>
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
import { ref, computed } from 'vue'

const search = ref('')

const editedIndex = ref(-1)
const editedItem = ref({
    name: '',
    age: '',
    gender: '',
    qualification: '',
    address: '',
    course: '',
    school: '',
})

const defaultItem = ref({
    name: '',
    age: '',
    gender: '',
    qualification: '',
    address: '',
    course: '',
    school: '',
})
const dialog = ref(false)
const dialogDelete = ref(false)

function editItem(item) {
    editedIndex.value = this.data.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
}
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Edit Item' : 'New Item'
})


function close() {
    this.dialog = false
    this.editedItem = Object.assign({}, this.defaultItem)
    this.editedIndex = -1
}

function save() {
    if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem)
    } else {
        this.data.push(this.editedItem)
    }
    this.close()
}

function deleteItem(item) {
    this.editedIndex = this.data.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
}

function deleteItemConfirm() {
    this.data.splice(this.editedIndex, 1)
    this.closeDelete()
}

function closeDelete() {
    this.dialogDelete = false
    this.editedItem = Object.assign({}, this.defaultItem)
    this.editedIndex = -1
}
let headers = [
    {
        title: 'Name',
        align: 'start',
        key: 'name',
    },
    { title: 'Age', key: 'age', sortable: false },
    { title: 'Gender', key: 'gender', sortable: false },
    { title: 'Qualification', key: 'qualification', sortable: false },
    { title: 'Address', key: 'address', sortable: false },
    { title: 'Course/Year', key: 'course', sortable: false },
    { title: 'School/Institution', key: 'school', sortable: false },
    { title: 'Actions', key: 'actions' },
]
let data = [
    { name: 'John Doe' },
    { name: 'Curtis Carpenter' },
    { name: 'Presley Rodgers' },
    { name: 'Diego Estrada' },
    { name: 'Aedan Rivera' },
]
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