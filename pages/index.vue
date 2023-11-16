<template>
  <div>
    <div class="main-wrap">

      <div v-if="!user">
        <Header />
      </div>
      <div v-else>
        <header-dashboard></header-dashboard>
      </div>
      <div class="container-wrap scroll-nav-content">
        <section id="home">
          <banner />
        </section>
        <section id="feature" class="space-top">
          <feature />
        </section>
        <NuxtErrorBoundary>
          <section id="popular" class="space-top-short">
            <popular-course :courses="courses" />
          </section>
          <template #error="{ error }">
            <div>
              <v-skeleton-loader class="mx-auto border" type="image, heading"></v-skeleton-loader>
            </div>
          </template>
        </NuxtErrorBoundary>
        <section id="explore">
          <explore />
        </section>
        <div id="about">
          <about />
        </div>
        <section id="testimonials" class="space-top">
          <testimonials />
        </section>
        <section id="blog" class="space-top-short">
          <blog />
        </section>
        <section id="subscribe" class="space-top-short">
          <subscribe-form />
        </section>
        <Footer />
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}

.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;

  .v-theme--dark & {
    background-color: $dark-background-default;
  }

  .v-theme--light & {
    background-color: $light-background-paper;
  }
}

.space-bottom {
  padding-bottom: section-margin($spacing1);

  @include breakpoints-down(md) {
    padding-bottom: section-margin(6px);
  }
}

.space-bottom-short {
  padding-bottom: section-margin($spacing1 * 0.5);
}

.space-top {
  padding-top: section-margin($spacing1);

  @include breakpoints-down(md) {
    padding-top: section-margin(6px);
  }

  @include breakpoints-down(xs) {
    padding-top: section-margin(3px);
  }
}

.space-top-short {
  padding-top: section-margin($spacing1 * 0.5);
}

.container-wrap {
  >section {
    position: relative;
  }
}
</style>

<script setup>
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import brand from '@/assets/text/brand';
const router = useRouter();
const storedLang = useCookie('i18n_redirected');
const i18nLocale = useI18n();
const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
const user = useSupabaseUser()
console.log(user)
onMounted(async () => {
  await useCourses()
  const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
  if (storedLang.value && rootUrl) {
    router.push({ path: `/${storedLang.value}` });
  }
});
const courses = await useCourses()


useHead({
  title: brand.education.name + '-' + brand.education.desc,
})
computed({
  isTablet() {
    const mdDown = this.$vuetify.display.mdAndDown;
    return mdDown;
  }
})


</script>
