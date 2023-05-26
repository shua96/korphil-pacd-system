
<template>
    <v-layout>
        <v-app-bar :elevation="0" color="teal-darken-4" class=" pa-6 py-10" scroll-behavior="collapse"
            image="src/assets/PARALLAX.svg">
            <v-avatar size="110" class="ml-16">
                <v-img src="@/assets/rtc1.png"> </v-img>
            </v-avatar>

            <v-breadcrumbs :items="items" style="margin-left:auto; color: white">
                <template v-slot:divider>
                </template>
            </v-breadcrumbs>
            <v-btn size="large" style="background-color: white; color: #2C96F8" to="/walkinFeedback">Feedback</v-btn>

        </v-app-bar>



        <v-parallax src="@/assets/PARALLAX.svg" max-width="100%">
            <v-row>
                <v-col cols="8" style="margin-left: 300px; margin-top: 200px">
                    <div>
                        <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                            Training FAQs
                        </div>
                    </div>
                    <!-- <v-text-field class="search-bar mt-10" hide-details prepend-inner-icon="mdi-magnify"
                        label="Search for category, name, keyword, etc." single-line variant="outlined"
                        style="background-color: white;"></v-text-field> -->

                    <div class="text-h5 mt-10 font-weight-medium" style="color: white; text-align: center;">
                        Select Questions:
                    </div>
                </v-col>
            </v-row>

            <!-- line here -->

            <v-row justify="center" style="margin-right: 50px;">
                <v-col cols="4" class="mt-4 mb-2">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title="What are the current programs offered?"
                            text="3 YEAR DIPLOMA PROGRAMS: 1. Diploma in Industrial Automation and Mechatronics Technology (DIAMT)
                        2. Diploma in Civil Engineering Technology (DCET)
                        3. Diploma in Automotive Technology (DAT)
                        4. Diploma in Agricultural and Biosystems Engineering Technology (DABET)
                        5.Diploma in Hotel and Restaurant Technology (DHRT)
                        6. Diploma in Information Technology (DIT)
                        7.Diploma in Heating, Ventilating, Air-Conditioning / Refrigeration Technology (DHVACT)
                        8. Diploma in Mechanical Engineering Technology (DMET )
                        9. DMET Major in Welding Technology (Short term Programs available https://www.korphildavao.site/courses/)">

                        </v-expansion-panel>
                    </v-expansion-panels>

                </v-col>

                <v-col cols="4" class="mt-4 mb-2 ">

                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i"
                            title="Filling Up and Submission Comptency Assessment Application Form"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>

            <!-- line here -->
            <v-row justify="center" style="margin-right: 50px;">
                <v-col cols="4" class="mt-4 mb-2 ">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title="Claim Competency Assessment Result"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>


                <v-col cols="4" class="mt-4 mb-2 ">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title="How long are the trainings for specific courses?"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>

            <!-- line here -->
            <v-row justify="center" style="margin-right: 50px;">
                <v-col cols="4" class="mt-4 mb-2">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title="Claim TOR/other documents available in registrar"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>

                <v-col cols="4" class="mt-4 mb-2 ">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title=" Schedule of Competency Assessment"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
            <!-- line here -->
            <v-row justify="center" style="margin-right: 50px;">
                <v-col cols="4" class="mt-4 mb-2 ">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title="Are there tuition fees?"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>

                <v-col cols="4" class="mt-4 mb-2 ">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 1" :key="i" title="Schedule of Competency Assessment"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>

            <v-btn icon="mdi-arrow-left" color="white" style="margin-left: 900px; margin-top: 40px"
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
        href: '/about-us'
    },
    {
        title: 'FAQ',
        disabled: false,
        href: '/departments-list'
    },
])

</script>
<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
}
</script>

<style>
.mdi-frequently-asked-questions {
    font-size: xxx-large;
}

.mdi-arrow-left {
    font-size: xx-large;

}
</style>