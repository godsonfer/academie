<template>
  <div class="root">
    <v-dialog v-model="dialog" max-width="690">
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="text-h6 title-main">
            {{ $t('educationLanding.blog_video') }}
          </h2>
          <v-btn variant="flat" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt" class="text-center mx-auto py-4">
          <YouTube ref="youtube" :src="videoId" :vars="playerVars" :width="640" :height="360" class="youtube"
            @ready="onReady" />
        </div>
      </v-card>
    </v-dialog>
    <hidden point="smDown">
      <div class="deco" />
    </hidden>
    <v-container class="fixed-width">
      <div class="pa-md-8 pa-2">
        <title-main :head="$t('educationLanding.blog_title')" :desc="$t('educationLanding.blog_desc')"
          :align="isMobile ? 'center' : 'left'" color="secondary" />
      </div>
      <v-row :class="[isDesktop ? 'row-reverse' : '']">
        <v-col class="pa-md-8" md="6" cols="12">
          <div class="video-wrap">
            <div v-if="loaded" class="video-carousel">
              <splide ref="slick" :options="slickOptions">
                <splide-slide>
                  <v-card class="item">
                    <img :src="imgAPI.education[14]" alt="cover">
                    <v-btn icon class="play-btn" @click="handleVideoOpen('HBeJA3q19mk')">
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </v-card>
                </splide-slide>
                <splide-slide>
                  <v-card class="item">
                    <img :src="imgAPI.education[15]" alt="cover">
                    <v-btn icon class="play-btn" @click="handleVideoOpen('6p0VM-yUpGk')">
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </v-card>
                </splide-slide>
                <splide-slide>
                  <v-card class="item">
                    <img :src="imgAPI.education[16]" alt="cover">
                    <v-btn icon class="play-btn" @click="handleVideoOpen('HBeJA3q19mk')">
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </v-card>
                </splide-slide>
                <splide-slide>
                  <v-card class="item">
                    <img :src="imgAPI.education[17]" alt="cover">
                    <v-btn icon class="play-btn" @click="handleVideoOpen('6p0VM-yUpGk')">
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                  </v-card>
                </splide-slide>
              </splide>
            </div>
          </div>
        </v-col>
        <v-col class="pa-md-10 pa-4" md="6" cols="12">
          <div v-if="loaded" class="blog-list">
            <div>
              <div v-for="(item, index) in blogData" :key="index">
                <div :data-aos-delay="index * 200" data-aos="fade-left" data-aos-offset="200" data-aos-duration="600">
                  <blog-card :category="item.category" :title="item.title" :date="item.date" />
                </div>
              </div>

            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import youtube from '@/config/youtube';
import Title from '../Title';
import BlogCard from '../Cards/Blog';
import Hidden from '../Hidden';

const blogData = [
  {
    title: 'Première Edition du mentorat LETA MENTORSHIP  Edition 1',
    category: 'ANALYSE TECHNIQUE',
    date: 'Sept 20 2023',
  },

  // {
  //   title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
  //   category: 'ANALYSE TECHNIQUE',
  //   date: 'Feb 08 2021',
  // },
];

export default {
  components: {
    'title-main': Title,
    Hidden,
    BlogCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      dialog: false,
      imgAPI,
      yt: youtube,
      loaded: false,
      videoId: '6p0VM-yUp5k',
      blogData,
      slickOptions: {
        pagination: true,
        type: 'fade',
        autoplay: true,
        interval: 5000,
        speed: 750,
        arrows: false,
        pauseOnHover: true,
        direction: 'ltr',
        reducedMotion: {
          autoplay: true,
          speed: 750,
          rewindSpeed: 1000,
        },
      },
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8011',
      },
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    handleVideoOpen(id) {
      this.videoId = id;
      if (this.yt.use) {
        this.dialog = true;
      }
    },
    onReady() {
      this.$refs.youtube.playVideo();
    },
    handleVideoClose() {
      this.dialog = false;
      this.$refs.youtube.pauseVideo();
    },
  },
};
</script>
