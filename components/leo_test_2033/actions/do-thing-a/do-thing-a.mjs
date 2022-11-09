import app from "../../leo_test_2033.app.mjs";

export default {
  name: "Do Thing A",
  version: "0.0.1",
  key: "leo_test_2033-do-thing-a",
  description: "",
  props: {
    app,
  },
  type: "action",
  methods: {},
  async run({ $ }) {
    $.export("name", "value");
    return $.flow.exit("end reason");
  },
};
