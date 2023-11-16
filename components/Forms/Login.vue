<template>
  <AuthFrame :title="$t('common.login_title')" :subtitle="$t('common.login_subtitle')">
    <div>
      <div class="head">
        <title-main :head="$t('common.login')" align="left" color="secondary" />
        <v-btn :to="routerLink.education.register" class="button-link" variant="text" size="small">
          <v-icon class="icon signArrow">
            mdi-arrow-right
          </v-icon>
          {{ $t('common.login_create') }}
        </v-btn>
      </div>
      <!-- <social-auth /> -->
      <v-spacer class="mt-4">
      </v-spacer>
      <div class="spacer">
        <p>
          Les connexions à la plateforme ne sont pas encore prêtes
        </p>
      </div>
      <!-- <v-form ref="form" v-model="valid">
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="email" :label="$t('common.login_email')" :rules="emailRules" color="secondary"
              class="input" name="email" filled required />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="password" :label="$t('common.login_password')" :rules="requiredRules" color="secondary"
              type="password" class="input" name="email" filled required />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox v-model="checkbox" :label="$t('common.login_remember')" color="secondary" />
          </div>
          <v-btn size="small" class="button-link" variant="text" href="#">
            {{ $t('common.login_forgot') }}
          </v-btn>
        </div>
        <div class="btn-area mt-10">
          <v-btn size="large" block color="secondary" @click="handleSubmit" :loading="loading">
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form> -->
      <!-- <v-spacer>
      </v-spacer>
      <div class="mt-2">
        <v-alert type="error" variant="outlined" v-show="err" closable>
          {{ err }}
        </v-alert>
      </div> -->
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script setup lang="ts" >
import routerLink from '@/assets/text/link';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
// const routerLink = ref();
const { query } = useRoute()
const supabase = useSupabaseClient()
const loading = ref(false)

const valid = ref(true)
const email = ref('')
const emailRules = [
  v => !!v || 'Entrez votre adresse email',
  v => /.+@.+\..+/.test(v) || 'L\'adresse email doit être valide',
];
const password = ref('');
const requiredRules = [v => !!v || 'Entrez votre mot de passe']
const checkbox = ref(false)

computed: ({
  isMobile() {
    const smDown = this.$vuetify.display.smAndDown;
    return smDown;
  },
})
const err = ref('')
async function handleSubmit() {
  loading.value = true

  let { data, error } = await supabase.auth.signInWithPassword({
    email: 'someone@email.com',
    password: 'dzTbNHrPhhAshQIPillK'
  })
  if (error) err.value = error.message
  loading.value = false

}
</script>
