<template>
    <v-layout>

        <v-app-bar :elevation="0" color="transparent" class=" mt-7 pa-6">
            <v-avatar size="110" class="ml-16">
                <v-img src="@/assets/rtc1.png"> </v-img>
            </v-avatar>
            <v-breadcrumbs :items="items" style="margin-left:auto; color: white">
                <template v-slot:divider>
                </template>
            </v-breadcrumbs>
            <v-btn size="large" style="background-color: white; color: #2C96F8">Feedback</v-btn>
        </v-app-bar>
        <v-parallax src="@/assets/PARALLAX.svg" height="750">
            <v-row>
                <v-col cols="8" style="margin-left: 300px; margin-top: 200px">


                    <div>
                        <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                            How can we help you?
                        </div>
                        <div class="text-h5 mb-3" style="color: white; text-align: center;">
                            Explore our FAQ knowledge base page to find answers to your inquiries.
                        </div>
                    </div>

                    <v-text-field class="search-bar mt-10" hide-details prepend-inner-icon="mdi-magnify"
                        label="Search for category, name, keyword, etc." single-line variant="outlined"
                        style="background-color: white;"></v-text-field>

                    <div class="text-h5 mt-10 font-weight-medium" style="color: white; text-align: center;">
                        Select Department:
                    </div>

                </v-col>
            </v-row>
        </v-parallax>



    </v-layout>




    <v-layout class="pa-5">
        <v-row justify="center">

            <v-col cols="3" class="ml-16">

                <v-card style="background-color: #E3E3E3; border-radius: 25px;" width="350" height="390">
                    <v-img class="align-end text-white" height="200" src="@/assets/training.jpeg"
                        style="margin: 15px;"></v-img>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="ml-16">

                <v-card style="background-color: #E3E3E3; border-radius: 25px;" width="350" height="390">
                    <v-img class="align-end text-white" height="200" src="@/assets/registrar.jpeg"
                        style="margin: 15px;"></v-img>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="ml-16">

                <v-card style="background-color: #E3E3E3; border-radius: 25px;" width="350" height="400">
                    <v-img class="align-end text-white" height="200" src="@/assets/certification.jpeg"
                        style="margin: 15px;"></v-img>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="ml-16">

                <v-card style="background-color: #E3E3E3; border-radius: 25px;" width="350" height="400">
                    <v-img class="align-end text-white" height="200" src="@/assets/procurement.jpeg"
                        style="margin: 15px;"></v-img>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="ml-16">

                <v-card style="background-color: #E3E3E3; border-radius: 25px;" width="350" height="400">
                    <v-img class="align-end text-white" height="200" src="@/assets/accounting.jpeg"
                        style="margin: 15px;"></v-img>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="ml-16">

                <v-card style="background-color: #E3E3E3; border-radius: 25px;" width="350" height="400">
                    <v-img class="align-end text-white" height="200" src="@/assets/admin.jpeg"
                        style="margin: 15px;"></v-img>
                </v-card>
            </v-col>


        </v-row>
    </v-layout>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        title: 'Home',
        disabled: false,
    },
    {
        title: 'About',
        disabled: false,
    },
    {
        title: 'FAQ',
        disabled: false,
    },
])

</script>

<style>
.v-row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 30px;
}
</style>