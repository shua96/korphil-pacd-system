<template>
    <v-container>
        <v-row no-gutters="">


            <v-col cols="1">
                <v-select v-model="itemsPerPage" :items="itemsPerPageOptions" dense outlined
                    @change="changeItemsPerPage"></v-select>
            </v-col>

            <v-col cols="2">
                <div class="viewing-info ma-5">{{ startIndex }} - {{ endIndex }} of {{ totalItems }}</div>
            </v-col>

            <v-col>
                <v-pagination v-model="currentPage" :length="6" :total-visible="5"
                    :items-per-page="itemsPerPage"></v-pagination>
            </v-col>

        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            itemsPerPage: 10,
            itemsPerPageOptions: [10, 20, 50, 100],
            currentPage: 1,
            totalItems: 100,
            totalItems: 0,
            data: [],
        };
    },
    mounted() {
        // Set the initial total items based on the length of the data array
        this.totalItems = this.data.length;
    },
    methods: {
        changeItemsPerPage() {
            // Reset the current page when the items per page is changed
            this.currentPage = 1;
        },
    },
    computed: {
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        endIndex() {
            return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
        },
    },
};
</script>
  