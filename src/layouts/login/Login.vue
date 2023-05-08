<template>
    <v-layout
        style="z-index: 1000; background-image: url(src/assets/DSC_0070.JPG); height: fit-content;height: -webkit-fill-available;height: 100vh;  background-size: cover;">
        <v-card>
            <v-row justify="center" align="center">
                <v-col cols="5" md="11">
                    <v-form @submit.prevent="app.login()">
                        Welcome {{ app.user?.name }}
                        <v-text-field placeholder="Email" v-model="app.credentials.email"></v-text-field>
                        <v-text-field placeholder="Password" type="password"
                            v-model="app.credentials.password"></v-text-field>
                        <v-btn type="submit">Login</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-card>
    </v-layout>
</template>

<script setup>
import { useAppStore } from '@/stores/app';
let app = useAppStore();
</script>



<style>
.v-card {
    height: 500px;
    width: 400px;
}


.v-layout {
    --v-scrollbar-offset: 0px;
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>