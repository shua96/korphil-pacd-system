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
                                            v-model="editedItem.name"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-text-field label="Edad" variant="outlined" type="number"
                                            v-model="editedItem.age"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-select label="Kasarian" :items="['Lalaki', 'Babae']" variant="outlined"
                                            v-model="editedItem.sex">
                                        </v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="11">
                                        <v-text-field label="Tirahan/Tanggapan" variant="outlined"
                                            v-model="editedItem.address"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field label="Telepono/CP #" variant="outlined" type="number" maxlength="11"
                                            v-model="editedItem.contact"></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field label="Email Address" variant="outlined"
                                            v-model="editedItem.email"></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-text-field label="Action/Service" variant="outlined"
                                            v-model="editedItem.actionprovided"></v-text-field>
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
                            <v-btn variant="outlined" color="primary" @click="save()">Submit</v-btn>
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
                                        <v-text-field label="Pangalan(Optional)" variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-text-field label="Edad" variant="outlined" type="number"></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-select clearable label="Kasarian" :items="['Lalaki', 'Babae']"
                                            variant="outlined">
                                        </v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">

                                        <v-text-field label="Kurso/Taon" variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="3">

                                        <v-text-field label="Qualification" variant="outlined"></v-text-field>
                                    </v-col>
                                    <v-col cols="6">

                                        <v-text-field label="Paaralan/Institusyon" variant="outlined"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="11">
                                        <v-text-field label="Tirahan/Tanggapan" variant="outlined"></v-text-field>
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
                        <v-pagination v-if="value === two" v-model="aformPage" :length="9" class="hide-numbers"
                            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
                        </v-pagination>
                    </v-window-item>
                </v-window>
            </v-card-text>


        </v-col>
    </v-row>
</template>
<script setup>
import { useAppStore } from '@/stores/app';
import axios from 'axios';
import { ref } from 'vue';

const editedItem = ref({
    name: '',
    age: '',
    sex: '',
    contact: '',
    email: '',
    address: '',
})

async function save() {
    await axios.post("http://localhost/pacd-system-api/public/api/createclient", editedItem.value);
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




<!-- <template>
    <v-btn color="primary">
        Open Dialog

        <v-dialog v-model="dialog" activator="parent" width="500" class="elevation-0">
            <v-card class="elevation-0">

                <div class="text-center">
                    <v-icon v-for="(icon, index) in icons" :key="icon" :color="isSelected(index) ? 'black' : ''"
                        @click="selectIcon(index)" size="50px">
                        {{ isSelected(index) ? getFilledIcon(icon) : icon }}
                    </v-icon>
                </div>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-btn>
</template>
<script setup>
import { ref } from 'vue';

let dialog = ref(false)

let rating = ref(false);

const icons = [
    'mdi-emoticon-happy-outline',
    'mdi-emoticon-neutral-outline',
    'mdi-emoticon-sad-outline',
];

function isSelected(index) {
    return rating.value !== null && rating.value === index;
}

function selectIcon(index) {
    rating.value = index;
}

function getFilledIcon(icon) {
    if (icon === 'mdi-emoticon-sad-outline') {
        return 'mdi-emoticon-sad';
    }
    if (icon === 'mdi-emoticon-happy-outline') {
        return 'mdi-emoticon-happy';
    }
    if (icon === 'mdi-emoticon-neutral-outline') {
        return 'mdi-emoticon-neutral';
    }
    return icon;
}
</script>
   -->