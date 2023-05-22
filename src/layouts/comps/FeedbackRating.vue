<template>
    <v-col>
        <v-btn @click="rate(-1)" :color="getColor(-1)" icon="mdi-emoticon-sad-outline" size="x-large"></v-btn>
        <v-btn @click="rate(0)" :color="getColor(0)" icon="mdi-emoticon-neutral-outline" size="x-large"></v-btn>
        <v-btn @click="rate(1)" :color="getColor(1)" icon="mdi-emoticon-happy-outline" size="x-large"></v-btn>
    </v-col>
</template>

<script setup>
let props = defineProps(['modelValue', 'color']);
let emit = defineEmits(['update:modelValue']);

function rate(newRating) {
    emit('update:modelValue', newRating);
}

function getColor(checkRating) {
    if (props.modelValue == checkRating) {
        return props.color;
    } else {
        return 'default';
    }
}

</script>