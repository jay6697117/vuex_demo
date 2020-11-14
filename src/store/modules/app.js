export default {
  namespaced: true,
  state: {
    num: 0,
  },
  mutations: {
    CHANGE_NUM(state, { num }) {
      state.num = num;
    },
  },
  actions: {
    async_change_num({ commit }, payload) {
      setTimeout(() => {
        commit('CHANGE_NUM', payload);
      }, 1500);
    },
  },
  modules: {},
};
