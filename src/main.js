/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import store from "./stores/store";

const app = createApp(App);

registerPlugins(app);
app.use(store); // Use the Vuex store
app.mount("#app");
