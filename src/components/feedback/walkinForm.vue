<template>
    <v-row>
        <v-col>
            <v-layout>
                <v-app-bar :elevation="0" color="primary" height="120" class="px-16">
                    <template v-slot:prepend>
                        <v-avatar size="80">
                            <v-img src="@/assets/rtc1.png"> </v-img>
                        </v-avatar>
                    </template>
                    <template v-slot:append>
                        <v-breadcrumbs :items="items" style="margin-left:auto; color: white">
                            <template v-slot:divider>
                            </template>

                        </v-breadcrumbs>
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
                                    <v-card-title style="display: flex; justify-content: center;">Login as
                                        Admin</v-card-title>
                                    <v-list>

                                        <v-list>
                                            <v-list-item>
                                                <v-text-field label="Username"
                                                    v-model="app.credentials.email"></v-text-field>
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
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" size="large" style="background-color: white; color: #2C96F8">
                                    Feedback
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title><v-btn to="/dasboard" variant="plain">Walk-in
                                            Form</v-btn></v-list-item-title>
                                    <v-list-item-title><v-btn to="/dasboard" variant="plain">Assessment
                                            Form</v-btn></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </template>
                </v-app-bar>
            </v-layout>
            <v-carousel hide-delimiters cycle height="100vh" class="mb-n10" :show-arrows="false" overflow="hidden"
                style=" width:100%; top:0;">
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col style="display: flex; flex-direction: column; justify-content: center;" class="my-auto">
            <h1 class="mb-5 mt-16 mx-auto">Customer Feedback Form
            </h1>
            <v-btn class="text-capitalize elevation-0 mt-2 border-button" to="/assessmentfeedback"
                prepend-icon="mdi-arrow-left-circle">Go to Assessment Feedback Form</v-btn>
            <v-tabs v-model="tab" variant="outlined" class="elevation-0">
                <v-tab value="walkin">Walkin Form</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="page">
                    <v-window-item :value="1" v-model="page">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="420">
                            <v-form class="ml-15 mt-5">
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field label="Pangalan(Optional)" variant="outlined"
                                            v-model="walkinItem.name"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-text-field label="Edad" variant="outlined" type="number"
                                            v-model="walkinItem.age"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-select label="Kasarian" :items="['Male', 'Female']" variant="outlined"
                                            v-model="walkinItem.sex">
                                        </v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="11">
                                        <v-text-field label="Tirahan/Tanggapan" variant="outlined"
                                            v-model="walkinItem.address"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <v-text-field label="Telepono/CP #" variant="outlined" type="number" maxlength="11"
                                            v-model="walkinItem.contact"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Email Address" variant="outlined"
                                            v-model="walkinItem.email"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">
                                        <v-select label="Reason For Visit"
                                            :items="['Assessment & Certification', 'Registrar', 'Training ', 'Others (Procurement, Finance and Admin, Scholarship)']"
                                            variant="outlined" v-model="walkinItem.reason">
                                        </v-select>
                                    </v-col>
                                    <v-col cols="6">
                                        <!-- <v-text-field label="Action/Service" variant="outlined"
                                            v-model="walkinItem.actionprovided"></v-text-field> -->
                                        <v-select label="Action Provided" :items="[]" variant="outlined"
                                            v-model="walkinItem.actionprovided">
                                        </v-select>
                                    </v-col>
                                </v-row>
                                <v-row style="display: flex; justify-content: center;">
                                </v-row>
                            </v-form>
                        </v-sheet>
                    </v-window-item>
                    <v-window-item v-for="(feedback, index) in walkinItem.feedbacks" :value="feedback.page" v-model="page">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>{{ feedback.question }}</h1>
                                <FeedbackRating v-model="feedback.rating" color="primary"></FeedbackRating>
                            </div>
                        </v-sheet>
                    </v-window-item>
                    <v-window-item :value="9" v-model="page">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div>
                                <h1 class="text-center">Irerekomenda nyo po na ang TESDA sa inyong kamag-anak at kaibigan?
                                </h1>
                                <v-radio-group inline style="display: flex; justify-content: center;">
                                    <v-radio label="Yes" :value="0"></v-radio>
                                    <v-radio label="No" :value="1"></v-radio>
                                </v-radio-group>
                            </div>
                        </v-sheet>
                        <div style="margin-left: 45%">
                            <v-btn v-if="page == 9" @click="saveWalkin()" color="primary">Submit</v-btn>
                        </div>
                    </v-window-item>

                </v-window>
                <v-pagination v-model="page" :length="9" class="hide-numbers" next-icon="mdi-chevron-right"
                    prev-icon="mdi-chevron-left">
                </v-pagination>
            </v-card-text>
        </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent width="auto">
        <v-form @submit.prevent="saveWalkin()">
            <v-card height="450" width="400">
                <v-icon>mdi-information-variant-box</v-icon>
                <v-card-title class="text-h5 mb-10 mt-5 ma-5">
                    PACD Survey Consent Form
                </v-card-title>

                <v-checkbox-btn v-model="enabled" class="pe-2 mt-10 ma-5">
                    <template v-slot:label>
                        Ang mga impormasyon na aking inilahad sa form na ito ay tama at totoo. Boluntaryo kong
                        pinagkaloob ang mga hinihinging impormasyon ng
                        form na ito. Pinapayagan ko ang TESDA na isama sa kanilang database bilang bahagi ng
                        kanilang records at monitoring ang mga detalyeng ito.
                    </template>
                </v-checkbox-btn>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                        Disagree
                    </v-btn>
                    <v-btn color="green-darken-1" variant="text" type="submit" :disabled="!enabled">
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
    <v-dialog v-model="snackbar" style="display: flex; flex-direction: column; align-items: center;">
        <v-card>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="snackbar = false">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>
<script setup>
import FeedbackRating from '@/layouts/comps/FeedbackRating.vue';
import { useAppStore } from '@/stores/app';
import axios from 'axios';
import { ref } from 'vue';
import count from '@/helpers/count';

let enabled = ref(false)
let dialog = ref(false)
let snackbar = ref(false)
const recommend = ref({
    rating: '',
})

const reasonForVisit = ref([
    { text: 'Assessment & Certification' },
    { text: 'Registrar' },
    { text: 'Training ' },
    { text: 'Others (Procurement, Finance and Admin, Scholarship) ' },
])
const walkinItem = ref({
    name: 'Juan Dela Cruz',
    age: 29,
    sex: 'Female',
    contact: '09123457890',
    email: 'qwer@qwer.com',
    address: 'Davao City',
    actionprovided: 'Training',
    reason: 'Training',
    feedbacks: JSON.parse(JSON.stringify(count.feedbacks)),
})
async function saveWalkin() {
    let feedbacks = walkinItem.value.feedbacks;
    for (let i = 0; i < feedbacks.length; i++) {
        delete feedbacks[i].question;
        delete feedbacks[i].type;
    }
    walkinItem.value.feedbacks = feedbacks;
    await axios.post("/api/createclient", walkinItem.value);
    this.dialog = false;
    this.snackbar = true;
}


let page = ref(1);
let app = useAppStore()

const tab = ref(1)

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
.hide-numbers .v-pagination__item:not(.v-pagination__item--prev):not(.v-pagination__item--next) {
    display: none;
}
</style>