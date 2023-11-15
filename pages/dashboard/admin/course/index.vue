<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-card rounded="0">
                <v-layout row wrap>
                    <v-row>
                        <!-- Nombre de lecon -->
                        <v-col sm="2" class="card" md="2">
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <div class="text-indigo-darken-1 ml-2">
                                        {{ courses.length }} publiée(s)
                                    </div>
                                </v-col>
                                <v-divider></v-divider>
                                <v-col cols="12" sm="12" md="12">
                                    <div class="text-pink ml-2">
                                        {{ courses.length }} Brouillon(s)
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <!-- Recherche -->
                        <v-col sm="5" md="5">
                            <Research></Research>
                        </v-col>
                        <!-- Trie -->
                        <v-col sm="2" md="2">
                            <v-form ref="form">
                                <!-- :rules="[v => !!v || 'Item is required']" required -->
                                <v-select prepend-inner-icon="mdi mdi-sort" v-model="sort" :items="items"
                                    class="mr-2"></v-select>
                            </v-form>
                        </v-col>
                        <v-col sm="3" md="3">
                            <AdminAddCourse></AdminAddCourse>
                        </v-col>
                    </v-row>
                </v-layout>
            </v-card>
        </v-main>
        <v-main>
            <v-container fluid>

                <v-layout row wrap>
                    <v-row>
                        <v-col sm="12" md="12">
                            <CourseAdminList :courses='courses'> </CourseAdminList>
                        </v-col>
                    </v-row>
                </v-layout>
            </v-container>
        </v-main>
    </div>
</template>

<script setup>
const courses = await useCourses()
const name = ref('')
const validate = async () => {
    const { valid } = await this.$refs.form.validate()
}
const items = []
const sort = ref('course 1')
definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>
