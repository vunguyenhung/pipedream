import { defineAction } from "@pipedream/types";
import app from "../../app/testtypescript.app";

export default defineAction({
  name: "Test Typescript action",
  description: "Test typescript action",
  key: "testtypescript-compile",
  version: "1.0.0",
  type: "action",
  props: { },
  async run({ $ }) {
    console.log('Hello world!')
  },
});
