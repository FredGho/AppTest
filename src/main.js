import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  data: () => ({
    // to use in each animations/transitions
    animated: process.env.ENABLE_ANIMATIONS,
  }),
}).$mount('#app');
