import { createApp } from "vue";

import App from "./App.vue";
import BootstrapVue from "./index";

const app = createApp(App);

app.use(BootstrapVue);
app.mount("#app");
