<template>
    <div>
        <v-row>
            <v-col sm="4" md="4">
                <v-sheet border="md" class="pa-6 text-white mx-3" color="#141518" max-width="400">
                    <h4 class="text-h5 font-weight-bold mb-4">Paiement unique</h4>
                    <p class="mb-8">
                        Acheter uniquement cette formation
                        <v-divider></v-divider>

                    </p>
                    <div class="text mb-4">
                        <h1>{{ course.price }}$</h1>
                        <h6> Sans aucun engagement</h6>
                    </div>
                    <v-row>
                        <v-col>
                            <ul>
                                <li>
                                    L'accès à toutes les formations de la plateforme ainsi
                                    qu'aux formations à venir
                                </li>
                                <li>
                                    Du nouveau contenu toutes les semaines !
                                </li>
                                <li>
                                    Un certificat de réussite par formation
                                </li>
                                <li>
                                    Plusieurs challenges guidés et corrigés
                                </li>
                                <li>
                                    Une aide en ligne par des experts
                                </li>
                                <li>
                                    Un profil comportant votre progression et un portfolio
                                    Dawinx
                                </li>
                                <li>
                                    Un chat communautaire avec tous nos étudiants
                                </li>
                            </ul>
                        </v-col>
                    </v-row>

                    <v-btn block class="text-none text-black" color="red-accent-2" size="x-large" variant="outlined">
                        Effectuer le paiement
                    </v-btn>
                </v-sheet>
            </v-col>
            <v-col sm="4" md="4">
                <v-sheet border="md" class="pa-6 text-white mx-3" color="#141518" max-width="400">
                    <h4 class="text-h5 font-weight-bold mb-4">Abonnement Mensuel</h4>

                    <p class="mb-8">
                        7 jours d'essaie gratuit sur tous les cours
                        <v-divider></v-divider>

                    </p>
                    <div class="text mb-4">
                        <h1>39.99$</h1>
                        <h6> / Par mois (Sans engagement)</h6>
                    </div>
                    <v-row>
                        <v-col>
                            <ul>
                                <li>
                                    L'accès à toutes les formations de la plateforme ainsi
                                    qu'aux formations à venir
                                </li>
                                <li>
                                    Du nouveau contenu toutes les semaines !
                                </li>
                                <li>
                                    Un certificat de réussite par formation
                                </li>
                                <li>
                                    Plusieurs challenges guidés et corrigés
                                </li>
                                <li>
                                    Une aide en ligne par des experts
                                </li>
                                <li>
                                    Un profil comportant votre progression et un portfolio
                                    Dawinx
                                </li>
                                <li>
                                    Un chat communautaire avec tous nos étudiants
                                </li>
                                <li>
                                    Un coaching mensuel
                                </li>
                            </ul>
                        </v-col>
                    </v-row>

                    <v-btn block class="text-none text-black" color="red-accent-2" size="x-large" variant="outlined">
                        Démarrer mon Essaie
                    </v-btn>
                </v-sheet>
            </v-col> <v-col sm="4" md="4">
                <v-sheet border="md" class="pa-6 text-white mx-3" color="#141518" max-width="400">
                    <h4 class="text-h5 font-weight-bold mb-4">programme Parcours</h4>

                    <p class="mb-8">
                        7 jours d'essaie gratuit
                        <v-divider></v-divider>

                    </p>
                    <div class="text mb-4">
                        <h1>349.99$</h1>
                        <h6> /Paiement unique </h6>
                    </div>
                    <v-row>
                        <v-col>
                            <ul>
                                <li>
                                    L'accès à toutes les formations de la plateforme ainsi
                                    qu'aux formations à venir
                                </li>
                                <li>
                                    Du nouveau contenu toutes les semaines !
                                </li>
                                <li>
                                    Un certificat de réussite par formation
                                </li>
                                <li>
                                    Plusieurs challenges guidés et corrigés
                                </li>
                                <li>
                                    Une aide en ligne par des experts
                                </li>
                                <li>
                                    Un profil comportant votre progression et un portfolio
                                    Dawinx
                                </li>
                                <li>
                                    Un chat communautaire avec tous nos étudiants
                                </li>
                                <li>
                                    Un Coaching personnalisé
                                </li>
                                <li>
                                    Un suivie régulier pendant un an
                                </li>
                                <li>
                                    Une assistance à l'investissement
                                </li>

                            </ul>
                        </v-col>
                    </v-row>

                    <v-btn block class="text-none text-black" color="red-accent-2" size="x-large" variant="outlined">
                        Démarrer mon Essaie
                    </v-btn>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
defineProps({
    course: {
        type: Object,
        required: true,
    }
})
</script>