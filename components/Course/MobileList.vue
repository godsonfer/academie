<template>
    <div class="text-left">
        <v-menu v-model="menu" :close-on-content-click="true" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" size="x-large" color="primary" density="compact" prepend-icon="mdi-menu"
                    variant="plain">
                </v-btn>
            </template>
            <v-sheet elevation="2">
                <v-card rounded="0" scroll-off-screen>
                    <v-card-item v-for="(chapter, index) in course.chapters" :key="index">
                        <div class="font-weight-bold" style="font-size: small;">
                            {{ index + 1 }} - {{ chapter.title }}
                        </div>

                        <v-card-text>
                            <div class="mt-2" v-for="(lesson, index) in chapter.lessons" :key="index">
                                <nuxt-link style="text-decoration: none;" :to="`${lesson.slug}`"> {{
                                    lesson.title }}
                                </nuxt-link>
                            </div>

                        </v-card-text>
                    </v-card-item>

                </v-card>
            </v-sheet>
        </v-menu>
    </div>
</template>
<script setup lang="ts">

const menu = ref(false)
defineProps<{
    course: Array<String>
}>()
</script>

<style scoped>
.router-link-active {
    color: rgb(247, 6, 175);
}
</style>