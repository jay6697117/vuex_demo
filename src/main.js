import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CustomStoreObj from './customStore';
Vue.use(CustomStoreObj);
const customStore = new CustomStoreObj.CustomStore({
  state: {
    customNum: 0,
  },
  mutations: {
    CUSTOM_CHANGE(state, { num }) {
      state.customNum = num;
    }
  },
  actions: {
    custom_change_num({ commit }, payload) {
      commit('CUSTOM_CHANGE', payload)
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  customStore,
  render: (h) => h(App),
}).$mount('#app');
