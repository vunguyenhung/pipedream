import { defineAction } from "@pipedream/types";

export default defineAction({
  name: "Test Typescript action",
  description: "Won't compile",
  key: "testtypescript-compile",
  version: "1.0.0",
  type: "action",
  props: { },
  async run({ $ }) {
    console.log('Hello world!')
  },
});
