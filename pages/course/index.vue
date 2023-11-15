<template>
    <v-container>
        <div>
            <div>
                <HeaderDashboard></HeaderDashboard>
            </div>
            <v-main>
                <NuxtErrorBoundary>
                    <CourseUseCourse :progress='progress' :courses="userCourse">
                    </CourseUseCourse>
                    <template #error="{ error }">
                        <div>
                            <v-skeleton-loader class="mx-auto border"
                                type=" list-item-two-line, image, "></v-skeleton-loader>
                        </div>
                    </template>
                </NuxtErrorBoundary>

                <Footer></Footer>
            </v-main>

        </div>
    </v-container>
</template>
<script setup>
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const progress = ref(10)
const courses = await useCourses()
let userCourse = ref([])

const { lessonSlug, chapterSlug } = useRoute().params
userCourse.value = courses.value.filter((course) => course.draft === false);

definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>

<style scoped>
.router-link-active {
    color: rgb(247, 6, 175);
}

.router-link-exact-active {
    color: rgb(247, 6, 175);
}

.image-background {
    /* background-image: url('https://cdn.vuetifyjs.com/images/cards/docks.jpg'); */
    /* Remplacez 'votre-image.jpg' par le chemin de votre image */
    background-size: 30%;
    background-attachment: fixed;
}
</style>
