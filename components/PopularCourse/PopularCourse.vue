<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main :head="$t('educationLanding.popular_title')" :desc="$t('educationLanding.popular_desc')"
          :align="isMobile ? 'center' : 'left'" dark color="secondary" />
      </div>
    </v-container>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide ref="splide" :options="slickOptions">
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide v-for="(item, index) in courses" :key="index">
            <div class="item">
              <general-card :img="item.cover" :title="item.title" :desc="item.desc" :price="item.price" :rating="5"
                :link="`subscription/${item.reference}`" />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="props item-props-last">
              <div />
            </div>
          </splide-slide>
        </splide>
      </div>
      <v-btn icon fab class="nav prev" @click="prev()">
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn icon fab class="nav next" @click="next()">
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './popular-course-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import GeneralCard from '../Cards/General';
import Title from '../Title';
import DotParallax from '../Parallax/Dot';



export default {
  components: {
    'title-main': Title,
    DotParallax,
    GeneralCard,
    Splide,
    SplideSlide,
  },
  props: {
    courses: {
      type: [],
      required: true
    }
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      slickOptions: {
        pagination: false,
        direction: 'ltr',
        speed: 1000,
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoWidth: true,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 4,
          },
          800: {
            perPage: 3,
          },
          600: {
            perPage: 2,
          },
        },
      },
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 200);
  },
  methods: {
    next() {
      this.$refs.splide.go('>');
    },
    prev() {
      this.$refs.splide.go('<');
    },
  },
};
</script>
