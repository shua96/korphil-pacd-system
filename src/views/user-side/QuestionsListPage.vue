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

            <h1>{{ }}</h1>

            <v-btn icon="mdi-arrow-left" color="white" style="margin-left: 900px; margin-top: 40px"
                to="/departments-list"></v-btn>


        </v-parallax>
    </v-layout>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

onMounted(printItems);
async function printItems() {
    let response = await axios.get("/api/gettrainingfaqs");
    data.value = response.data;
}

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