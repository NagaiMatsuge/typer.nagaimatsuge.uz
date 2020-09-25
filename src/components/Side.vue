<template>
  <div class="side_wrapper">
    <div>
      <h3>Some Figures</h3>
      <div>
        <div class="figures_wrapper">
          <div>Best Speed :</div>
          <div>{{ best_speed }} WPM</div>
        </div>
        <div class="figures_wrapper">
          <div>Least Mistakes :</div>
          <div>{{ least_mistakes }} %</div>
        </div>
      </div>
    </div>
    <div class="max_time">
      <h3>Max Time</h3>
      <input
        type="number"
        @focus="stopTyper"
        @change="max_time_apply"
        v-model="max_time"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Side",
  data() {
    return {
      max_time: this.$store.getters.getMaxTime,
    };
  },
  computed: {
    best_speed() {
      if (this.$store.getters.getScores.length) {
        return Math.max(...this.$store.getters.getScores.map((o) => o.speed));
      } else {
        return 0;
      }
    },
    least_mistakes() {
      if (this.$store.getters.getScores.length) {
        return Math.min(
          ...this.$store.getters.getScores.map((o) => o.mistakesRate)
        );
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapMutations(["setMaxTime"]),
    max_time_apply() {
      this.setMaxTime(this.max_time);
    },
    stopTyper() {
      if (this.$store.getters.getEnableT) {
        document.getElementById("toggler_typing").click();
      }
    },
  },
};
</script>

<style>
.side_wrapper {
  padding: 20px 40px;
  background: var(--secondary-color);
  color: var(--opposite-color);
  text-align: center;
}
.side_wrapper h3 {
  font-size: 30px;
  margin: 10px 0;
  font-weight: 400;
}
.figures_wrapper {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
.max_time {
  margin: 10px 0;
}
.max_time h3 {
  margin: 10px 0;
  font-size: 30px;
  font-weight: 400;
}
.max_time input {
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  padding: 7px 0;
  font-size: 20px;
}
input {
  max-width: 100%;
}
@media only screen and (min-width: 1600px) {
  .side_wrapper {
    min-width: 450px;
  }
  .side_wrapper h3 {
    font-size: 45px;
    margin: 20px 0;
  }
  .figures_wrapper {
    font-size: 35px;
  }
  .max_time input {
    font-size: 35px;
  }
}
</style>
