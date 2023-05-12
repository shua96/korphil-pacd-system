<template>
    <v-row>
        <v-layout>
            <v-navigation-drawer color="primary" permanent width="600" image="src/assets/PARALLAX.svg">
                <v-row class="mt-11">
                    <v-col cols="4">
                        <v-avatar size="85" class="ml-16">
                            <v-img src="@/assets/rtc1.png"> </v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="6">
                        <v-breadcrumbs :items="items" style="margin-left:auto; color: white">
                            <template v-slot:divider>
                            </template>
                            <v-btn size="large" style="background-color: white; color: #2C96F8" to="/feedback"
                                class="ml-1">Feedback</v-btn>
                        </v-breadcrumbs>

                    </v-col>
                </v-row>



            </v-navigation-drawer>

        </v-layout>
        <v-card style=" padding : 60px; margin-left: 60px; margin-right: 205px; margin-top: 10px;  width: 50%">
            <h2 class="mb-7" style="text-align:center; color: #003B74;">CUSTOMER FEEDBACK FORM</h2>
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Name" variant="outlined"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-select clearable label="Gender" :items="['Male', 'Female']">
                                <v-text-field label="Gender" variant="outlined"></v-text-field>
                            </v-select>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Age" variant="outlined"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Contact no." variant="outlined"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12">
                            <v-text-field label="Email Address" variant="outlined"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12">
                            <v-text-field label="Address" variant="outlined"></v-text-field>
                        </v-col>

                    </v-row>
                    <v-card-item class="text-subtitle-1 mb-1 font-italic">
                        Irerekomenda nyo po ba ang TESDA sa inyong kamag-anak at kaibigan?
                    </v-card-item>

                    <v-row>
                        <v-col cols="6">
                            <v-card-actions>
                                <v-checkbox label="YES"></v-checkbox>
                                <v-checkbox label="NO"></v-checkbox>
                            </v-card-actions>
                        </v-col>
                    </v-row>

                    <v-card-item class="h7">
                        Mahalaga sa amin ang inyong suhestyon. Paki fill-out lamang po sa patlang.
                    </v-card-item>
                    <v-textarea clearable class="mt-5" variant="outlined"></v-textarea>
                    <v-checkbox
                        label="Ang mga impormasyon na aking inilahad sa from na ito ay tama at totoo. 
                        Boluntaryo kong pinagkaloob ang mga hinihinging impormasyon ng form na ito. 
                        Pinapayagan ko ang TESDA na isama sa kanilang database bilang bahagi ng kanilang records ant monitoring ang mga detalyeng ito. ">
                    </v-checkbox>

                    <v-row class="mt-3" align="center" justify="center">
                        <v-col cols="auto">
                            <v-btn style="background-color: #0963B9; color: white;"> SEND FORM </v-btn>
                        </v-col>
                    </v-row>

                </v-container>
            </v-form>
        </v-card>
    </v-row>
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