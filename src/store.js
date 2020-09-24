export default {
  state: {
    scores: JSON.parse(window.localStorage.getItem("scores")),
    max_time: 120,
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
  },
};
