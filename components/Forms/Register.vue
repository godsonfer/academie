<template>
  <AuthFrame :title="$t('common.register_title')" :subtitle="$t('common.register_subtitle')">
    <div>
      <div class="head">
        <title-main :head="$t('common.register')" align="left" color="secondary" />
        <v-btn :to="routerLink.education.login" class="button-link" variant="text" size="small">
          <v-icon class="icon signArrow">
            mdi-arrow-right
          </v-icon>
          {{ $t('common.register_already') }}
        </v-btn>
      </div>
      <!-- <social-auth /> -->
      <v-spacer class="mt-4">
      </v-spacer>
      <div class="spacer">
        <p>
          Les inscriptions à la plateforme ne sont pas encore prêtes
        </p>
      </div>
      <!-- <div class="separator">
        <p>
          {{ $t('common.register_or') }}
        </p>
      </div>
      <v-form ref="form" v-model="valid">
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="name" :label="$t('common.register_name')" :rules="requiredRules" color="secondary"
              class="input" name="name" filled required />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field v-model="email" :label="$t('common.register_email')" :rules="emailRules" color="secondary"
              class="input" name="email" filled required />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field v-model="password" :label="$t('common.register_password')" :rules="requiredRules"
              color="secondary" type="password" class="input" name="email" filled required />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field v-model="confirmPassword" :label="$t('common.register_confirm')" :rules="passwordRules"
              color="secondary" type="password" class="input" name="confirm" filled required />
          </v-col>
        </v-row>
        <div class="btn-area">
          <div class="form-helper me-8 mb-5 mb-sm-0">
            <div class="form-control-label">
              <v-checkbox v-model="checkbox" :label="$t('common.form_terms')" :rules="requiredRules"
                :hide-details="hideDetail" color="secondary" required />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn class="flex" size="large" color="secondary" @click="handleSubmit" :loading="loading">
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
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

<script>
import routerLink from '@/assets/text/link';
import Title from '../Title';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
const supabase = useSupabaseClient()

export default {
  components: {
    SocialAuth,
    'title-main': Title,
    AuthFrame,
  },
  data() {
    return {
      routerLink,
      valid: true,
      loading: false,
      err: "",
      email: '',
      name: '',
      hideDetail: true,
      emailRules: [
        v => !!v || 'Entrez votre adresse Email',
        v => /.+@.+\..+/.test(v) || 'Entrez une adresse Email valide',
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'Veuillez accepter nos politiques'],
      passwordRules: [
        v => !!v || 'Confirmer votre mot de passe',
        v => v === this.password || 'Les deux mot de passes ne sont pas identiques',
      ],
      checkbox: false,
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.loading = true
        let { data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
          name: this.name,
        })
        console.log(data, error)
        if (error) this.err = error
        this.hideDetail = true;
      } else {
        this.hideDetail = false;
      }
      this.loading = false;
    },
  },
};
</script>
