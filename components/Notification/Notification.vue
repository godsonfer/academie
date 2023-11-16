<template>
  <v-snackbar v-model="snackbar" :timeout="60000" class="notification smart">
    <div class="d-sm-flex align-center me-2">
      <div class="action me-4">
        <div class="text-h5">BLACK FRIDAY</div>
        <v-alert type="success" variant="outlined">
          Profitez de <h1>-70 </h1> de réduction sur nos formations
        </v-alert>

      </div>
      <v-btn color="secondary" class="button" @click="snackbar = false">
        <a href="https://wa.me/message/7IZ5EBC2A7AVJ1" target="_blank">Profiter</a>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true,
    };
  },
};
</script>
