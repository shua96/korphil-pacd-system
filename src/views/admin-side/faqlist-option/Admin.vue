<template>
    <h1 class="pl-10 mb-10 ">
        <v-btn size="2em" to="/faqlist" icon="mdi-arrow-left" variant="plain" />
        {{ $route.name }}
    </h1>
    <FaqListTable />
</template>

<script setup>
import FaqListTable from '@/components/faq/FaqListTable.vue';

</script>