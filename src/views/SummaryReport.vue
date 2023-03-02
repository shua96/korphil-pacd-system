<template>
    <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table v-model="selected" :headers="headers" :items="desserts" :search="search" item-value="name" show-select
        class="elevation-1"></v-data-table>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            selected: [],
            headers: [
                {
                    title: 'Assessment and Certification',
                    align: 'start',
                    sortable: false,
                    key: 'name',
                },
            ],
            desserts: [
                {
                    name: "Sample"
                },
                {
                    name: "Lorem"
                },
                {
                    name: "Ipsum"
                },
                {
                    name: "John"
                },
                {
                    name: "Doe"
                }
            ]
        }
    },
}
</script>