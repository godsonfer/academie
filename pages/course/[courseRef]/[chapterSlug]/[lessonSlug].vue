<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-sheet rounded="0">
                <v-tabs v-model="tab" bg-color="transparent">
                    <v-tab value="video" size="x-large" prepend-icon="mdi-monitor-account">
                        {{ mobile ? '' : 'Video' }}
                    </v-tab>
                    <!-- <v-tab value="course" size="x-large" prepend-icon="mdi-text"> {{ mobile ? '' : 'Cours' }} </v-tab>
                    <v-tab value="quizz" size="x-large" prepend-icon="mdi-information-variant"> {{ mobile ? '' : 'Quizz' }}
                    </v-tab> -->
                </v-tabs>
                <v-divider class=""></v-divider>
                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item style="v-layout-top: 0px;" value="video">
                            <v-card elevation="3" rounded="0">
                                <v-row>
                                    <v-col cols="12" md="3">
                                        <NuxtErrorBoundary>
                                            <!-- Desktop -->
                                            <v-sheet border rounded=" 0" elevation="0" v-if="!mobile" scroll-off-screen>
                                                <CourseContent :course="course"></CourseContent>
                                            </v-sheet>
                                            <!-- Mobile -->
                                            <div v-else>
                                                <CourseMobileList :course="course"></CourseMobileList>
                                            </div>
                                            <template #error="{ error }">
                                                <v-skeleton-loader class="mx-auto " type="list-item"></v-skeleton-loader>
                                            </template>
                                        </NuxtErrorBoundary>
                                    </v-col>
                                    <!-- Video du cours -->
                                    <v-col cols="12" md="9">
                                        <NuxtErrorBoundary>
                                            <VideoPlayer :cover="course.cover" :video-id="lesson.sourceUrl"
                                                :title="lesson.title"></VideoPlayer>
                                            <!-- faire reference à la page lesson -->
                                            <template #error="{ error }">
                                                <div>
                                                    <v-skeleton-loader class="mx-auto border"
                                                        type="image, heading"></v-skeleton-loader>
                                                </div>
                                            </template>
                                            <CourseTermine model-value></CourseTermine>
                                        </NuxtErrorBoundary>
                                    </v-col>

                                    <!-- chat -->
                                    <!-- <v-col cols="12" md="3">
                                        <ChatInput></ChatInput>
                                    </v-col> -->
                                </v-row>
                            </v-card>

                        </v-window-item>

                        <!-- <v-window-item value="course">
                            <v-main>
                                <v-container>
                                    <v-layout>
                                        <v-row>
                                            <v-col cols="12" md="8">
                                                <v-sheet border="lg opacity-12" class="text-body-2 mx-auto">
                                                    <v-container fluid>
                                                        <v-row>
                                                            <v-col cols="12" md="3">
                                                                <v-img
                                                                    src="https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png"
                                                                    height="88" cover></v-img>
                                                            </v-col>

                                                            <v-col cols="12" md="9">
                                                                <p class="mb-4">
                                                                    This is part of our <a href="#">Most Comprehenseive
                                                                        Guide to
                                                                        Referral Programs</a> > <a href="#">Do I Need A
                                                                        Referral
                                                                        Program?</a> section. You may enjoy other related
                                                                    articles:
                                                                </p>

                                                                <ul class="ps-4 mb-6">
                                                                    <li>
                                                                        <a href="#">5 Ways to See if Referral Programs Can
                                                                            Work for
                                                                            You</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">The 6 Key Benefits of Referral
                                                                            Marketing</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Leading Indicators of Referral Program
                                                                            Success</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Debunking the Top 5 Worst Referral
                                                                            Program
                                                                            Myths</a>
                                                                    </li>
                                                                </ul>

                                                                <v-btn block class="text-none" color="info" rounded="0"
                                                                    variant="flat">
                                                                    <span class="hidden-sm-and-down">
                                                                        Explore our 38+ Referral Program Resources
                                                                    </span>

                                                                    <span class="hidden-md-and-up">
                                                                        Explore Referral Resources
                                                                    </span>
                                                                </v-btn>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </v-sheet>
                                            </v-col>
                                        </v-row>
                                    </v-layout>
                                </v-container>
                            </v-main>
                        </v-window-item> -->
                        <!-- <v-window-item value="quizz">
                            Three
                        </v-window-item> -->
                    </v-window>
                </v-card-text>
            </v-sheet>
        </v-main>
    </div>
</template>

<script lang="ts" setup >
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
const { lessonSlug, chapterSlug, courseRef } = useRoute().params
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

const course = await useCourseDetails(courseRef)
const lesson = await useLesson(chapterSlug, lessonSlug);
const title = computed(() => {
    return `LE TRADER AFRICAIN - ${course.value.title} -  ${lesson.value.title}`;
});
useHead({
    title
});
const tab = ref(null)

definePageMeta({
    middleware: [
        'auth-user',
        'auth-course',
    ],
});
</script>

<style scoped>
.router-link-active {
    color: rgb(247, 6, 175);
}
</style>