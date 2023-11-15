<template>
  <div class="socmed-side-login">
    <!-- <v-btn class="navi-btn" large @click="login_facebook">
      <i class="ion-logo-facebook" />
      Facebook
    </v-btn> -->

    <v-btn class="red-btn" large @click="login_google">
      <i class="ion-logo-google" large />
      Google
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>
<script setup lang="ts">
const login_google = async () => {
  // const redirectTo = `${window.location.origin}${query.redirectTo}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    // options: { redirectTo }
  })
  if (error) {
    console.log(error)
  }
}
const { query } = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const login_facebook = async () => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: { redirectTo }
  })
  if (error) {
    console.log(error)
  }
}


watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true
    })
  }
})
</script>