<template lang="pug">    
v-container()
  router-view   
  v-navigation-drawer(app permanent)
    v-list
      template(v-for="model in models.model")
        v-list-item(:to="{name: 'model', params: {model: model.name}}") 
          v-list-item-content
            v-list-item-title {{model.name}}
          v-list-item-icon(left)
            v-icon mdi-cube-outline
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted: async function () {
    await this.$store.dispatch("run", {
      model: "model",
      method: "read",
    });
    await this.$store.dispatch("run", {
      model: "database",
      method: "read",
    });
  },
  watch: {
    "$route.params.model": function (newValue, oldValue) {
      let vue = this;
      vue.$store.dispatch("run", {
        model: newValue,
        method: "read",
      });
    },
  },
};
</script>
