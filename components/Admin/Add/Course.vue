<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent rounded="0">
            <template v-slot:activator="{ props }">
                <v-btn rounded="0" color="indigo-darken-1" variant="outlined" v-bind="props" size="x-large"><v-icon>
                        mdi-television-play
                    </v-icon>
                </v-btn>
            </template>

            <v-card rounded="0" elevation="12">
                <v-progress-linear :model-value="progressing" color="red" buffer-value="0" stream></v-progress-linear>
                <v-card-text>
                    <v-container>
                        <v-form fast-fail @submit.prevent="createNewCourse" validate-on="submit lazy">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field variant="underlined" v-model="title"
                                        :rules="[v => !!v || 'Veuillez entrer un titre à cette formation']"
                                        label="Titre de la formation" hint="Titre de formation" required persistent-hint
                                        prepend-inner-icon="mdi-format-title"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field label="Version de formation" hint="Version de formation"
                                        :rules="[v => !!v || 'Quelle est la version de cette formation ?']" persistent-hint
                                        prepend-inner-icon="mdi-diversify"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-file-input @change="handleChange" variant="underlined" :show-size="1000"
                                        :rules="[v => !!v || 'Choississez la couverture de votre formation']"
                                        label="Couverture" ref="file" prepend-inner-icon="mdi-camera"
                                        accept="image/png, image/jpeg, image/bmp" counter type="file"
                                        hint="Couverture de la formation" persistent-hint required></v-file-input>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="price" variant="underlined" label="Prix"
                                        hint="Prix de la formation" persistent-hint type="number"
                                        :rules="[v => !!v || 'Veuillez entrer le prix de votre formation']" required
                                        prepend-inner-icon="mdi mdi-numeric"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12">
                                    <v-textarea v-model="desc" label="Description" auto-grow variant="underlined" required
                                        hint="Description de la formation" persistent-hint type="number"
                                        prepend-inner-icon="mdi-form-textarea" maxlength="2000" counter
                                        :rules="[v => !!v || 'Veuillez entrer décrire cette formation']"></v-textarea>
                                </v-col>
                                <!-- <v-col cols="12" sm="6">
                                    <v-autocomplete variant="underlined"
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Catégories"  persistent-hint multiple
                                        prepend-inner-icon="mdi-shape"></v-autocomplete>
                                </v-col> -->
                                <v-col cols="12" sm="6">
                                    <v-autocomplete variant="underlined" v-model="level"
                                        :items="['Débutant', 'Intermédiaire', 'Professionnel', 'Tous les niveaux',]"
                                        label="Niveau " hint="Niveau pour avoir accès à ce cours" persistent-hint multiple
                                        prepend-inner-icon="mdi-file-certificate-outline"></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete variant="underlined" v-model="prerequis"
                                        :items="['Éducation et formation', 'Plateforme de trading', 'Capital de départ', 'Stratégie', 'Gestion des risques', 'Analyse technique', 'Psychologie du trading', 'Journaux de trading', 'Démo Trading', 'Temps et engagement', 'Analyse  Fondemmentale']"
                                        label="Prérequis" hint="Prérequis à avoir" persistent-hint multiple
                                        prepend-inner-icon="mdi-information"></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete variant="underlined" v-model="projects"
                                        :items="['Trading Challenge', 'Challenge Pro', 'Challenge LETA 100T', 'Challenge Compte réel', 'Challenge  OctaFX', 'Mentorship',]"
                                        label="Catégories" persistent-hint multiple
                                        prepend-inner-icon="mdi-soccer-field"></v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-autocomplete variant="underlined" v-model="whatToLearn"
                                        :items="['Stratégie Price Action', 'ICT', 'SMD', 'Fondammentaux', 'Starétgie LETA', 'Holy Graine',]"
                                        label="Ce que vont apprendre les étudiants" persistent-hint multiple
                                        prepend-inner-icon="mdi-soccer-field"></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-textarea variant="underlined" v-model="orther" label="Autres informations"
                                        persistent-hint multiple prepend-inner-icon="mdi-folder-information" counter
                                        maxlength="500"></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-switch v-model="draft" prepend-icon="mdi-selection-drag">
                                        <template v-slot:label>
                                            Brouillon
                                        </template>
                                    </v-switch>
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
                    <v-btn color="blue-darken-1" variant="outlined" :loading="isLoading" prepend-icon="mdi-content-save-all"
                        @click="createNewCourse">
                        Ajouter
                    </v-btn>
                </v-card-actions>

            </v-card>

        </v-dialog>
    </v-row>
</template>
<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const dialog = ref(false)
let progressing = ref(0)
const price = ref(50)
const title = ref('');
const desc = ref('');
let file = ref()
let fileDisplay = ref()
let fileData = ref()
const isLoading = ref(false)
const level = ref([])
const prerequis = ref([])
const projects = ref([])
const whatToLearn = ref([])
const orther = ref('')
const draft = ref(false)
// methods 
const handleChange = () => {
    fileDisplay.value = URL.createObjectURL(file.value.files[0])
    fileData.value = file.value.files[0]
}

const createNewCourse = async () => {
    let dataOut = null;
    let errorOut = null;
    isLoading.value = true
    let name = fileData.value.name
    if (fileData.value) {
        const { data, error } = await client
            .storage
            .from('course')
            .upload(`cover/${new Date().getTime().toString().slice(8, 13)}${name}`, fileData.value, { cacheControl: 3600, })
        dataOut = data;
        errorOut = error;

    }

    if (errorOut) {
        console.log(errorOut)
        return errorOut
    }

    let cover = ''
    if (dataOut) {
        cover = dataOut.path ? dataOut.path : ''
    }

    try {
        const { error, data } = await useFetch(`/api/course/admin/create/course`, {
            method: 'POST',
            body: {
                level: level.value,
                prerequis: prerequis.value,
                projects: projects.value,
                whatToLearn: whatToLearn.value,
                draft: draft.value,
                title: title.value,
                price: parseFloat(price.value),
                cover: `${client.storageUrl}/object/public/course/${cover}`,
                ortherInfo: orther.value,
                desc: desc.value,
            }
        })
        // await userStore.getAllPosts()
        // userStore.isMenuOverlay = false
        isLoading.value = false
        console.log(data)
        console.log(error)
    } catch (error) {
        isLoading.value = false
        console.log(error)
    }
}


// const Course = client.channel('custom-all-channel')
//     .on(
//         'postgres_changes',
//         { event: '*', schema: 'public', table: 'Course' },
//         (payload) => {
//             console.log('Change received!', payload)
//             localStorage.getItem('/api/course/meta')
//             localStorage.setItem('/api/course/')

//         }
//     )
//     .subscribe()
</script>