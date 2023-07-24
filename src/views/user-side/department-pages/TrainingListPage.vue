<template>
    <user-bar />
    <div class="search">

        <label>
            <input type="text" placeholder="Search here">
        </label>
    </div>
    <div class="search">
    </div>
    <div class="cards">
        <v-row>
            <v-col cols="8" style="margin: 0 auto;">
                <v-row>
                    <v-col cols="6">
                        <v-card width="500">
                            <h1>Hello</h1>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
import UserBar from '@/layouts/user/UserBar.vue';

</script>

<style>
@media (width < 600px) {
    .search {
        margin: 50% auto;
    }

}

.cards {
    display: flex;
    margin-left: 250px;
}

.search {
    /* max-width: 50vw; */
    display: flex;
    margin-left: 250px;
    padding: 0px 50px;
}

.search label {
    width: 100%;
}

.search label input {
    width: 100%;
    height: 80px;
    border-radius: 50px;
    padding: 5px 20px;
    padding-left: 35px;
    font-size: 2rem;
    outline: none;
    border: 1px solid #999;
}
</style>