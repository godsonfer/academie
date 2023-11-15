<template>
    <div>
        <v-app-bar color="blue-grey-darken-3" scroll-behavior="elevate">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <NuxtLink to="/">
                <img src="~/assets/images/education-logo-2.png" alt="logo" style="height: 60px; width:max-content" />
            </NuxtLink>
            <v-toolbar-title>
            </v-toolbar-title>
            <!-- <v-btn variant="text" to="/course">COURS</v-btn>
            <v-btn variant="text" color="">FORMATEUR</v-btn> -->
            <div v-if="!mobile">
                <Drawer></Drawer>
            </div>

        </v-app-bar>
        <!-- sidebar -->
        <div>
            <v-navigation-drawer v-model="drawer" location="left" expand-on-hover :rail="rail"
                :permanent="`${mobile ? false : true}`" temporary="`${!mobile ? false : true}`">
                <v-list v-if="!mobile">
                    <v-list-item :prepend-avatar="user.user_metadata.avatar_url" subtitle="Leçon 2 Chapitre 3">
                        <v-divider></v-divider>
                        <!-- progress -->
                        <CourseProgress model-value=20></CourseProgress>
                        <v-spacer></v-spacer>
                        <v-btn color="success" variant="text">Poursuivre</v-btn>
                        <template v-slot:append>
                            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                        </template>
                    </v-list-item>
                </v-list>
                <v-list v-else>
                    <v-list-item :prepend-avatar="user.user_metadata.avatar_url" :title="user.user_metadata.name"
                        :subtitle="user.user_metadata.email">
                        <v-divider></v-divider>
                        <!-- progress -->
                        <v-btn color="success" variant="text">Profile</v-btn>
                        <v-btn color="error" :prepend-icon="isDark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny'"
                            variant="text" @click="switchDark()"></v-btn>
                        <v-spacer></v-spacer>
                    </v-list-item>
                </v-list>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <v-list nav>
                    <NuxtLink variant="grey-lighten-5" style="text-decoration: none;" to="/dashboard">
                        <v-list-item prepend-icon="mdi-home-account" value="dahbbord">
                            <v-btn block stacked variant="plain">
                                Dashboard
                            </v-btn>
                        </v-list-item>
                    </NuxtLink>
                    <NuxtLink variant="grey-lighten-5" style="text-decoration: none;" to="/course">
                        <v-list-item prepend-icon="mdi-video-box" value="course">
                            <v-btn block stacked variant="text">Mes Cours
                            </v-btn>
                        </v-list-item>
                    </NuxtLink>

                    <NuxtLink variant="grey-lighten-5" style="text-decoration: none;" to="/course">
                        <v-list-item prepend-icon="mdi-human-male-board" value="course">
                            <v-btn block stacked variant="text">Mon parcours
                            </v-btn>
                        </v-list-item>
                    </NuxtLink>
                    <!-- <NuxtLink variant="grey-lighten-5" style="text-decoration: none;"
                        :to="`/dashboard/student/${user.email}`">
                        <v-list-item prepend-icon="mdi-monitor-dashboard" value="profile">
                            <v-btn block stacked="">
                                Profile
                            </v-btn>
                        </v-list-item>
                    </NuxtLink> -->

                    <!-- <v-list-item prepend-icon="mdi-certificate" title="Certification" value="certificat"></v-list-item> -->
                    <!-- <v-list-item prepend-icon="mdi-forum-outline" title="Communauté" value="community"></v-list-item> -->
                    <v-divider> </v-divider>
                    <!-- <v-list-item prepend-icon="mdi-bell-outline" title="Notifications" value="news"></v-list-item> -->
                    <!-- <v-list-item prepend-icon="mdi-cart-outline" title="Panier" value="cart"></v-list-item> -->


                    <v-divider> </v-divider>
                    <NuxtLink variant="grey-lighten-5" style="text-decoration: none;" to="/dashboard/admin">
                        <v-list-item prepend-icon="mdi-shield-crown" value="plan">
                            <v-btn block stacked variant="plain">
                                Administration
                            </v-btn>
                        </v-list-item>
                    </NuxtLink>

                </v-list>
                <template v-slot:append>

                    <div class="pa-2">
                        <!-- <NuxtLink variant="grey-lighten-5" style="text-decoration: none;"
                            :to="`/dashboard/student/subscription`">
                            <v-list-item prepend-icon="mdi-lightning-bolt-circle" value="plan">
                                <v-btn block>
                                    Abonnement
                                </v-btn>
                            </v-list-item>
                        </NuxtLink> -->
                        <NuxtLink variant="grey-lighten-5" style="text-decoration: none;" @click="logout">
                            <v-list-item prepend-icon="mdi-logout" value="logout">
                                <v-btn block>
                                    Deconnexion
                                </v-btn>
                            </v-list-item>
                        </NuxtLink>

                    </div>
                </template>
            </v-navigation-drawer>
        </div>
    </div>
</template>
<script setup >
import { toggleDark, setRtl } from '@/composables/uiTheme';
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const isDark = ref(false);
const drawer = ref(false);
const user = useSupabaseUser()
const { query } = useRoute()
const { auth } = useSupabaseClient();
const rail = ref(true)
const switchDark = () => {
    isDark.value = !isDark.value;
    toggleDark();
}

const logout = async () => {
    const { error } = await auth.signOut();
    if (error) {
        return;
    }
    try {
        // await $fetch('/api/_supabase/session', {
        //     method: 'POST',
        //     body: { event: 'SIGNED_OUT', session: null },
        // });
        useSessionStorage('sb-refresh-token', null)
        useSessionStorage('sb-provider-token', null)
        useSessionStorage('sb-access-tokenn', null)
        user.value = null;
    } catch (e) {
        console.error(error);
    }
    await navigateTo('/login');
}

</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
    color: rgb(247, 6, 175);
}
</style>