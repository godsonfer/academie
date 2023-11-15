<template>
    <v-layout row wrap>
        <v-text-field density="compact" :placeholder="placeholder" :prepend-inner-icon="icon" rounded="12" variant="outined"
            loading :label="label"></v-text-field>
    </v-layout>
</template>

<script setup  lang="ts">
defineProps<{
    label: string
    loading: { type: Boolean; default: false }
    placeholder: string;
    icon: string;
}>()
</script>