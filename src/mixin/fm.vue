    <script>
import lodash from "lodash";

export default {
  computed: {
    model() {
      const vue = this;
      return lodash.find(vue.$store.state.models.model, {
        name: vue.$route.params.model,
      });
    },
    database() {
      const vue = this;
      return lodash.find(vue.$store.state.models.database, {
        name: vue.model.database,
      });
    },
    models() {
      const vue = this;
      return vue.$store.state.models;
    },
  },
  methods: {
    display(schema) {
      const vue = this;
      let display = vue.database.pk;
      const fields = lodash.keys(schema);
      for (let field of fields) {
        if (schema[field].type === "string" && schema[field].unique === true) {
          display = field;
          break;
        }
      }
      return display;
    },
  },
};
</script>
