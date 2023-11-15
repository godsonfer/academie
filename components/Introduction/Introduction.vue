<template>
    <v-sheet elevation="1">
        <v-img height="150" src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" cover class="text-white">
        </v-img>
        <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
                Vidéo de Présentation
            </div>
            <v-list density="compact">
                <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-sheet>
</template>
<script>
export default {
    data: () => ({
        items: [
            { text: 'Vidéo du cours', icon: 'mdi-clock' },
            { text: 'Documentation ', icon: 'mdi-account' },
            { text: 'Validation des quizz', icon: 'mdi-calendar-question-outline' },
            { text: 'Live Trading', icon: 'mdi-message-video' },
            { text: 'Mentorat Personnalisé', icon: 'mdi-laptop-account' },
            { text: 'Chat communautaire', icon: 'mdi-chat' },

        ],

    }),
}
</script>