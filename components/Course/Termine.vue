<template>
    <v-btn justify-end class=" ml-10" :color="modelValue ? 'success' : 'primary'" variant="outlined"
        @input="() => $emit('update:modelValue', !modelValue)" :value="modelValue">
        {{ modelValue ? 'Terminé !' : 'Marquer Terminer' }}
    </v-btn>
</template>
  
<script setup lang="ts">
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['update:modelValue']);
</script>
  
<style scoped>
::selection {
    display: none;
}
</style>