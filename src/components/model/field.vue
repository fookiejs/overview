<template lang="pug">
div
  div(v-if="typeof field.relation ==='string'") {{a}}
  div(v-if="field.type==='string'") {{$props.entity[$props.k]}}
  div(v-else-if="field.type==='number'") {{$props.entity[$props.k]}}
  pre(v-else-if="field.type==='object'") {{$props.entity[$props.k]}}
  v-chip(v-else-if="field.type==='boolean'") {{$props.entity[$props.k] || false}}
  div(v-else-if="field.type==='function'" class="tw-text-red-600") [Native Code]
  pre(v-else-if="field.type==='array'") {{$props.entity[$props.k]}}
   
</template>

<script>
//TODO || false kaldır
import lodash from "lodash";
export default {
  props: ["k", "field", "entity"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    a() {
      return this.display(this.model.schema, this.$props.field, this.$props.k);
    },
  },
};
</script>

<style>
</style>