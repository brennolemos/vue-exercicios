import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import "./plugins/bootstrap-vue";

axios.defaults.baseURL = "https://http-vue-f8e4b.firebaseio.com/";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
