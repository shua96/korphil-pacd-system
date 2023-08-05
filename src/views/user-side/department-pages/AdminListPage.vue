
<template>
    <v-layout>
        <v-app-bar :elevation="0" color="transparent" class=" mt-7 pa-6">
            <v-avatar size="110" class="ml-16">
                <v-img src="@/assets/rtc1.png"> </v-img>
            </v-avatar>

            <v-breadcrumbs :items="items" style="margin-left:auto; color: white; font-size: 1.5em; font-weight: bolder;">
                <template v-slot:divider>
                </template>

            </v-breadcrumbs>

            <v-btn size="large" style="background-color: white; color: #2C96F8; font-size: 1.5em; font-weight: bolder;"
                to="/walkinfeedback">
                Feedback
            </v-btn>
        </v-app-bar>
    </v-layout>


    <v-parallax src="@/assets/PARALLAX.svg" height="100vh">
        <v-row>
            <v-col cols="8" style="margin-left: 300px; margin-top: 200px">
                <div>
                    <div class="text-h4 mb-3 font-weight-medium" style="color: white; text-align: center;">
                        Admin FAQs
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
        const response = await axios.get("/api/getadminfaqs");
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