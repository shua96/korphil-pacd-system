<template>
    <v-layout>
        <v-navigation-drawer floating permanent color="primary">
            <v-list density="compact" nav>
                <v-avatar size="110" class="ml-16">
                    <v-img src="@/assets/rtc1.png"> </v-img>
                </v-avatar>
                <div class="center">
                    <v-list-item value="home">
                        <v-icon>mdi-home</v-icon>
                        <h1>HOME</h1>
                    </v-list-item>
                    <v-list-item value="feedback">
                        <v-icon>mdi-forum</v-icon>
                        <h1>FEEDBACK</h1>
                    </v-list-item>
                    <v-list-item value="about">
                        <v-icon>mdi-information-variant</v-icon>
                        <h1>ABOUT</h1>
                    </v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
    </v-layout>
</template>

<style>
.center {
    margin-top: 50%;

    & .v-list-item {
        color: white;
        font-size: 2em;
        padding-top: 25px;

        & h1 {
            font-size: 1rem;
            padding-bottom: 25px;
        }
    }
}

.v-list-item__content {
    display: flex;
    align-self: center;
    grid-area: content;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
}
</style>