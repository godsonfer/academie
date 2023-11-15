<template>
  <v-snackbar v-model="snackbar" :timeout="60000" class="notification smart">
    <div class="d-sm-flex align-center me-2">
      <div class="action me-4">
        <h1 class="text-h5">PROMOTION</h1>
      </div>
      <v-btn color="secondary" class="button" @click="snackbar = false">
        {{ $t('common.accept') }}
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
