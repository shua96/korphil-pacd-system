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


        <v-parallax src="@/assets/PARALLAX.svg" max-width="100%">
            <v-row>
                <v-col cols="8" style="margin-left: 300px; margin-top: 200px">
                    <div>
                        <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                            Training FAQs
                        </div>
                    </div>
                    <v-text-field class="search-bar mt-10" hide-details prepend-inner-icon="mdi-magnify"
                        label="Search for category, name, keyword, etc." single-line variant="outlined"
                        style="background-color: white;"></v-text-field>

                    <div class="text-h5 mt-10 font-weight-medium" style="color: white; text-align: center;">
                        Select Questions:
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center" style="margin-right: 100px;">

                <v-col cols="3" class="ma-10">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <v-card class="ma-3" style="background-color: #2279C9; border-radius: 20px; " width="90"
                            height="90">
                            <v-icon class="ma-5" icon="mdi-frequently-asked-questions" color="white"></v-icon>
                        </v-card>

                    </v-card>

                </v-col>

                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <v-card class="ma-3" style="background-color: #2279C9; border-radius: 20px; " width="90"
                            height="90">
                            <v-icon class="ma-5" icon="mdi-frequently-asked-questions" color="white"></v-icon>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
            <!-- line here -->
            <v-row justify="center" style="margin-right: 100px;">
                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <v-card class="ma-3" style="background-color: #2279C9; border-radius: 20px; " width="90"
                            height="90">
                            <v-icon class="ma-5" icon="mdi-frequently-asked-questions" color="white"></v-icon>
                        </v-card>

                    </v-card>
                </v-col>

                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <v-card class="ma-3" style="background-color: #2279C9; border-radius: 20px; " width="90"
                            height="90">
                            <v-icon class="ma-5" icon="mdi-frequently-asked-questions" color="white"></v-icon>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
            <!-- line here -->
            <v-row justify="center" style="margin-right: 100px;">
                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <v-card class="ma-3" style="background-color: #2279C9; border-radius: 20px; " width="90"
                            height="90">
                            <v-icon class="ma-5" icon="mdi-frequently-asked-questions" color="white"></v-icon>
                        </v-card>
                    </v-card>
                </v-col>

                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <v-card class="ma-3" style="background-color: #2279C9; border-radius: 20px; " width="90"
                            height="90">
                            <v-icon class="ma-5" icon="mdi-frequently-asked-questions" color="white"></v-icon>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>

            <v-btn icon="mdi-arrow-left" color="white" style="margin-left: 940px;" to="/departments-list"></v-btn>
        </v-parallax>
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
        href: '/departments-list'
    },
])



</script>

<style>
.mdi-frequently-asked-questions {
    font-size: xxx-large;
}

.mdi-arrow-left {
    font-size: xx-large;

}
</style>