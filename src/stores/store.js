// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isScreenLarge: window.innerWidth >= 595.5,
  },
  mutations: {
    setScreenSize(state, isLarge) {
      state.isScreenLarge = isLarge;
    },
  },
  actions: {
    updateScreenSize({ commit }) {
      const isLarge = window.innerWidth >= 595.5;
      commit('setScreenSize', isLarge);
    },
  },
});

export default store;
