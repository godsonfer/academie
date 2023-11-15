<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-container fluid>
                <v-card elevation="10" rounded="0">
                    <v-layout row wrap>
                        <v-row>
                            <!-- Nombre de lecon -->

                            <v-col cols="" sm="4" md="4">
                                <div class="text-h6 ml-2" v-if="course">
                                    {{ course.title }}
                                </div>
                                <div class="text-h6 ml-2" v-else>
                                    <v-progress-circular :width="1" color="red" indeterminate></v-progress-circular>
                                </div>
                            </v-col>


                            <v-col sm="2" md="2">
                                <v-btn block size="small" variant="tonal" prepend-icon="mdi-plus">Ajouter un
                                    élève</v-btn>
                            </v-col>
                            <v-col sm="2" md="2">
                                <v-btn block size="small" variant="tonal" prepend-icon="mdi-account-school-outline">
                                    élèves</v-btn>
                            </v-col>
                            <v-col sm="2" md="2">
                                <AdminAddChapter :course-id='course.id' v-if="course"></AdminAddChapter>
                                <v-btn v-else loading="true"></v-btn>
                            </v-col>
                            <v-col sm="2" md="2">
                                <v-btn block size="small" variant="tonal" prepend-icon="mdi-cog">Paramètres</v-btn>
                            </v-col>
                        </v-row>
                    </v-layout>
                </v-card>
                <v-layout row wrap>
                    <v-row>
                        <v-col sm="12" md="12">
                            <CourseAdminChapterList :chapters="chapters" />
                        </v-col>
                    </v-row>

                </v-layout>
            </v-container>
        </v-main>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const client = useSupabaseClient()

const course = await useCourseDetails(id) //une seule lecon
const chapters = ref([])
chapters.value = course.value.chapters
const Chapter = client.channel('custom-all-channel')
    .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'Chapter' },
        (payload) => {
            chapters.value.push(payload.new)
        }
    )
    .subscribe()

definePageMeta({
    middleware: [
        'auth-user',
    ],
});

</script>
