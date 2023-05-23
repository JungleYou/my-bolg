import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.less";
import plugins from "@/plugins";
import VueRouter from "vue-router";
import router from "@/router";
Vue.use(ElementUI);
Vue.use(plugins);
Vue.use(VueRouter);
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
Vue.component(CollapseTransition.name, CollapseTransition);
import topNav from "@/components/top-nav";
Vue.component(topNav.name, topNav);
import handleBtn from "@/components/handle-btn";
Vue.component(handleBtn.name, handleBtn);
import userInfo from "@/components/user-info";
Vue.component(userInfo.name, userInfo);
import myNotice from "@/components/my-notice";
Vue.component(myNotice.name, myNotice);
import blogItem from "@/components/blog-item";
Vue.component(blogItem.name, blogItem);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
