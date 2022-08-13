import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler";
import router from "./routes/router";

import App from "./App.vue";

createApp().use(router).component("App", App).mount("#app");
