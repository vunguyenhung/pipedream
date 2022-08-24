export default {
  name: "Test Action from Leo",
  version: "0.0.1",
  key: "test-action-from-leo",
  description: "Test action",
  type: "action",
  props: { },
  async run({ $ }) {
    $.export("$summary", "test");
  },
};
