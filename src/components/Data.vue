<template>
  <div class="data_wrapper">
    <div class="data_chunk speed_data">Speed: {{ speed.toFixed(2) }}|WPM</div>
    <div class="data_chunk mistakes_data">
      Mistakes: {{ mistakes }} | {{ errorRate.toFixed(2) }}%
    </div>
    <div class="data_chunk time_data">Time: {{ time }}/{{ max_time }}</div>
  </div>
</template>

<script>
// import * as texts from "../data/Data.js";
import { mapMutations } from "vuex";
export default {
  name: "Data",
  data() {
    return {
      time: 0,
      speed: 0,
      errorRate: 0,
      timer_i: null,
      speed_i: null,
      scores: this.$store.getters.getScores,
    };
  },
  computed: {
    max_time() {
      return this.$store.getters.getMaxTime;
    },
  },
  props: ["mistakes", "index"],
  methods: {
    timer() {
      this.timer_i = setInterval(() => {
        if (this.time < this.max_time) {
          this.time++;
        } else {
          this.stop();
        }
      }, 1000);
    },
    speedChecker() {
      this.speed = setInterval(() => {
        this.speed = (this.index / 5) * (60 / this.time);
        this.errorRate = (this.mistakes * 100) / this.index;
      }, 2000);
    },
    ...mapMutations(["updateScores", "changeToNewText"]),
    start() {
      this.timer();
      this.speedChecker();
    },
    stop() {
      var today = new Date();

      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      if (this.speed) {
        let data = {
          speed: this.speed.toFixed(2),
          mistakes: this.mistakes,
          mistakesRate: this.errorRate.toFixed(2),
          date: date,
        };
        this.scores = this.$store.getters.getScores;
        if (this.scores) {
          this.scores.unshift(data);
        } else {
          this.scores = [data];
        }
        window.localStorage.setItem("scores", JSON.stringify(this.scores));
        this.updateScores();
      }
      if (!this.$store.getters.getCustomText) {
        this.changeToNewText();
      }
      this.time = 0;
      this.speed = 0;
      this.errorRate = 0;
      clearInterval(this.timer_i);
      clearInterval(this.speed_i);
      this.$emit("stop");
    },
  },
  created() {
    this.$parent.$on("startTimer", this.start);
    this.$parent.$on("finish", this.stop);
    if (!this.scores) this.scores = [];
  },
};
</script>

<style scoped>
.data_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  width: 75%;
  margin: auto;
  padding: 10px 15px;
  font-family: sans-serif;
  margin-top: 20px;
}
.data_chunk {
  box-shadow: 0 4px 7px black;
  padding: 10px 15px;
  border-radius: 10px;
  text-align: center;
  background: var(--primary-color);
  max-width: 300px;
}
@media only screen and (max-width: 900px) {
  .data_wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
  }
  .data_chunk {
    width: 100%;
  }
}
</style>
