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
            <!-- <v-btn class="mr-2 ml-n3" variant="text" icon="mdi-account-outline" color="white" to="/login"></v-btn> -->
            <v-menu :close-on-content-click="false" transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <v-btn color="white" v-bind="props" icon="mdi-account-outline">
                    </v-btn>
                </template>

                <v-form @submit.prevent="app.login()">

                    <v-sheet min-width="300">
                        <v-card-title style="display: flex; justify-content: center;">
                            <v-icon icon="mdi-account-outline" size="x-large" />

                        </v-card-title>
                        <v-card-title style="display: flex; justify-content: center;">Login as Admin</v-card-title>
                        <v-list>

                            <v-list>
                                <v-list-item>
                                    <v-text-field label="Username" v-model="app.credentials.email"></v-text-field>
                                </v-list-item>

                                <v-list-item>
                                    <v-text-field label="Password" v-model="app.credentials.password"
                                        type="password"></v-text-field>
                                </v-list-item>
                            </v-list>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn variant="text" @click="menu = false">
                                    Cancel
                                </v-btn>
                                <v-btn color="primary" variant="text" type="submit">
                                    Login
                                </v-btn>
                            </v-card-actions>
                        </v-list>
                    </v-sheet>
                </v-form>
            </v-menu>

            <!-- <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" size="large" style="background-color: white; color: #2C96F8">
                        Feedback
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title><v-btn to="/walkinfeedback" variant="plain">Walk-in
                                Form</v-btn></v-list-item-title>
                        <v-list-item-title><v-btn to="/assessmentfeedback" variant="plain">Assessment
                                Form</v-btn></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
            <v-btn size="large" style="background-color: white; color: #2C96F8" to="/walkinfeedback">
                Feedback
            </v-btn>
        </v-app-bar>

        <v-parallax src="@/assets/PARALLAX.svg" height="750">
            <v-row style=" display: flex; flex-wrap: wrap; flex: 1 1 auto; margin: 30px;">
                <v-col cols="8" style="margin-left: 300px; margin-top: 200px">


                    <div>
                        <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                            How can we help you?
                        </div>
                        <div class="text-h5 mb-3 sm-6" style="color: white; text-align: center;">
                            Explore our FAQ knowledge base page to find answers to your inquiries.
                        </div>
                    </div>

                    <!-- <v-text-field class="search-bar mt-10" hide-details prepend-inner-icon="mdi-magnify"
                        label="Search for category, name, keyword, etc." single-line variant="outlined"
                        style="background-color: white;"></v-text-field> -->

                    <div class="text-h5 mt-10 font-weight-medium" style="color: white; text-align: center;">
                        Select Department:
                    </div>

                </v-col>
            </v-row>
        </v-parallax>



    </v-layout>




    <v-layout class="pa-10">
        <v-row justify="center mb-4" style="margin: -250px;">

            <v-col cols="3" class="ml-16" align="right">
                <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="350" height="350"
                    to="/questions-list">
                    <v-img height="200" src="@/assets/training.jpeg" style="margin: 15px;"></v-img>
                    <h2 class="mt-10" style="text-align: center;">Training</h2>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" align="center">

                <v-card style="background-color: #EAEAEA;; border-radius: 25px;" width="350" height="350"
                    to="/registrar-qs">
                    <v-img class="align-end text-white" height="200" src="@/assets/registrar.jpeg"
                        style="margin: 15px;"></v-img>
                    <h2 class="mt-10" style="text-align: center;">Registrar</h2>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="mr-16" align="left">

                <v-card style="background-color: #EAEAEA;; border-radius: 25px; " width="350" height="350"
                    to="/certification">
                    <v-img class="align-end text-white" height="200" src="@/assets/certification.jpeg"
                        style="margin: 15px;"></v-img>
                    <h2 class="mt-10" style="text-align: center;">Certification & Assessment</h2>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="ml-16" align="right">

                <v-card style="background-color: #EAEAEA;; border-radius: 25px;" width="350" height="350">
                    <v-img class="align-end text-white" height="200" src="@/assets/procurement.jpeg"
                        style="margin: 15px;"></v-img>
                    <h2 class="mt-10" style="text-align: center;">Procurement</h2>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" align="center">

                <v-card style="background-color: #EAEAEA;; border-radius: 25px;" width="350" height="350">
                    <v-img class="align-end text-white" height="200" src="@/assets/accounting.jpeg"
                        style="margin: 15px;"></v-img>
                    <h2 class="mt-10" style="text-align: center;">Accounting</h2>
                </v-card>
            </v-col>
            <!-- line here -->
            <v-col cols="3" class="mr-16" align="left">

                <v-card style="background-color: #EAEAEA;; border-radius: 25px;" width="350" height="350">
                    <v-img class="align-end text-white" height="200" src="@/assets/admin.jpeg"
                        style="margin: 15px;"></v-img>
                    <h2 class="mt-10" style="text-align: center;">Admin</h2>
                </v-card>
            </v-col>


        </v-row>
    </v-layout>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const menu = ref(false)
let app = useAppStore()


const items = ref([
    {
        title: 'Home',
        disabled: false,
        href: '/'

    },
    {
        title: 'About',
        disabled: false,
        href: '/about-us'
    },
    {
        title: 'FAQ',
        disabled: false,
        href: '/departments-list'
    },
])


</script>

 

