<template>
    <div class="page-container">
        <div>
            <ChatPost class="scrollable-content"></ChatPost> <!-- Autres éléments de la page qui sont scrollables -->
        </div>
        <v-card>
            <div class="fixed-content">
                <v-row>
                    <v-col cols="9" md="9">
                        <v-textarea rounded="xl" label="Commentaire" rows="2"></v-textarea>
                        <v-file-input label="Analyse" accept="image/png, image/jpeg, image/bmp" counter
                            show-size></v-file-input>
                    </v-col>
                    <v-col cols="3" md="3">
                        <v-btn variant="text" border rounded="xl" prepend-icon="mdi-send"></v-btn>
                    </v-col>
                </v-row>

            </div>
        </v-card>
    </div>
</template>
  
<style>
.page-container {

    height: 80vh;
    /* Remplit toute la hauteur de l'écran */
    position: relative;
}

.scrollable-content {
    flex: 1;
    /* Le contenu scrollable prend tout l'espace disponible */
    overflow-y: auto;
    /* Activation de la barre de défilement verticale si nécessaire */
}

.fixed-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 2px;
    /* Ajoutez des marges ou un rembourrage au besoin */
}
</style>
  