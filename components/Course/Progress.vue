<template>
    <v-progress-linear rounded striped :model-value='modelValue'></v-progress-linear>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: {
        type: Number; required: true; default: 0;
    }
}>()
</script>