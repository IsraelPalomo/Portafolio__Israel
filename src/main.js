import { createApp } from "vue";

import AOS from "aos";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "aos/dist/aos.css";

createApp(App)
	.use(store)
	.use(router)
	.mount("#app");

AOS.init();
