let texts = [
  "What is your maximum speed in a short go",
  "Touch typing (also called touch type or touch keyboarding) is a style of typing. Although the phrase refers to typing without using the sense of sight to find the keys specifically, a touch typist will know their location on the keyboard through muscle memory the term is often used to refer to a specific form of touch typing that involves placing the eight fingers in a horizontal row along the middle of the keyboard (the home row) and having them reach for specific other keys. (Under this usage, typists who do not look at the keyboard but do not use home row either are referred to as hybrid typists.) Both two handed touch typing and one handed touch typing are possible.",
  "Zebras are primarily grazers and can subsist on lower quality vegetation. They are preyed on mainly by lions and typically flee when threatened but also bite and kick. Zebra species differ in social behaviour, with plains and mountain zebra living in stable harems consisting of an adult male or stallion, several adult females or mares, and their young or foals; while Grevys zebra live alone or in loosely associated herds. In harem holding species, adult females mate only with their harem stallion, while male Grevys zebras establish territories which attract females and the species is promiscuous. Zebras communicate with various vocalisations, body postures and facial expressions. Social grooming strengthens social bonds in plains and mountain zebras.",
  "Social hacking describes the act of attempting to manipulate outcomes of social behaviour through orchestrated actions. The general function of social hacking is to gain access to restricted information or to a physical space without proper permission. Most often, social hacking attacks are achieved by impersonating an individual or group who is directly or indirectly known to the victims or by representing an individual or group in a position of authority. This is done through pre meditated research and planning to gain victims confidence. Social hackers take great measures to present overtones of familiarity and trustworthiness to elicit confidential or personal information. Social hacking is most commonly associated as a component",
  "Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible. Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn.",
  "Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything. How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style.",
];
export default {
  state: {
    scores: JSON.parse(window.localStorage.getItem("scores")),
    max_time: 120,
    text: texts[Math.floor(Math.random() * 5) + 1],
    enableT: false,
    custom_text: false,
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
    changeToNewText(state) {
      state.text = texts[Math.floor(Math.random() * 5) + 1];
    },
    toggleCustomText(state) {
      state.custom_text = true;
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
    getCustomText(state) {
      return state.custom_text;
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
  },
};
