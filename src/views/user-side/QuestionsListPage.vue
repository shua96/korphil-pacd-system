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
            <v-btn size="large" style="background-color: white; color: #2C96F8" to="/feedback">Feedback</v-btn>
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

            <!-- line here -->

            <v-row justify="center" style="margin-right: 100px;">

                <v-col cols="3" class="ma-10">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117"
                        @click="dialog = true">

                        <h3 class="ml-7 mt-7">What are the current programs offered? Diploma and Short Term Courses</h3>
                        <div class="text-center">
                            <v-dialog v-model="dialog" width="auto">

                                <v-card>
                                    <v-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-col>



                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="mt-11" style="text-align:center">Are there tuition fees?</h3>
                    </v-card>
                </v-col>
            </v-row>

            <!-- line here -->
            <v-row justify="center" style="margin-right: 100px;">
                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="mt-11" style="text-align:center">Claim Competency Assessment Result</h3>
                    </v-card>
                </v-col>

                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="mt-11" style="text-align:center">How long are the trainings for specific courses?</h3>
                    </v-card>
                </v-col>
            </v-row>
            <!-- line here -->
            <v-row justify="center" style="margin-right: 100px;">
                <v-col cols="3" class="ma-10">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="mt-11" style="text-align:center">Claim TOR/other documents available in registrar</h3>
                    </v-card>
                </v-col>

                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="mt-11" style="text-align:center">Schedule of Competency Assessment </h3>
                    </v-card>
                </v-col>
            </v-row>
            <!-- line here -->
            <v-row justify="center" style="margin-right: 100px;">
                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="ml-7 mt-7">Filing Up and Submission Comptency Assessment Application Form</h3>
                    </v-card>
                </v-col>

                <v-col cols="3" class="ma-10 ">
                    <v-card style="background-color: #EAEAEA; border-radius: 25px; " width="500" height="117">
                        <h3 class="mt-11" style="text-align:center">Schedule of Competency Assessment </h3>
                    </v-card>
                </v-col>
            </v-row>


            <v-btn icon="mdi-arrow-left" color="white" style="margin-left: 907px; margin-bottom: 40px"
                to="/departments-list"></v-btn>

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

const dialog = ref(false)

const dialogs = document.querySelectorAll('.dialog');
const overlay = document.querySelector('.dialog-overlay');

dialogs.forEach(dialog => {
    const openButton = dialog.querySelector('.open-button');
    const closeButton = dialog.querySelector('.close-button');

    openButton.addEventListener('click', () => {
        dialog.classList.add('open');
        overlay.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        dialog.classList.remove('open');
        overlay.style.display = 'none';
    });
});

</script>

<style>
.mdi-frequently-asked-questions {
    font-size: xxx-large;
}

.mdi-arrow-left {
    font-size: xx-large;

}
</style>