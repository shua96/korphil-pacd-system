<template>
    <v-layout class="container">
        <v-app-bar :elevation="0" color="transparent" class=" mt-7 pa-6">
            <v-avatar size="110" class="ml-16">
                <v-img src="@/assets/rtc1.png"> </v-img>
            </v-avatar>

            <v-breadcrumbs :items="items" style="margin-left:auto; color: white">
                <template v-slot:divider>
                </template>

            </v-breadcrumbs>
            <!-- <v-btn class="mr-2 ml-n3" variant="text" icon="mdi-account-outline" color="white" to="/login"></v-btn> -->
            <v-menu :close-on-content-click="false" v-model="menu" transition="scale-transition">
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


        <v-row>
            <v-col cols="6" style="margin-left: 300px; margin-top: 300px">


                <div>
                    <div class="text-h2 mb-10 font-weight-medium" style="color: white">
                        Public Assistance and Complaints Desk
                    </div>
                    <div class="text-h4 mb-3" style="color: white">
                        I am Ara, your virtual PACD officer
                    </div>
                    <div class="text-h4 mt-3" style="color: white">How can I help you?</div>
                    <v-card-actions class="link">
                        <v-btn class="text-capitalize px-5 mt-5 ml-n2" variant="outlined" size="x-large" color="white"
                            to="/departments-list">
                            Get Started
                        </v-btn>

                    </v-card-actions>
                </div>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-img class="ml-auto" src="@/assets/ARA-01.svg"
                    style="min-width:600px; margin-top:150px; margin-right: 150px;"></v-img>

            </v-col>
        </v-row>
    </v-layout>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

let app = useAppStore()

const menu = ref(false)


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






<style>
.container {
    min-height: 100vh;
    background-color: blanchedalmond;
    border-bottom-left-radius: 400px !important;
    overflow: hidden;
    background-image: linear-gradient(30deg, #0058A9, #309CFF);
}
</style>