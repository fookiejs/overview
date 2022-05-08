<template lang="pug">
v-tabs
  v-tab Info
  v-tab List 
  v-tab-item(class="tw-p-6")
    f-model-info
  v-tab-item(class="tw-p-6")
    f-model-list    
</template>

<script>
import lodash from "lodash";
import vuetify from "../plugins/vuetify";
export default {
  data() {
    return {
      step: 0,
      tab: 0,
      token: "admin",
    };
  },
  methods: {
    optional(field) {
      return lodash.intersection(lodash.keys(field), [
        "min",
        "max",
        "equal",
        "notEqual",
        "includes",
        "maxSize",
        "minSize",
      ]);
    },
  },
  computed: {},
  mounted: async function () {
    let vue = this;
    vue.$store.dispatch("run", {
      model: vue.model.name,
      method: "read",
    });
  },
};
</script>
