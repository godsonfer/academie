<template>
  <div>
    <v-navigation-drawer v-if="isMobile" v-model="openDrawer" fixed temporary class="mobile-nav">
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar id="header" v-scroll="handleScroll" :class="{ fixed: fixed, 'open-drawer': openDrawer }" class="header"
      app>
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="header-content">
          <nav :class="{ invert: invert }" class="nav-logo">
            <v-btn v-if="isMobile" :class="{ 'is-active': openDrawer }" class="hamburger hamburger--spin mobile-menu" text
              icon @click.stop="handleToggleOpen">
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <nuxt-link v-if="invert" :to="link.education.home">
                <img :src="logo" alt="logo">
                <span>
                  {{ brand.education.name }}
                </span>
              </nuxt-link>
              <span v-if="!invert && loaded">
                <a v-smooth-scroll="{ offset: 100 }" to="#home" class="anchor-link scrollactive-item">
                  <img :src="logo" alt="logo">
                  <span>
                    {{ brand.education.name }}
                  </span>
                </a>
              </span>
            </div>
          </nav>
          <nav :class="{ invert: invert }" class="nav-menu">
            <div v-if="isDesktop">
              <ul class="scrollactive-nav">
                <li v-for="(item, index) in menuList" :key="index">
                  <v-btn v-if="!invert" v-smooth-scroll="{ offset: -100 }" :to="'/' + item.url"
                    :class="{ active: activeMenu === item.name }" class="menu-link" variant="text"
                    @click="scrollToMyEl(item.name)">
                    <span class="text">
                      {{ $t('educationLanding.header_' + item.name) }}
                    </span>
                  </v-btn>
                  <v-btn v-else :to="item.url" variant="text">
                    <span class="text">
                      {{ $t('educationLanding.header_' + item.name) }}
                    </span>
                  </v-btn>
                </li>
                <li>
                  <v-btn :to="link.education.contact" variant="text">
                    <span class="text">
                      {{ $t('educationLanding.header_contact') }}
                    </span>
                  </v-btn>
                </li>
              </ul>
            </div>
          </nav>
          <nav class="nav-menu nav-auth">
            <hidden point="xsDown">
              <div class="deco" />
              <v-btn :to="link.education.login" class="text-btn" variant="text"
                v-text="$t('educationLanding.header_login')" />
              <v-btn :to="link.education.register" class="button white" variant="elevated"
                v-text="$t('educationLanding.header_register')" />
            </hidden>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/education-logo-2.png';
import link from '@/assets/text/link';
import brand from '@/assets/text/brand';
import navMenu from './menu';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import Hidden from '../Hidden';
import { useRouter } from '#app';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu,
    Hidden,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      logo,
      link,
      loaded: false,
      brand,
      sections: {},
      activeMenu: '',
      fixed: false,
      openDrawer: null,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
      ],
    };
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    mdUp() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>
