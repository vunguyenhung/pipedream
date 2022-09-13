import { defineAction } from "@pipedream/types";

export default defineAction({
  name: "Test Typescript action that won't compile",
  description: "Won't compile",
  key: "testtypescript-wont-compile",
  version: "1.0.0",
  type: "action",
  props: { },
  async run({ $ }) {
    console.log('Hello world!')
  },
});
