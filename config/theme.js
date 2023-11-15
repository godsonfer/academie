// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  smart: {
    primary: colors.cyan.lighten4, // primary main
    primarylight: colors.cyan.lighten4, // primary light
    primarydark: colors.cyan.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.cyan.lighten4, // link
  },
};

const theme = {
  ...palette.smart,
};

export default theme;
