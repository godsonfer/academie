<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-container fluid>
                <v-card variant="outlined" rounded="0" border="md">
                    <v-card rounded="0" style="font-size: small;" elevation="3">
                        <NuxtErrorBoundary>
                            <v-row>
                                <v-col md="3" colrs="12">
                                    <v-card-image>
                                        <v-img style="opacity: 0.5;" cover :src="currentCourse.cover"></v-img>
                                    </v-card-image>
                                </v-col>
                                <v-col md="9" cols="12">
                                    <v-card-title class="align-end">
                                        <v-card-desc :class="mobile ? 'text    ' : 'text-h4'">{{ currentCourse.title
                                        }}</v-card-desc>
                                    </v-card-title>
                                    <v-row>
                                        <v-col>
                                            <v-card-subtitle>
                                                <v-chip v-for="tag in currentCourse.level" :key="tag" class="m-1"
                                                    prepend-icon="mdi-certificate">
                                                    {{ tag }}
                                                </v-chip>
                                            </v-card-subtitle>
                                        </v-col>
                                        <v-col>
                                            <v-card-subtitle>
                                                <v-chip color="pink" label text-color="white"
                                                    v-for="tag in currentCourse.projects" :key="tag" class="ml-3"
                                                    prepend-icon="mdi-label">
                                                    {{ tag }}
                                                </v-chip>
                                            </v-card-subtitle>
                                        </v-col>
                                        <v-col>
                                            <v-card-subtitle>
                                                <v-chip color="blue" label text-color="white"
                                                    v-for="tag in currentCourse.projects" :key="tag" class="m-3"
                                                    prepend-icon="mdi-label">
                                                    {{ tag }}
                                                </v-chip>
                                            </v-card-subtitle>
                                        </v-col>
                                        <v-divider></v-divider>
                                        <v-col>
                                            <v-progress-linear v-model="skill" color="blue-grey" height="25">
                                                <template v-slot:default="{ value }">
                                                    <strong> {{ value }}10%</strong>
                                                </template>
                                            </v-progress-linear>
                                        </v-col>
                                        <v-col>
                                            <v-card-subtitle>
                                                <v-btn variant="outlined"
                                                    :to="`${path}/${currentCourse.chapters[0].slug}/${currentCourse.chapters[0].lessons[0].slug}`"
                                                    class="m-3 text-end" prepend-icon="mdi-play">
                                                    Contiuer
                                                </v-btn>

                                            </v-card-subtitle>
                                        </v-col>
                                    </v-row>

                                </v-col>
                            </v-row>
                            <template #error="{ error }">
                                <div>
                                    <v-skeleton-loader class="mx-auto border" type="image, heading"></v-skeleton-loader>
                                </div>
                            </template>
                        </NuxtErrorBoundary>
                    </v-card>
                </v-card>

                <v-row>

                    <v-col md="4" cols="12">
                        <v-row>
                            <v-col cols="12">
                                <v-sheet border="md" class="pa-6 mx-auto " max-width="400">
                                    <h4 class="text font-weight-bold mb-4">Ce que vous allez apprendre</h4>
                                    <p class="mb-8" v-for="(item, index) in currentCourse.whatToLearn" :key="index">
                                        <v-icon color="teal"> mdi-check </v-icon>
                                        {{ item }}
                                    </p>
                                </v-sheet>
                                <ButtonPrice :price="currentCourse.price" :id="currentCourse.reference"></ButtonPrice>
                                <v-sheet rounded="0" elevation="1">
                                    <v-list v-model:opened="open">
                                        <v-list-item
                                            :title="`Contenu de la formaion (${currentCourse.chapters.length} modules) `"></v-list-item>
                                        <div value="Users" v-for="(chapter, index) in currentCourse.chapters" :key="index">
                                            <v-list-group :value="chapter.title" class="text-start">
                                                <template v-slot:activator="{ props }">
                                                    <v-list-item prepend-icon="mdi-folder-play-outline" v-bind="props"
                                                        :title="chapter.title"></v-list-item>
                                                </template>
                                                <v-list-item v-for="(lesson, i) in chapter.lessons" :key="i"
                                                    prepend-icon=" mdi-youtube" :value="lesson.title">
                                                    <nuxt-link style="text-decoration: none; font-size:x-small"
                                                        :to="`${$route.params.courseRef}/${chapter.slug}/${lesson.slug}`">
                                                        <v-badge content="Gratuit" color="error" v-if="lesson.isFree">
                                                            {{ lesson.title }}
                                                        </v-badge>
                                                        <div v-else>
                                                            {{ lesson.title }}
                                                        </div>
                                                    </nuxt-link>

                                                </v-list-item>
                                            </v-list-group>
                                        </div>
                                    </v-list>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12">
                                <v-list density="compact" class="sticky-element">
                                    <v-list-subheader>Prérequis</v-list-subheader>
                                    <v-list-item v-for="(item, i) in currentCourse.prerequis" :key="i" :value="item"
                                        color="primary">
                                        <template v-slot:prepend>
                                            <v-icon icon="mdi-school-outline"></v-icon>
                                        </template>
                                        <v-list-item-title v-text="item"></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-list density="compact">
                                    <v-list-subheader>Niveau de Compétence</v-list-subheader>
                                    <v-list-item v-for="(item, i) in currentCourse.level" :key="i" :value="item"
                                        color="primary">
                                        <template v-slot:prepend>
                                            <v-icon icon="mdi-human-male-board-poll"></v-icon>
                                        </template>
                                        <v-list-item-title v-text="item"></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list density="compact">
                                    <v-list-subheader>Autres</v-list-subheader>

                                    <v-list-item :value="currentCourse.title" color="primary">
                                        <template v-slot:prepend>
                                            <v-icon icon="mdi-clock"></v-icon>
                                        </template>
                                        <v-list-item-title v-text="`12h`"></v-list-item-title>
                                    </v-list-item>
                                    <v-list-item :value="currentCourse.title" color="primary">
                                        <template v-slot:prepend>
                                            <v-icon icon="mdi-account"></v-icon>
                                        </template>
                                        <v-list-item-title v-text="`120 Etudiants`"></v-list-item-title>
                                    </v-list-item>

                                    <v-list-item :value="currentCourse.title" color="primary">
                                        <template v-slot:prepend>
                                            <v-icon icon="mdi-star"></v-icon>
                                        </template>
                                        <nuxtLink to="#avis" style="text-decoration : none" v-text="`1200 Avis`">
                                        </nuxtLink>
                                    </v-list-item>
                                </v-list>

                            </v-col>
                        </v-row>




                    </v-col>
                    <v-col md="8" cols="12">
                        <v-sheet class="text-body-2 mx-auto">
                            <v-container fluid>
                                <v-row>
                                    <v-col sm="12" cols="12">
                                        <p class="mb-4">
                                            {{ currentCourse.desc }}
                                        </p>

                                    </v-col>
                                    <!-- <v-col sm="4">

                                        <span class="text-bold">
                                            <b> Les participants ont aussi suivie</b>
                                        </span>
                                        <v-card v-for="course in courses" :key="course.title" class="mt-1">

                                            <v-card-title class="text-h5">
                                                {{ course.title }}
                                            </v-card-title>

                                            <v-card-subtitle> {{ course.title }}</v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn variant="text">
                                                    {{ course.price }}$
                                                </v-btn>

                                                <v-spacer></v-spacer>

                                                <v-btn variant="text" class="text-end" prepend-icon="mdi-account-multiple">
                                                    {{ course.nbrStudent }}
                                                </v-btn>
                                            </v-card-actions>
                                            <v-divider></v-divider>
                                        </v-card>
                                    </v-col> -->
                                </v-row>
                            </v-container>
                        </v-sheet>
                        <!-- 
                        <v-row>

                            <v-col>
                                <v-expansion-panels>
                                    <v-expansion-panel title="LE TRADER AFRICAIN" :text="text">
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>
                        </v-row> -->
                    </v-col>
                </v-row>

            </v-container>
            <Footer></Footer>
        </v-main>
    </div>
</template>
<script setup>
const path = useRoute().fullPath
const open = ref(['Users'])
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const progress = ref(10)
let userCourse = ref([])
let promotion = ref([])

const currentCourse = await useCourseDetails(useRoute().params.courseRef)
useHead({
    title: currentCourse.title
})
const text = ""

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

.v-list-item--active {
    color: rgb(247, 6, 175);
}

.sticky-element {
    position: sticky;
    top: 0;
}

.v-list-item__content {
    color: rgb(37, 4, 72);
}
</style>
