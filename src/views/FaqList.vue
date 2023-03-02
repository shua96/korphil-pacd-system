<template>
    <v-row no-gutters class="mb-5">
        <v-col class="mx-16">
            <h1>Frequently Asked Questions</h1>
        </v-col>

        <v-col class="mr-16" cols="2">
            <v-btn @click="openDialog(item)" class="py-6"
                style="border-radius: 15px; background-color: #3C59A6; color: white;" block small>Create
                New</v-btn>
        </v-col>
    </v-row>

    <v-dialog v-model="dialogForm" width="auto">
        <v-card>
            <v-card-text>
                <v-text-field label="Lorem Ipsum"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="dialogForm = false">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-card style="border-radius: 15px; background-color: white;" class="px-16 pt-5 mx-10 mb-5 elevation-1">
        <v-row no-gutters>
            <v-col>
                <v-toolbar-title class="text-black; text-bold " style="font-weight: bold;">What are you looking
                    for?</v-toolbar-title>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col>
                <v-text-field v-model="search" solo prepend-inner-icon="mdi-magnify" style=" flex: 1;"
                    placeholder="Search for category, name, keyword, etc."></v-text-field>
            </v-col>
        </v-row>
    </v-card>

    <v-card style="border-radius: 15px; background-color: white;" class="px-16 pt-5 mx-10 mb-5 elevation-1">
        <v-table :items="filteredQuestion">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" @change="selectAllRows" />
                    </th>
                    <th class="text-left">
                        Assessment and Certification
                        <v-icon @click="editItem(item)" size="small">mdi-square-edit-outline</v-icon>
                    </th>
                    <th class="text-left">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredQuestion" :key="item.name" @mouseover="hoveredRow = item"
                    @mouseleave="hoveredRow = null" :class="{ 'highlight': item === hoveredRow }">
                    <td>
                        <input type="checkbox" v-model="item.selected" />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>
                        <v-icon @click="editItem(item)">mdi-square-edit-outline</v-icon>
                        <v-icon @click="deleteItem(item)" color="red">mdi-trash-can-outline</v-icon>
                    </td>
                </tr>
                <div class="text-center">
                    <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
                </div>
            </tbody>
        </v-table>
    </v-card>
    <v-main class="v-main"></v-main>
</template>
<script>
export default {
    data() {
        return {
            dialogForm: false,
            search: '',
            question: [
                {
                    name: 'Lorem Sample Data',
                    selected: false,
                },
                {
                    name: 'Ipsum Sample Data',
                    selected: false,
                },
            ],
            hoveredRow: null,
        }
    },
    methods: {
        selectAllRows(event) {
            const isChecked = event.target.checked;
            this.question.forEach(item => {
                item.selected = isChecked;
            });
        },
        editItem(item) {
            // handle edit action here
            alert("Test");
        },
        deleteItem(item) {
            const confirmed = confirm(`Are you sure you want to delete ${item.name}?`);
            if (confirmed) {
                const index = this.question.indexOf(item);
                this.question.splice(index, 1);
            }
        },
        openDialog(item) {
            this.dialogForm = true;
        },

    },
    computed: {
        filteredQuestion() {
            if (!this.search) {
                return this.question;
            }
            const searchTerm = this.search.toLowerCase();
            return this.question.filter(item => {
                return item.name.toLowerCase().includes(searchTerm);
            });
        }
    }
}
</script>


<style>
.v-field__input {
    border-radius: 10px;
}

.v-main {
    --v-layout-top: 0px;
    background-color: #F7F7FB;
}

.v-field.v-field--prepended.v-field--variant-filled.v-theme--light {
    border-radius: 15px;
}

.v-container {
    width: 100%;
    padding: 16px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    height: 100vh;
    flex-direction: column;
}

.px-5 {
    padding-bottom: 800px !important;
}

.highlight {
    background-color: #f5f5f5;
}


.v-main {
    flex: 1 0 auto;
    max-width: 100%;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    padding-left: var(--v-layout-left);
    padding-right: var(--v-layout-right);
    padding-top: var(--v-layout-top);
    padding-bottom: var(--v-layout-bottom);
    background-color: #F7F7FB;
}
</style>