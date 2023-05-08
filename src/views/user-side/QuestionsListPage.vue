<template>
    <v-layout>
        <v-app-bar :elevation="0" color="transparent" class="mt-7 pa-6">
            <v-avatar size="110" class="ml-16">
                <v-img src="@/assets/rtc1.png"> </v-img>
            </v-avatar>

            <v-breadcrumbs :items="items" style="margin-left:auto; color: white">
                <template v-slot:divider>
                </template>
            </v-breadcrumbs>
            <v-btn size="large" style="background-color: white; color: #2C96F8">Feedback</v-btn>
        </v-app-bar>

        <v-img src="@/assets/PARALLAX.svg">
            <v-row>
                <v-col cols="8" style="margin-left: 300px; margin-top: 200px">
                    <div>
                        <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                            Training FAQs
                        </div>
                    </div>

                </v-col>
            </v-row>

        </v-img>
    </v-layout>
</template>

<script setup>
import { ref } from 'vue';


const items = ref([
    {
        title: 'Home',
        disabled: false,
        href: '/'

    },
    {
        title: 'About',
        disabled: false,
    },
    {
        title: 'FAQ',
        disabled: false,
        href: '/questions-list'
    },
])



</script>