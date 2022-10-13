import common from '../../common.mjs'

export default {
  name: "Do Thing B",
  version: "0.0.1",
  key: "leo_test-do-thing-b",
  description: "Should do thing B",
  props: {},
  type: "action",
  async run({ $ }) {
    $.export("$summary", "Hello World");
  },
};
