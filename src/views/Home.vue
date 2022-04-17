<template lang="pug">
  div(class="") 
    v-card(v-for="model of models")
      v-card-title {{model.name}}
      v-card-subtitle  {{model.version}}
      v-card-text hi
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "http://localhost:2626",
      token: "admin",
      models: [],
    };
  },
  mounted: async function () {
    let token = this.token;
    let url = this.url;
    let res = await axios.post(url, {
      token,
      model: "model",
      method: "read",
      query: {
        filter: {},
        attributes: [],
      },
    });
    console.log(res.data);
    if (res.data.status) {
      this.models = res.data.data;
    } else {
    }
  },
};
</script>
