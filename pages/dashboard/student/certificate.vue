<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-container fluid>
                <v-layout row wrap>
                    <v-row>
                        <v-col sm="8" md="8" xs="12">
                            <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
                                <template v-slot:title>
                                    This is a title
                                </template>

                                <v-card-text>
                                    This is content
                                </v-card-text>
                            </v-card> </v-col>
                    </v-row>
                    <!-- Liste des cours chapitres et lecons -->
                </v-layout>
                <section id="popular" img="https://cdn.vuetifyjs.com/images/cards/docks.jpg" class="space-top-short">
                    <popular-course />
                </section>
            </v-container>
            <Footer></Footer>
        </v-main>
    </div>
</template>

<script setup>
const user = ref('Ferdinand')
useHead({
    title: `Vous avez 50 certificat`
})

definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>