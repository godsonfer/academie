<template>
    <div>
        <v-card rounded="0" color="light-green-lighten-3">
            <v-list v-model:opened="open">
                <v-list-group value="Users">
                    <v-list-group v-for="(chapter, index) in chapters" :key="index" :value="chapter.title">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" :title="chapter.title"></v-list-item>
                        </template>
                        <v-list-item class="mt-3" v-for="(lesson, i) in chapter.lessons" :key="i" :title="lesson.title"
                            :value="title" @click="dialog = true; displayDetails(lesson, chapter.id)">
                        </v-list-item>
                        <v-divider></v-divider>
                        <div class="mt-4 ml-11 mb-4">
                            <v-btn @click="dialog = true; displayDetails(null, chapter.id)" class="m-3" variant="tonal"
                                color="pink" prepend-icon="mdi-plus">
                                <v-icon>mdi-television-play</v-icon>
                            </v-btn>
                        </div>
                    </v-list-group>

                </v-list-group>

            </v-list>
        </v-card>
        <v-dialog v-model="dialog" persistent rounded="0">

            <v-form fast-fail @submit.prevent="createLesson" validate-on="submit lazy">
                <v-card rounded="0" elevation="12">
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12">
                                    <v-text-field variant="underlined" v-model="title"
                                        :rules="[v => !!v || 'Veuillez entrer le titre de la leçon']"
                                        hint="Titre de la leçon" required persistent-hint
                                        prepend-inner-icon="mdi-format-title"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="6">
                                    <v-file-input variant="underlined" :show-size="1000"
                                        :rules="[v => !!v || 'Choississez le contenu de la leçon']"
                                        prepend-inner-icon="mdi-video-check-outline" accept="video/mp4" counter type="file"
                                        hint="Contenu de la leçon" @input="onChange" ref="file" persistent-hint
                                        required></v-file-input>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete variant="underlined" v-model="isFree" :items="['Public', 'Privé',]"
                                        hint="Visibilité" persistent-hint multiple
                                        prepend-inner-icon="mdi-eye"></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-textarea auto-grow variant="underlined" v-model="desc" required
                                        hint="Description de la leçon" persistent-hint
                                        prepend-inner-icon="mdi-form-textarea"
                                        :rules="[v => !!v || 'Veuillez entrer décrire cette leçon']"></v-textarea>
                                </v-col>
                            </v-row>

                        </v-container>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" variant="outlined" @click="dialog = false" prepend-icon="mdi-close">
                            Fermer
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="outlined" prepend-icon="mdi-content-save-all"
                            @click="createLesson" :loading="isLoading">
                            Sauvegarder
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
    </div>
</template>
<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

defineProps({
    chapters: {
        type: [],
        required: true
    }
})

const dialog = ref(false);
const title = ref('');
const isFree = ref(false);
const desc = ref('');
const les = ref([])
const open = ref(['Users'])
let file = ref(null)
let fileDisplay = ref(null)
let fileData = ref(null)
let isLoading = ref(false);
const chapterId = ref("")
// methods 
const onChange = () => {
    fileDisplay.value = URL.createObjectURL(file.value.files[0])
    fileData.value = file.value.files[0]
}
const displayDetails = (lesson = null, chId) => {
    title.value = lesson?.title;
    desc.value = lesson?.desc;
    chapterId.value = chId
}

const createLesson = async () => {
    let dataOut = null;
    let errorOut = null;
    isLoading.value = true
    let name = fileData.value.name
    if (fileData.value) {
        const { data, error } = await client
            .storage
            .from('course')
            .upload(`lesson/${new Date().getTime().toString().slice(8, 13)}${name}`, fileData.value, { cacheControl: 3600 })
        dataOut = data;
        errorOut = error;
    }

    if (errorOut) {
        return errorOut
    }

    let video = ''
    if (dataOut) {
        video = dataOut.path ? dataOut.path : ''
    }
    try {
        await useFetch(`/api/course/admin/create/lesson`, {
            method: 'POST',
            body: {
                title: title.value,
                slug: title.value,
                sourceUrl: `${client.storageUrl}/object/public/course/${video}`,
                desc: desc.value,
                chapterId: chapterId.value,
            }
        })
        // await userStore.getAllPosts()
        // userStore.isMenuOverlay = false
        isLoading.value = false
    } catch (error) {
        isLoading.value = false
        console.log(error)
    }
}
</script>