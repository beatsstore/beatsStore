import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAudio from 'vue-audio-better'
import VueWaveSurfer from 'vue-wave-surfer'
import * as VueAos from 'vue-aos'
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

Vue.use(VueWaveSurfer)

Vue.use(VueAudio);

Vue.use(VueAos);
