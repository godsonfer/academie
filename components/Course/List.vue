<template >
    <v-main>
        <v-row>
            <v-col cols="12" sm="4" v-for="(course, index) in courses" :key="index">
                <div>
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card elevation="0" rounded="2" height="450" color="blue-lighten-5" v-bind="props">
                            <div class="align-self-center ">
                                <v-img :src="course.cover" placeholder height="240" :class="isHovering && 'hover'"
                                    cover></v-img>
                            </div>

                            <v-card-title>
                                {{ course.title }}
                            </v-card-title>
                            <v-card-text>
                                <course-progress model-value="90" color="primary"></course-progress>
                            </v-card-text>
                            <v-card-item class="text-truncate">
                                <v-icon icon="mdi-clock" color="teal"></v-icon>
                                12h |
                                <v-icon icon="mdi-folder" color="teal"></v-icon>
                                {{ course.chapters.length }} modules
                            </v-card-item>
                            <v-card-item class="text-truncate">
                                {{ course.desc }}
                            </v-card-item>
                            <progressbar></progressbar>

                            <v-card-actions>
                                <v-btn color="pink-lighten-2" variant="outlined" :to="`/course/${course.reference}`">
                                    EXplorer
                                </v-btn>
                                <v-icon color="pink" size="xsmall" v-for="(index, i) in course.note" :key="i"
                                    class="star-icon">
                                    mdi-star
                                </v-icon>
                                <v-chip size="small" color="pink" label text-color="white" v-for="tag in course.level"
                                    :key="tag" class="ml-3" prepend-icon="mdi-label">
                                    {{ tag }}
                                </v-chip>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </div>
            </v-col>
        </v-row>

    </v-main>
</template>
<script setup lang="ts">
const path = useRoute().fullPath
defineProps<{
    progress: {
        type: Number; required: true; default: 0;
    }
    courses: {
        type: []; required: true
    }
    rating: {
        type: Number; required: true; default: 3
    }
}>()

const show = ref(false)
const icons = ref(['mdi-play'])

</script>

<style lang="scss" >
@import "./list.style.scss"
</style>