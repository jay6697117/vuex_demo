import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    stateApp: state => state.app.num + 1
  },
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
  },
});
