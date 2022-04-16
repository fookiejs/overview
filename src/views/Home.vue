<template lang="pug">
  div 
    pre 
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
    });
    console.log(res);
    if (res.data.status) {
      this.models = res.data;
    } else {
    }
  },
};
</script>
