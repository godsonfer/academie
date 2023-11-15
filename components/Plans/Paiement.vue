<template>
    <v-container fluid>
        <v-sheet rounded="0" width="100%">
            <v-tabs v-model="tab" bg-color="" align-tabs="start">
                <v-tab value="general">Panier </v-tab>
            </v-tabs>

            <v-divider></v-divider>
            <v-card-text>
                <v-row justify="center">
                    <v-col>
                        <span style="color:cyan" class="mdi mdi-information-variant">Plusieurs étudiants
                            choisissent le parcours</span>
                        <v-card ref="form" rounded="0" title="Paiement">
                            <v-card-text>
                                <v-row>
                                    <v-col sm="8" md="8" cols="12">
                                        <v-banner color="pink-darken-1" icon="mdi-receipt-text-clock-outline" lines="two">
                                            <template v-slot:prepend>
                                                <v-avatar></v-avatar>
                                            </template>
                                            <v-banner-text>
                                                Vous ne serez pas facturé avant la fin des 7 jours
                                                d'essai pour les abonnement et parcours
                                            </v-banner-text>
                                        </v-banner>
                                        <v-banner color="pink-darken-1" icon="mdi-receipt-text-remove" lines="two">
                                            <template v-slot:prepend>
                                                <v-avatar></v-avatar>
                                            </template>
                                            <v-banner-text>
                                                Vous pouvez annuler votre période d'essai à tout moment
                                                en un
                                                clic.
                                            </v-banner-text>
                                        </v-banner>
                                        <v-banner color="pink-darken-1" icon="mdi-key" lines="two">
                                            <template v-slot:prepend>
                                                <v-avatar></v-avatar>
                                            </template>
                                            <v-banner-text>
                                                Cet abonnement donne accès à toutes les formations de la
                                                plateforme.
                                            </v-banner-text>
                                        </v-banner>
                                        <!-- Card pour stripe -->
                                    </v-col>
                                    <v-col sm="4" md="4" cols="12">
                                        <v-card color="#385F73" theme="dark" rounded="1" title="Votre commande">
                                            <v-card-subtitle class="mt-3">
                                                Achat : <b>{{ course.title }}</b>
                                            </v-card-subtitle>
                                            <v-divider></v-divider>
                                            <v-card-subtitle class="mt-3">
                                                Prix TTC : {{ course.price }} $
                                            </v-card-subtitle>
                                            <v-divider></v-divider>
                                            <v-divider></v-divider>
                                            <v-card-subtitle class="mt-3">
                                                TVA : {{ (course.price * 0.18).toFixed(3) }} $
                                            </v-card-subtitle>
                                            <v-divider></v-divider>
                                            <v-card-subtitle class="mt-3">
                                                Total TTC : {{ course.price * 0.18 + course.price }} $
                                            </v-card-subtitle>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <span>
                                * La période d'essai donne accès à 10 leçons ou au premier
                                chapitre</span>
                            <v-card-actions>
                                <v-row>
                                    <v-col sm="3" md="3">
                                        <v-btn color="light-blue-accent-3" variant="tonal" prepend-icon="mdi-currency-btc"
                                            @click="submit">
                                            Crypto
                                        </v-btn>
                                    </v-col>
                                    <v-col sm="3" md="3">
                                        <v-btn color="light-blue-accent-3" variant="tonal" prepend-icon="mdi-wan"
                                            @click="submit">
                                            Mobile Money (WA)
                                        </v-btn>
                                    </v-col>
                                    <v-col sm="3" md="3">
                                        <v-btn color="light-blue" variant="outlined" prepend-icon="mdi-currency-rub"
                                            @click="submit">
                                            Paypal
                                        </v-btn>
                                    </v-col>
                                    <v-col sm="3" md="3">
                                        <v-btn color="light-blue-accent-3" variant="outlined"
                                            prepend-icon="mdi-credit-card-outline   " @click="submit">
                                            Carte bancaire
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                            <v-divider class="mt-12"></v-divider>
                        </v-card>
                    </v-col>
                </v-row>

            </v-card-text>
        </v-sheet>
    </v-container>
</template>

<script setup lang="ts">
const tab = ref(null)
defineProps({
    course: {
        type: Object,
        required: true,
    }
})
</script>