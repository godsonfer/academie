<template>
    <div>
        <ClientOnly>
            <v-row>
                <v-col cols="12" sm="4" md="3" v-for="(course, i) in courses" :key="i">
                    <v-card class="mx-auto" elevation="3" max-width="400">
                        <v-skeleton-loader :loading="loading" height="240" type="image, list-item-two-line">
                            <v-responsibe>
                                <v-img class="align-end text-white" height="200" :src="course.cover" cover>
                                    <v-card-title>{{ course.title }}</v-card-title>
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular color="pink" indeterminate></v-progress-circular>
                                        </div>
                                    </template>
                                </v-img>

                                <v-card-subtitle class="pt-4">
                                    {{ course.nbrStudent }} Inscrit(s)
                                </v-card-subtitle>

                                <v-card-text>
                                    <div>{{ course.desc }}</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="orange" variant="plain" size="small" prepend-icon="mdi-currency-usd"
                                        class="text-caption">
                                        {{ course.price }}
                                    </v-btn>

                                    <v-btn color="orange" size="small">
                                        <v-icon>
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                    <v-btn color="teal" size="small">
                                        <v-icon>
                                            mdi-eye
                                        </v-icon>
                                    </v-btn>
                                    <v-btn size="small">
                                        <v-icon>
                                            mdi-publish
                                        </v-icon>
                                    </v-btn>
                                    <v-btn color="pink" size="small">
                                        <v-icon>
                                            mdi-delete
                                        </v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-responsibe>
                        </v-skeleton-loader>
                    </v-card>
                </v-col>
            </v-row>
        </ClientOnly>
    </div>
</template>
<script setup type="ts">
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'

defineProps({
    courses: {
        type: [],
        required: true
    }
})

</script>