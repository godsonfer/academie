<template>
    <div>

        <v-btn block class="text-none" color="teal-darken-2" rounded="0" variant="flat" :to="`/course/subscription/${id}`">
            <p>
                Accéder à cette formation à <span class="text-h5 text-orange-accent-3 ">
                    {{ price }}</span> $ </p>
        </v-btn>
    </div>
</template>
<script setup lang="ts">
defineProps({
    price: {
        type: Number,
        required: true
    },
    id: { type: String, required: true },
    isPromo: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>