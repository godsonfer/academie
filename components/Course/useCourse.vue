<template>
    <v-main>
        <v-row>
            <v-col sm="4" md="4" v-for="(course, index) in courses" :key="index">
                <v-card rounded="0" elevation="3">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">
                                <v-progress-circular :rotate="360" :size="100" :width="7" :model-value="i" color="teal">
                                    {{ index }}%
                                </v-progress-circular>
                            </v-card-title>

                            <v-card-subtitle>{{ course.title }}</v-card-subtitle>

                            <v-card-actions>
                                <v-btn class="ms-2" icon="mdi-play" variant="text"
                                    :to="`/course/${course.reference}`"></v-btn>
                            </v-card-actions>
                        </div>

                        <v-img cover :src="course.cover">
                        </v-img>
                    </div>
                </v-card>
            </v-col>
        </v-row>

    </v-main>
</template>

<script lang="ts" setup>
defineProps({
    courses: {
        type: [], required: true
    }
})
</script>