import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/style.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    // Optionally install the BootstrapVue icon components plugin
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')