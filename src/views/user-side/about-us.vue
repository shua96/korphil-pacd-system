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
        <v-card class="elevation-3"
            style=" background-color: #E6E6E6;  padding : 60px; margin-left: 60px; margin-right: 205px; margin-top: 10px;  width: 50%">
            <h2 class="mb-7" style="text-align:center; color: #003B74;"> ABOUT US </h2>

            <v-container style="color: #003B74">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.<v-spacer></v-spacer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <v-spacer></v-spacer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-container>

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
.v-card {
    min-height: 95vh;
    border-bottom-right-radius: 320px !important;


}
</style>