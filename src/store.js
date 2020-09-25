// import * as test from "./data/Data.js";
export default {
  state: {
    scores: JSON.parse(window.localStorage.getItem("scores")),
    max_time: 120,
    text:
      "Touch typing (also called touch type or touch keyboarding) is a style of typing. Although the phrase refers to typing without using the sense of sight to find the keys specifically, a touch typist will know their location on the keyboard through muscle memory the term is often used to refer to a specific form of touch typing that involves placing the eight fingers in a horizontal row along the middle of the keyboard (the home row) and having them reach for specific other keys. (Under this usage, typists who do not look at the keyboard but do not use home row either are referred to as hybrid typists.) Both two handed touch typing and one handed touch typing are possible.",
    enableT: false,
  },
  actions: {},
  mutations: {
    newScores(state, score) {
      if (!state.scores) {
        state.scores = JSON.parse(window.localStorage.getItem("scores"));
      }
      state.scores.unshift(score);
    },
    removeScores(state, index) {
      state.scores.splice(index, 1);
    },
    updateScores(state) {
      state.scores = JSON.parse(window.localStorage.getItem("scores"));
    },
    setMaxTime(state, new_time) {
      state.max_time = new_time;
    },
    toggleEnableT(state) {
      state.enableT = !state.enableT;
    },
    setNewText(state, newText) {
      state.text = newText;
    },
  },
  getters: {
    getScores(state) {
      if (state.scores) {
        return state.scores;
      } else {
        return [];
      }
    },
    getMaxTime(state) {
      return state.max_time;
    },
    getText(state) {
      return state.text;
    },
    getEnableT(state) {
      return state.enableT;
    },
    getSmth(state) {
      return state.smth;
    },
  },
};
