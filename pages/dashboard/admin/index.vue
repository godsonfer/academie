<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-layout row wrap>
                <v-row>
                    <v-col>
                        <AdminNavigationDashboard> </AdminNavigationDashboard>
                    </v-col>
                </v-row>
            </v-layout>

        </v-main>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>