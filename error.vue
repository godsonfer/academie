<template>
  <theme-wrapper theme="smart">
    <v-app>
      <div>
        <main-header invert />
        <Error :error-code="errObj.statusCode" :text="$t('common.404')" />

        <main-footer />
      </div>
    </v-app>
  </theme-wrapper>
</template>

<script>
import brand from './assets/text/brand';
import ThemeWrapper from './components/ThemeWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    ThemeWrapper,
    Error,
  },
  setup() {
    const error = useError();
    const errObj = error._object.error;
    useHead({
      title: errObj.statusCode === 404
        ? brand.education.name + ' - Pas non trouvée'
        : brand.education.name + ' - Une erreur est survenue',
    });

    return {
      errObj,
    };
  },
});
</script>
