<template>
    <div>
        <v-card rounded="0">
            <!-- <v-icon>mdi-magnify</v-icon> -->
            <v-card-item align-center>
                <v-row>
                    <v-col sm="3" md="3" v-for="(tabName, i) in items" :key="i" class="m-2">
                        <v-btn variant="outlined" :to="`${route.fullPath}/${tabName.link}`" color="primary" dark>{{
                            tabName.text }}</v-btn>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-card>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-card rounded="0" class="mt-1">
            <v-row>
                <v-col sm="12" md="6">
                    <v-card-item>
                        <ClientOnly>
                            <!-- <ChartsPieChart></ChartsPieChart> -->
                        </ClientOnly>
                    </v-card-item>
                </v-col>

                <v-col sm="12" md="6">
                    <v-card-item>
                        <CourseAdminCourse :courses="courses"></CourseAdminCourse>
                    </v-card-item>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const courses = await useCourses() //l'ensemble des lecon
const items = ref([
    {
        text: 'Cours',
        link: "course"
    },
    {
        text: 'Etudiants',
        link: "students"
    }, {
        text: 'Ventes',
        link: "sales"
    }, {
        text: 'Message',
        link: "chat"
    },
])
</script>