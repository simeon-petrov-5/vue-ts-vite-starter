import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlus,
  faArrowsRotate,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";
const app = createApp(App);
const pinia = createPinia();

library.add(faCirclePlus, faDiceD20, faArrowsRotate);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
