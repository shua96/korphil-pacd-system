<template  style="background-color: #F7F7FB;">
    <v-container class="px-16">
        <h1 class="px-9">CLIENT INFORMATION</h1>
        <v-container style="border-radius: 15px; background-color: white;" class="px-10">
            <v-row no-gutters>
                <v-col>
                    <v-toolbar-title class="text-black; text-bold" style="font-weight: bold;">
                        What are you looking for?
                    </v-toolbar-title>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12" md="20">
                    <v-text-field solo prepend-inner-icon="mdi-magnify" style="flex: 1;"
                        placeholder="Search for category, name, keyword, etc."></v-text-field>
                    <DatePicker />
                </v-col>
                <!-- <v-col cols="12" md="3">
                    <v-btn class="" color="primary" @click="searchItems">Search</v-btn>
                </v-col> -->
            </v-row>
        </v-container>
        <TableData />
    </v-container>
</template>

<style>
.v-field__input {
    border-radius: 1000px;
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

.px-16 {
    padding-right: 64px !important;
    padding-left: px !important;
    padding-bottom: 825px !important;
}

.v-table {
    --v-table-header-height: 56px;
    border-radius: inherit;
    line-height: 1.5;
    max-width: 100%;
    margin-top: 66px;
}

button,
html [type=button],
[type=reset],
[type=submit] {
    -webkit-appearance: button;
    margin-left: 200px;
    margin-top: 10px;
    font-size: 30px;
}
</style> 

<script setup>
import TableData from '@/components/Table/TableData.vue';
import DatePicker from '@/components/Table/DatePicker.vue';
</script>

<script>
export default {
    methods: {
        searchItems() {
            // Perform search functionality here
        },
    },
};
</script>