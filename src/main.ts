import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import { install } from "vue-demi";
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;
install();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
