<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-container fluid>
                <v-layout row wrap>
                    <PlansPaiement :course="course"></PlansPaiement>
                </v-layout>
                <v-layout row wrap>
                    <PlansPlan :course="course"></PlansPlan>
                </v-layout>
            </v-container>
        </v-main>
    </div>
</template>
<script setup>
const tab = ref(null)
const course = await useCourseDetails(useRoute().params.courseRef)
definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>