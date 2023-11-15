<template>
    <v-card rounded="0" elevation="3">
        <v-row>
            <v-col cols="12" v-for="(course, index) in courses" :key="index">
                <v-btn variant="plain" color="pink" :to="`${route.fullPath}/course/${course.reference}`">
                    {{ course.title }}
                </v-btn>
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-card>
</template>
<script setup  >
const open = ref('user')
const route = useRoute()
defineProps({
    courses: {
        require: true,
        type: Array
    }
})
</script>