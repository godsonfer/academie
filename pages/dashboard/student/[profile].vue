
<template>
    <div>
        <div>
            <HeaderDashboard></HeaderDashboard>
        </div>
        <v-main>
            <v-container fluid>
                <v-layout row wrap>
                    <v-sheet rounded="0" width="100%">
                        <v-tabs v-model="tab" bg-color="" align-tabs="end">
                            <v-tab value="general">Général</v-tab>
                            <v-tab value="subscription">Abonnement</v-tab>
                        </v-tabs>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="general">
                                    <v-row justify="center">
                                        <v-col cols="12" sm="10" md="8" lg="6">
                                            <v-card ref="form" rounded="0" title="Informations Générale">
                                                <v-card-text>
                                                    <v-text-field ref="name" v-model="name"
                                                        :rules="[() => !!name || 'Votre nom complet est obligatoire']"
                                                        :error-messages="errorMessages" label="Nom complet"
                                                        placeholder="John Doe" required>
                                                    </v-text-field>

                                                    <v-text-field ref="address" v-model="address" :rules="[
                                                        () => !!address || 'Votre adresse est obligatoire']"
                                                        label="Adresse" placeholder="Snowy Rock Pl" counter="25" required>
                                                    </v-text-field>
                                                    <v-text-field ref="city" v-model="city"
                                                        :rules="[() => !!city || 'Veuillez fournir le nom de votre ville']"
                                                        label="Ville" placeholder="El Paso" required>
                                                    </v-text-field>
                                                    <v-text-field ref="Etat" v-model="state"
                                                        :rules="[() => !!state || 'Veuillez fournir votre état']"
                                                        label="Etat/Province/Region" required placeholder="TX">
                                                    </v-text-field>
                                                    <v-text-field ref="zip" v-model="zip"
                                                        :rules="[() => !!zip || 'Veuillez fournir votre code zip']"
                                                        label="ZIP / Postal Code" required placeholder="79938">
                                                    </v-text-field>
                                                    <v-autocomplete ref="Pays" v-model="country"
                                                        :rules="[() => !!country || 'Dans quel pays résidez vous ?']"
                                                        :items="countries" label="Country" placeholder="Select..."
                                                        required></v-autocomplete>
                                                </v-card-text>
                                                <v-checkbox v-model="checkbox"
                                                    :rules="[v => !!v || 'Vous devez acceptez les condition']"
                                                    label="J\'accepte les conditions d\'utilisation du programme LETA ACADEMIE"
                                                    required></v-checkbox>
                                                <v-card-actions>
                                                    <v-btn color="light-blue-accent-3" variant="outlined"
                                                        prepend-icon="mdi-content-save-check" @click="submit">
                                                        Sauvegarder
                                                    </v-btn>
                                                </v-card-actions>
                                                <v-divider class="mt-12"></v-divider>

                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col cols="12" sm="10" md="8" lg="6">
                                            <v-card ref="form" rounded="0" title="Sécurité">
                                                <v-card-text>
                                                    <v-text-field density="compact" type="password" ref="password"
                                                        v-model="password"
                                                        :rules="[() => !!password || 'Entrez un mot de passe correct']"
                                                        :error-messages="errorMessages" label="Nouveau mot de passe *"
                                                        placeholder="John Doe" required>
                                                    </v-text-field>

                                                    <v-text-field density="compact" type="password" ref="password"
                                                        v-model="confirmP" :rules="[
                                                            () => !!confirmP || 'Confirmez le mot de passe']"
                                                        label="Confirmation *" placeholder="Snowy Rock Pl" counter="25"
                                                        required>
                                                    </v-text-field>

                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-btn color="green-accent-4" variant="outlined"
                                                        prepend-icon="mdi-pencil" @click="submit">
                                                        Modifier
                                                    </v-btn>
                                                </v-card-actions>
                                                <v-divider class="mt-12"></v-divider>

                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col cols="12" sm="10" md="8" lg="6">
                                            <v-card class=" mb-12 justify-center" color="red" variant="tonal"
                                                title="Suppression">
                                                <v-card-text class="text-medium-emphasis text-caption">
                                                    Supprimer votre compte LETA, et toutes les données associées. La
                                                    suppression est irréversible.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-btn block color="red" width="10px" size="large" variant="outlined">
                                                        Supprimer mon compte
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>


                                        </v-col>
                                    </v-row>
                                </v-window-item>

                                <v-window-item value="subscription">
                                    <PlansPlan></PlansPlan>
                                </v-window-item>
                            </v-window>
                        </v-card-text>
                    </v-sheet>
                </v-layout>
            </v-container>
        </v-main>
    </div>
</template>
<script setup>
const countries = useCountry()
const tab = ref(null)

definePageMeta({
    middleware: [
        'auth-user',
    ],
});
</script>