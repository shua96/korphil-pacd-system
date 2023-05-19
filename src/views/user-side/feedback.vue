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

                        <v-btn size="large" color="white" to="/feedback">Feedback</v-btn>
                    </template>
                </v-app-bar>
            </v-layout>
            <v-carousel hide-delimiters cycle height="100vh" class="mb-n10" :show-arrows="false" overflow="hidden"
                style=" width:100%; top:0;">
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col style="display: flex; flex-direction: column; justify-content: center;" class="my-auto">
            <h1 class="mb-5 mx-auto">Customer Feedback Form
            </h1>

            <v-tabs v-model="tab" variant="outlined" class="elevation-0">
                <v-tab value="one">Walkin Form</v-tab>
                <v-tab value="two">Assessment Form</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">

                    <!-- WALK-IN FORM CODES -->

                    <v-window-item value="one" v-model="page" v-if="page === 1">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
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
                                        <v-select label="Kasarian" :items="['Lalaki', 'Babae']" variant="outlined"
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
                                    <v-col cols="4">
                                        <v-text-field label="Telepono/CP #" variant="outlined" type="number" maxlength="11"
                                            v-model="walkinItem.contact"></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field label="Email Address" variant="outlined"
                                            v-model="walkinItem.email"></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field label="Action/Service" variant="outlined"
                                            v-model="walkinItem.actionprovided"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row style="display: flex; justify-content: center;">
                                </v-row>
                            </v-form>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="one" v-model="page" v-if="page === 2">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Mabilis na serbisyo</h1>
                                <v-rating v-model="rating" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>


                    <v-window-item value="one" v-model="page" v-if="page === 3">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Mahusay at may malakasakit na serbisyo</h1>
                                <v-rating v-model="rating1" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>

                    <v-window-item value="one" v-model="page" v-if="page === 4">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Magalang at tapat na serbisyo</h1>
                                <v-rating v-model="rating2" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="one" v-model="page" v-if="page === 5">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Malinis at Maayos na tanggapan </h1>
                                <v-rating v-model="rating3" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="one" v-model="page" v-if="page === 6">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Mapagkatiwalaan na serbisyo</h1>
                                <v-rating v-model="rating4" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="one" v-model="page" v-if="page === 7">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Abot ang Lahat ang serbisyo ng TESDA</h1>
                                <v-rating v-model="rating5" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="one" v-model="page" v-if="page === 8">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">

                            <div class="text-center">
                                <h1>Irerekomenda nyo po na ang TESDA sa inyong kamag-anak at kaibigan?</h1>
                                <v-rating v-model="rating6" bg-color="orange-lighten-1" color="blue" length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="one" v-model="page" v-if="page === 9">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">

                            <div class="text-center">
                                <h1>Irerekomenda nyo po na ang TESDA sa inyong kamag-anak at kaibigan?</h1>
                                <v-radio-group inline style="display: flex; justify-content: center;">
                                    <v-radio label="Yes" value="1"></v-radio>
                                    <v-radio label="No" value="2"></v-radio>
                                </v-radio-group>
                            </div>
                        </v-sheet>
                        <div class="text-center">
                            <v-btn variant="outlined" color="primary" @click="dialog = true">Submit</v-btn>
                        </div>
                        <v-pagination v-if="value === one" v-model="page" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>

                    <!-- ASSESSMENT FORM CODE  -->

                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 1">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <v-form class="ml-15 mt-5">
                                <v-row>
                                    <v-col cols="7">
                                        <v-text-field label="Pangalan(Optional)" variant="outlined"
                                            v-model="assessmentItem.name"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-text-field label="Edad" variant="outlined" type="number"
                                            v-model="assessmentItem.age"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-select clearable label="Kasarian" :items="['Lalaki', 'Babae']" variant="outlined"
                                            v-model="assessmentItem.sex">
                                        </v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5">

                                        <v-text-field label="Kurso/Taon" variant="outlined"
                                            v-model="assessmentItem.course_year"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">

                                        <v-text-field label="Qualification" variant="outlined"
                                            v-model="assessmentItem.qualification"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>

                                    <v-col cols="11">

                                        <v-text-field label="Paaralan/Institusyon" variant="outlined"
                                            v-model="assessmentItem.school"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="8">
                                        <v-text-field label="Tirahan/Tanggapan" variant="outlined"
                                            v-model="assessmentItem.address"></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field label="Action/Service" variant="outlined"
                                            v-model="assessmentItem.actionprovided"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                </v-row>
                            </v-form>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 2">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Mabilis na serbisyo</h1>
                                <v-rating v-model="aformRating" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>


                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 3">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Mahusay at may malakasakit na serbisyo</h1>
                                <v-rating v-model="aformRating1" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>

                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 4">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Magalang at tapat na serbisyo</h1>
                                <v-rating v-model="aformRating2" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 5">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Malinis at Maayos na tanggapan </h1>
                                <v-rating v-model="aformRating3" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 6">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Mapagkatiwalaan na serbisyo</h1>
                                <v-rating v-model="aformRating4" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 7">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">
                            <div class="text-center">
                                <h1>Abot ang Lahat ang serbisyo ng TESDA</h1>
                                <v-rating v-model="aformRating5" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 8">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">

                            <div class="text-center">
                                <h1>Irerekomenda nyo po na ang TESDA sa inyong kamag-anak at kaibigan?</h1>
                                <v-rating v-model="aformRating6" bg-color="orange-lighten-1" color="blue"
                                    length="3"></v-rating>
                            </div>
                        </v-sheet>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                    <v-window-item value="two" v-model="aformPage" v-if="aformPage === 9">
                        <v-sheet class="mb-10" style="display: flex; flex-direction: column; justify-content: center;"
                            border rounded height="400">

                            <div class="text-center">
                                <h1>Irerekomenda nyo po na ang TESDA sa inyong kamag-anak at kaibigan?</h1>
                                <v-radio-group inline style="display: flex; justify-content: center;">
                                    <v-radio label="Yes" value="1"></v-radio>
                                    <v-radio label="No" value="2"></v-radio>
                                </v-radio-group>
                            </div>
                        </v-sheet>
                        <div class="text-center">
                            <v-btn variant="outlined" color="primary" @click="saveAssessment()">Submit</v-btn>
                        </div>
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                </v-window>
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
                    </template></v-checkbox-btn>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green-darken-1" variant="text" type="submit" :disabled="!enabled">
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
    <v-dialog v-model="snackbar" style="display: flex; flex-direction: column; align-items: center;" :timeout="timeout">
        <v-card max-width="500">
            <v-img height="325" width="485" src="@/assets/thanks.jpeg"></v-img>
        </v-card>
        <v-card-actions>

            <v-btn to="/">Okay</v-btn>
        </v-card-actions>

    </v-dialog>
