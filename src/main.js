import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.directive("highlight", (el, binding) => {
  const background = binding.value;
  el.style.background = background;
});
app.use(store).use(router).mount("#app");
