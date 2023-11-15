<template>
    <div>
        <v-card-item v-for="(chapter, index) in course.chapters" :key="index">
            <div class="font-weight-bold ms-1 mb-2" style="font-size: small;">
                {{ index + 1 }} - {{ chapter.title }}
            </div>
            <v-card-text>
                <div class="mt-3" v-for="(lesson, index) in chapter.lessons" :key="index">
                    <nuxt-link style="text-decoration: none;" :to="`${lesson.slug}`" prefetch>
                        <v-icon>mdi-video <span></span></v-icon>
                        {{ lesson.title }}
                    </nuxt-link>
                </div>
            </v-card-text>
        </v-card-item>
    </div>
</template>

<script setup lang="ts">
defineProps({
    course: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
.router-link-active {
    color: rgb(247, 6, 175);
}
</style>