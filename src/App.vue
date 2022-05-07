<template lang="pug">
v-app(app)
  v-app-bar(app elevate-on-scroll)
    v-container
      v-row(align="center")
          v-app-bar-nav-icon 
            v-img(src="./assets/logo.png" max-height="32" contain)
          v-app-bar-title() Fookie.js Overview
          v-spacer
          v-btn(icon href="https://discord.com/invite/Y4BPxTUMsh" target="#" )
            v-icon mdi-discord 
          v-btn(icon @click="darkmode = !darkmode")
            v-icon {{darkmode ? 'mdi-weather-night':'mdi-white-balance-sunny'}} 
  v-main(app)
    router-view
  v-footer(padless)
    v-card(flat tile width="100%" class="tw-text-center")
      v-card-text
        | {{ new Date().getFullYear() }} &mdash; 
        strong Fookie JS
</template>       
<script>
export default {
  data() {
    return {
      darkmode: true,
    };
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  },
  watch: {
    darkmode(val) {
      val = !val;
      this.$vuetify.theme.dark = val;
    },
  },
};
</script>
