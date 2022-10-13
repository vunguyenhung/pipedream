import common from '../../test-common.mjs'

export default {
  name: "Do Thing A",
  version: "0.0.1",
  key: "leo_test-do-thing-a",
  description: "Should do thing A",
  props: {},
  type: "action",
  async run({ $ }) {
    $.export("$summary", "Hello World");
  },
};
