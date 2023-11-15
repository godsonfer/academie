<template>
    <div>
        <v-form @submit.prevent ignorableWatch>
            <v-text-field v-model="Rechercher" :rules="rules" label="Rechercher"
                prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-form>
    </div>
</template>

<script>
export default {
    data: () => ({
        firstName: '',
        rules: [
            value => {
                if (value) return true
                return 'Entrez votre recherche'
            },
        ],
    }),
}
</script>