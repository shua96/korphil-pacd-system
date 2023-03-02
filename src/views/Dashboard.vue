<template>
    <v-layout>
        <v-container>
            <v-row justify ="center">
                    <v-col align="center">
                    <v-col cols="8">
                        
                        <v-card class="mb-10 pa-3">
                            <BarGraph/>
                        </v-card>
                    </v-col>
                    

                    <v-row justify="center">
                        <v-col cols="4" class="pt-12">
                            <v-card class="pa-3 elevation-3">
                                <GenderPieGraph />
                            </v-card>
                        </v-col>
                        <v-col cols="4" class="pt-12">
                            <v-card class="pa-3">
                                <AgePieGraph />
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row justify="center">

                        <v-col cols="4" class="pt-12">
                            <v-card class="pa-3">
                                <ReasonForVisitPieGraph />
                            </v-card>
                        </v-col>

                        <v-col cols="4" class="pt-12">
                            <v-card class="pa-3">
                                <ActionProvidedPieGraph />
                            </v-card>
                        </v-col>
                        
                    </v-row>
                </v-col>
                
            </v-row>
        </v-container>
    </v-layout>
</template>
  
<script setup>
import BarGraph from '@/components/dashboard/BarGraph.vue';
import GenderPieGraph from '@/components/dashboard/GenderPieGraph.vue';
import AgePieGraph from '@/components/dashboard/AgePieGraph.vue';
import ReasonForVisitPieGraph from '@/components/dashboard/ReasonForVisitPieGraph.vue';
import ActionProvidedPieGraph from '@/components/dashboard/ActionProvidedPieGraph.vue';

</script>
  