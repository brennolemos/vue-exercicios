import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://http-vue-f8e4b.firebaseio.com/";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
});
