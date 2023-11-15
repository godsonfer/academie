<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <VMain>
            <Promotion :username="username"></Promotion>
        </VMain>
        <v-main>
            <v-container fluid>
                <v-layout row wrap>
                    <!-- Liste des cours chapitres et lecons -->
                </v-layout>
                <NuxtErrorBoundary>
                    <section id="popular" class="space-top-short">
                        <course-list :courses="courses" :progress="10" />
                    </section>
                    <template #error="{ error }">
                        <div>
                            <v-skeleton-loader class="mx-auto border"
                                type=" list-item-two-line, image, "></v-skeleton-loader>
                        </div>
                    </template>
                </NuxtErrorBoundary>
            </v-container>
            <Footer></Footer>
        </v-main>
    </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const user = useSupabaseUser()
const database = useSupabaseClient()
const username = user.value.user_metadata.full_name
useHead({
    title: `Bienvenue dans votre dashboard ${user.value.user_metadata.full_name}`
})
const courses = await useCourses()
definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>