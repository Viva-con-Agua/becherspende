import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import de from "vee-validate/dist/locale/de.json";
import * as rules from "vee-validate/dist/rules";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("de", de);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
