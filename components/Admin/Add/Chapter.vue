<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent rounded="0" draggable width="500">
            <template v-slot:activator="{ props }">
                <v-btn block v-bind="props" size="small" variant="tonal" prepend-icon="mdi-plus">Nouveau
                    Chapitre</v-btn>
            </template>
            <v-card rounded="0" elevation="12">
                <v-card-text>
                    <v-container>
                        <v-form fast-fail @submit.prevent="createChapter(courseId)" validate-on="submit lazy">
                            <v-row>
                                <v-col cols="12" sm="12">
                                    <v-text-field variant="underlined" v-model="title"
                                        :rules="[v => !!v || 'Veuillez entrer un titre à ce chapitre']"
                                        label="Titre du chapitre" hint="Titre du chapitre" required persistent-hint
                                        prepend-inner-icon="mdi-format-title"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-text-field variant="underlined" v-model="desc"
                                        :rules="[v => !!v || 'Veuillez entrer une description à ce chapitre']"
                                        label="Desciption du chapitre" hint="Description du chapitre" required
                                        persistent-hint prepend-inner-icon="mdi-format-textarea"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" variant="outlined" @click="dialog = false" prepend-icon="mdi-close">
                        Fermer
                    </v-btn>
                    <v-btn :loading="isLoading" color="blue-darken-1" variant="outlined" prepend-icon="mdi-content-save-all"
                        @click="createChapter(courseId)">
                        Sauvegarder
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script lang="ts" setup>
defineProps({
    courseId: {
        type: String, required: true,
    }
})
const title = ref('');
const desc = ref('')
let isLoading = ref(false);
const dialog = ref(false);
const client = useSupabaseClient()
const createChapter = async (courseId: string) => {
    isLoading.value = true
    let course
    try {
        const data = await useFetch(`/api/course/admin/create/chapter`, {
            method: 'POST',
            body: {
                title: title.value,
                desc: desc.value,
                courseId: courseId,
            }
        })
        // await userStore.getAllPosts()
        // userStore.isMenuOverlay = false
        isLoading.value = false
        course = data
    } catch (error) {
        isLoading.value = false
        console.log(error)
    }
    console.log(course)
}
</script>