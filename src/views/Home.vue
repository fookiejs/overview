<template lang="pug">
  div(class="tw-h-full tw-flex tw-items-center tw-justify-center")
    v-card(width="600" :loading="loading")
      v-card-title Setting
      v-divider
      v-card-text
        v-text-field(label="Host" placeholder="localhost" v-model="$store.state.setting.host")
        v-text-field(label="Protocol" placeholder="http" v-model="$store.state.setting.protocol")
        v-text-field(label="Port" placeholder="2626" v-model="$store.state.setting.port")
        v-text-field(label="Token" placeholder="admin" v-model="$store.state.setting.token" type="password")
      v-card-actions
        v-spacer
        v-btn(@click="go") Overview
</template>

<script>
import axios from "axios";
import lodash from "lodash";
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    go: async function () {
      this.loading = true;
      let token = this.$store.state.setting.token;
      let url = `${this.$store.state.setting.protocol}://${this.$store.state.setting.host}:${this.$store.state.setting.port}`;
      let res = await axios.post(url, {
        token,
        model: "model",
        method: "read",
        query: {
          filter: {},
        },
      });
      if (res.status == 200) {
        this.$store.state.models = res.data.data;
        this.loading = false;
        this.$router.push({
          name: "overview",
        });
      }
    },
  },
  mounted: async function () {},
};
</script>
