<template>
    <v-container d-flex>
        <v-row justify="end" style="margin-right: 1%; margin-top:1%">
            <v-menu rounded>
                <template v-slot:activator="{ props }">

                    <v-btn icon v-bind="props">
                        <UserAvatar :img="user.user_metadata.avatar_url"></UserAvatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-text>
                        <div class="mx-auto text-center">
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <!-- <v-divider class="my-3"></v-divider> -->
                            <!-- <v-btn rounded variant="text">
                                Profile
                            </v-btn> -->
                            <v-divider class="my-3"></v-divider>
                            <v-btn rounded :prepend-icon="isDark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny'"
                                variant="text" @click="switchDark()">
                                {{ isDark ? 'Claire' : 'Sombre' }}
                                <v-spacer></v-spacer>
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                        </div>
                    </v-card-text>
                </v-card>
            </v-menu>
        </v-row>
    </v-container>
</template>
<script setup>
import { toggleDark, setRtl } from '@/composables/uiTheme';
const isDark = ref(false);

function switchDark() {
    isDark.value = !isDark.value;
    toggleDark();
}
const user = (useSupabaseUser())

</script>