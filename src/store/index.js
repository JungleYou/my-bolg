import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import systemSet from "./systemSet";
export default new Vuex.Store({
  modules: {
    systemSet,
  },
});
