<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-container grid-list-xs>
                <!-- details du user -->
                <v-expansion-panels variant="popout" class="pa-4">
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <v-row align="center" class="spacer" no-gutters>
                                <v-col cols="4" sm="2" md="1">
                                    <UserAvatar :img="user[0].avatar">
                                    </UserAvatar>
                                </v-col>

                                <v-col>
                                    <strong>{{ user_data.user_metadata.full_name }}</strong>
                                    <span class="text-grey">
                                        &nbsp;(5) cours suivies
                                    </span>
                                </v-col>
                                <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                                    &mdash;
                                    Inscription :{{ created_at }}
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col sm="6" md="6">
                                    <v-card class="mx-auto" rounded="1" elevation="2">
                                        <v-card-item title="Abonnement">
                                            <template v-slot:subtitle>
                                                <v-icon icon="mdi-alert" size="18" color="error" class="me-1 pb-1"></v-icon>
                                                Mensuel
                                            </template>
                                        </v-card-item>

                                        <v-card-text class="py-0">
                                            <v-row align="center" no-gutters>
                                                <v-col class="text-h6">
                                                    20 Jan 2014
                                                </v-col>

                                            </v-row>
                                        </v-card-text>

                                        <div class="d-flex py-3 justify-space-between">
                                            <v-list-item density="compact" prepend-icon="mdi-lock-clock">
                                                <v-list-item-subtitle> Dans 3 jours</v-list-item-subtitle>
                                            </v-list-item>


                                        </div>


                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-btn size="large" variant="outlined" color="teal" prepend-icon="mdi-pencil">
                                                Editer
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-sheet elevation="10" rounded="1">
                                        <div class="pa-4">
                                            <v-chip-group selected-class="text-primary" column>
                                                <v-chip v-for="tag in tags" :key="tag">
                                                    {{ tag }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <!-- Progression -->
                <v-expansion-panels variant="popout" class="pa-4">
                    <v-expansion-panel hide-actions>
                        <v-expansion-panel-title>
                            <v-row align="center" class="spacer" no-gutters>
                                <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                    <strong>Progression</strong>
                                    <span class="text-grey">
                                        &nbsp;(5) nouveau cours
                                    </span>
                                </v-col>
                                <v-col class="text-no-wrap text-left" sm="3">
                                    <v-chip color="light-blue-darken-1" class="ms-0 me-2" label small>
                                        5 Mises à jours
                                    </v-chip>
                                    <strong>Disponibles</strong>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <v-row>
                                <v-col sm="3" md="3" v-for="(i, index) in 20" :key="index">
                                    <v-card theme="dark" rounded="1" elevation="3">
                                        <div class="d-flex flex-no-wrap justify-space-between">
                                            <div>
                                                <v-card-title class="text-h5">
                                                    <v-progress-circular :rotate="360" :size="100" :width="15"
                                                        :model-value="i" color="teal">
                                                        {{ i }}%
                                                    </v-progress-circular>
                                                </v-card-title>

                                                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                                                <v-card-actions>
                                                    <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                                                </v-card-actions>
                                            </div>

                                            <v-avatar v-if="!mobile" class="ma-3" size="100" rounded="0">
                                                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                            </v-avatar>
                                        </div>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <!-- Badges -->
                <v-expansion-panels variant="popout" class="pa-4">
                    <v-expansion-panel hide-actions>
                        <v-expansion-panel-title>
                            <v-row align="center" class="spacer" no-gutters>
                                <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                                    <strong>Badges</strong>
                                    <span class="text-grey">
                                        &nbsp;(5)
                                    </span>
                                </v-col>
                                <v-col class="text-no-wrap text-left" cols="5" sm="3">
                                    <v-chip color="light-blue-darken-1" class="ms-0 me-2" label small>
                                        5 nouveaux badge
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <v-row>
                                <v-col sm="6" md="6" v-for="badge in badges" :key="badge">
                                    <v-banner lines="one" :icon="badge.icon" :color="badge.color" class="my-4">
                                        <v-banner-text>
                                            {{ badge.name }} ~ {{ badge.requirement }}
                                        </v-banner-text>
                                    </v-banner>
                                </v-col>
                            </v-row>

                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-container>
        </v-main>
    </div>
</template>
<script setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import { useDate } from 'vuetify/labs/date'
const date = useDate()


const tags = ref([
    'Work',
    'Home Improvement',
    'Vacation',
    'Food',
    'Drawers',
    'Shopping',
    'Art',
    'Tech',
    'Creative Writing',
]);
const badges = ref([
    { name: "débutant", icon: 'mdi-account-school-outline', requirement: 'Acheter un cours', color: 'red' },
    { name: "Intermédiaire", icon: 'mdi-police-badge-outline', requirement: 'Passer 100T challenge', color: 'teal' },
    { name: "Modérateur", icon: 'mdi-handshake-outline', requirement: 'Assister les débutant', color: 'teal-accent-3' },
    { name: "Professionnel", icon: 'mdi-professional-hexagon', requirement: 'Plan-psychologie-rentabilité ', color: 'amber-darken-4' }
])
const labels = { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' };
const time = 0;
const forecast = [
    { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
    { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
    { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
]
const user_data = useSupabaseUser()
const created_at = date.format(user_data.value.created_at, 'fullDateWithWeekday')
const user = ref(
    [
        {
            avatar: user_data.value.user_metadata.avatar_url,
            name: user_data.value.user_metadata.name,
            title: 'Membre gratuit',
            excerpt: 'Inscription : 27/01/2023',
        },
        {
            color: 'teal',
            icon: 'mdi-account-multiple',
            name: 'MES ACTIVITES',
            new: 2,
            excerpt: 'Débuté : 27/01/2023',
            total: 3,
            title: 'Complétés',
        },
        {
            color: 'teal',
            icon: 'mdi-tag',
            name: 'PROGRESSION',
            new: 2,
            total: 4,
            title: 'Nouveaux cours disponibles',
            exceprt: 'New deals available, Join Today',
        },
    ])
definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>