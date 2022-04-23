<template lang="pug">
  div(class="") 
    v-tabs(v-model="tab" vertical color="red")
      v-tab(v-for="model of models")
        v-spacer 
        span {{model.name}}   
               
      v-tabs-items(v-model="tab")
        v-tab-item(v-for="model of models")
          v-card(elevation="0")
            span(class="tw-text-3xl") Info
            v-divider
            v-card-subtitle version: 
              span(class="tw-font-bold") {{model.version}}
            v-card-text database: 
              span(class="tw-font-bold") {{model.database}}
            span(class="tw-text-3xl") Schema
            v-divider
            v-card-text             
              div(class="tw-flex tw-gap-4 tw-grid tw-grid-cols-3")  
                v-card( v-for="(field,key) of model.schema" outlined )
                  v-card-text(class="tw-font-bold") {{key}}
                  v-divider
                  v-card-text(class="tw-flex")                 
                    span(class="tw-italic") type 
                    v-spacer
                    span(class="tw-font-bold") {{field.type}}
                  v-card-text(class="tw-flex")                 
                    span(class="tw-italic") required 
                    v-spacer
                    v-chip( small :color="field.required ? 'green' : 'red' " dark) {{ field.required || "false"}}
                  v-card-text(class="tw-flex")                 
                    span(class="tw-italic") unique 
                    v-spacer
                    v-chip( small :color="field.unique ? 'green' : 'red' " dark) {{ field.unique || "false"}}
                  v-card-text(class="tw-flex")                 
                    span(class="tw-italic") default 
                    v-spacer
                    div(class="tw-font-bold") {{field.default}}
                  v-card-text(class="tw-flex")                 
                    span(class="tw-italic") write 
                    v-spacer
                    div
                     v-chip(v-for="role of field.write" small dark) {{role}}
                  v-card-text(class="tw-flex")                 
                    span(class="tw-italic") read 
                    v-spacer
                    div
                     v-chip(v-for="role of field.read" small dark) {{role}}   
                  v-card-text(v-for="key of optional(field)" class="tw-flex")                 
                    span(class="tw-italic") {{key}} 
                    v-spacer
                    span(class="tw-font-bold") {{field[key]}}    
            span(class="tw-text-3xl") Lifecycle            
            v-divider
            v-card-text
              div( class="tw-flex tw-grid tw-grid-cols-3 tw-gap-4")
                v-card(v-for="obj,method of model.lifecycle" outlined )
                  v-card-text 
                    span(class="tw-font-bold") {{method}}
                  v-divider                   
                  v-card-text(v-for="arr of ['preRule','modify','rule','filter','effect']") 
                    div(class="tw-italic") {{arr}}
                    v-chip(v-for="item of obj[arr]" small dark) {{item}}
            span(class="tw-text-3xl") Role            
            v-divider

              

              
</template>

<script>
import axios from "axios";
import lodash from "lodash";
export default {
  data() {
    return {
      tab: 0,
      url: "http://localhost:2630",
      token: "admin",
      models: [],
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
  mounted: async function () {
    let token = this.token;
    let url = this.url;
    let res = await axios.post(url, {
      token,
      model: "model",
      method: "read",
      query: {
        filter: {},
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
