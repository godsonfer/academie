<template>
    <div>
        <v-avatar size="36px">
            <v-img alt="Avatar" :src="img"> </v-img>
        </v-avatar>
    </div>
</template>

<script setup>
defineProps({
    img: {
        type: String,
        required: true,
    }
})
</script>