</template>
<script setup>
import router from '@/router';
import { useAppStore } from '@/stores/app';
import axios from 'axios';
import { ref } from 'vue';

let timeout = ref(1500)
let enabled = ref(false)
let dialog = ref(false)
let snackbar = ref(false)
const walkinItem = ref({
    name: '',
    age: '',
    sex: '',
    contact: '',
    email: '',
    address: '',
})
const assessmentItem = ref({
    name: '',
    age: '',
    sex: '',
    course_year: '',
    qualification: '',
    school: '',
    address: '',
    actionprovided: '',
})

async function saveWalkin() {
    await axios.post("/api/createclient", walkinItem.value);
    this.dialog = false;
    this.snackbar = true;
}

async function saveAssessment() {
    await axios.post("/api/createassessmentclient", assessmentItem.value);
    router.push('/feedback');
}

let page = ref(1)
let aformPage = ref(1)
let rating = ref(null)
let rating1 = ref(null)
let rating2 = ref(null)
let rating3 = ref(null)
let rating4 = ref(null)
let rating5 = ref(null)
let rating6 = ref(null)
let aformRating = ref(null)
let aformRating1 = ref(null)
let aformRating2 = ref(null)
let aformRating3 = ref(null)
let aformRating4 = ref(null)
let aformRating5 = ref(null)
let aformRating6 = ref(null)
let app = useAppStore()

const tab = ref(null)

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