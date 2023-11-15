<v-navigation-drawer v-model="drawer" location="left" expand-on-hover rail>
    <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="Leçon 2 Chapitre 3">
            <v-divider></v-divider>
            <v-progress-linear model-value="20"></v-progress-linear>
            <v-spacer></v-spacer>
            <v-btn color="success" variant="text">Poursuivre</v-btn>
        </v-list-item>
    </v-list>
    <v-spacer></v-spacer>
    <v-divider></v-divider>

    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-bell-outline" title="Notifications" value="news"></v-list-item>
        <v-list-item prepend-icon="mdi-chat" title="Communauté" value="community"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Tableau de bord" value="dashbord"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Certification" value="certificat"></v-list-item>
    </v-list>
</v-navigation-drawer>