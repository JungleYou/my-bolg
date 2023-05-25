export default {
  namespaced: true,
  action: {},
  mutations: {
    CHANGENIGHT(state, isnight) {
      //   console.log(isnight);
      state.isnight = isnight;
    },
  },
  getters: {},
  state: {
    isnight: true,
  },
};
