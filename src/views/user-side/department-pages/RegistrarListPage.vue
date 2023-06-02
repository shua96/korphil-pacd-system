
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
                        <div class="text-center">
                            <v-btn to="/dashboard" variant="plain">
                                <v-icon icon="mdi-view-dashboard" size="x-large" />
                            </v-btn>
                        </div>
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
    </v-layout>


    <v-parallax src="@/assets/PARALLAX.svg" height="100vh">
        <v-row>
            <v-col cols="8" style="margin-left: 300px; margin-top: 200px">
                <div>
                    <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                        Registrar FAQs
                    </div>
                </div>

                <v-text-field class="search-bar mt-10" hide-details prepend-inner-icon="mdi-magnify"
                    label="Search for question, keyword, etc." single-line variant="outlined"
                    style="background-color: white;" v-model="search"></v-text-field>

                <div class="text-h5 mt-10 font-weight-medium" style="color: white; text-align: center;">
                    Select Questions:
                </div>
            </v-col>
        </v-row>


        <v-expansion-panels variant="popout" class="my-4 px-16">
            <v-expansion-panel v-for="(faq, index) in filteredFaqs" :key="index">
                <template #title>
                    {{ faq.question }}
                </template>
                <template #text>
                    {{ faq.answer }}
                </template>
            </v-expansion-panel>
        </v-expansion-panels>

        <div class="text-center">
            <v-btn icon="mdi-arrow-left" color="white" to="/departments-list"></v-btn>
        </div>


    </v-parallax>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useAppStore } from '@/stores/app';
let app = useAppStore()
let menu = ref(false)

const faqs = ref([]);
const search = ref('');
onMounted(printItems);

async function printItems() {
    try {
        const response = await axios.get("/api/getregistrarfaqs");
        faqs.value = response.data;
    } catch (error) {
        console.error(error);
    }
}

const filteredFaqs = computed(() => {
    if (!search.value) {
        return faqs.value; // Return all FAQs if search text is empty
    }

    const searchTerm = search.value.toLowerCase();
    return faqs.value.filter(faq => faq.question.toLowerCase().includes(searchTerm));
});



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
.mdi-frequently-asked-questions {
    font-size: xxx-large;
}

.mdi-arrow-left {
    font-size: xx-large;

}
</style>