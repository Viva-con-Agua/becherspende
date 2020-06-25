import Vue from 'vue'
import App from './App.vue'
import router from './router'
import de from "vee-validate/dist/locale/de.json";
import * as rules from "vee-validate/dist/rules"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { BootstrapVue } from 'bootstrap-vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";

Vue.use(BootstrapVue)

Vue.config.productionTip = false


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
