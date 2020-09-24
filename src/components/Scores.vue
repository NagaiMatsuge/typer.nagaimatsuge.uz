<template>
  <div>
    <div class="scores_wrapper">
      <div class="scores_container">
        <div class="scores_title">
          <h3>Your Previous Scores In this Sessions</h3>
          <button @click="clear_storage" class="clear_all">Clear All</button>
        </div>
        <div class="scores_data">
          <ul class="scrollable" v-if="scores.length">
            <li v-for="(score, index) in scores" :key="index">
              <div>Date: {{ score.date }}</div>
              <div>Errors: {{ score.mistakesRate }}%</div>
              <div>Speed: {{ score.speed }} WPM</div>
              <button @click="delete_score(index)" class="delete_btn">
                &#10005;
              </button>
            </li>
          </ul>
          <ul v-else>
            <li>You don't have records yet</li>
            <li>A little Note: Every record is being saved locally!</li>
          </ul>
        </div>
      </div>
      <div class="scores_information">
        <Side />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Side from "./Side";
import Footer from "./Footer";
import { mapMutations } from "vuex";
export default {
  name: "Scores",
  computed: {
    scores() {
      if (this.$store.getters.getScores) {
        return this.$store.getters.getScores.slice(0, 10);
      } else {
        return [];
      }
    },
  },
  methods: {
    ...mapMutations(["removeScores", "updateScores"]),
    delete_score(index) {
      this.removeScores(index);
      window.localStorage.setItem("scores", JSON.stringify(this.scores));
    },
    clear_storage() {
      window.localStorage.clear();
      this.updateScores();
    },
  },
  components: {
    Side,
    Footer,
  },
};
</script>

<style>
.scores_wrapper {
  background: var(--primary-color);
  color: var(--opposite-color);
  padding: 30px 3%;
  display: flex;
  justify-content: center;
}
.scores_container {
  text-align: center;
  background: var(--secondary-color);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.scores_information {
  max-width: 400px;
  margin-left: 30px;
}
.scores_data ul {
  border: 1px solid grey;
  border-radius: 10px;
}
.scores_data ul li {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid grey;
  font-size: 20px;
}
li:nth-last-child(1) {
  border: none !important;
}
.scores_title {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.scores_title h3 {
  font-size: 25px;
  margin: 10px 0;
  font-weight: 400;
}
.delete_btn {
  background: var(--mistake-color);
  color: white;
  width: 40px;
  border: none;
  clip-path: circle();
}
.clear_all {
  height: 100%;
  padding: 10px 10px;
  border: none;
  background: purple;
  color: white;
  border-radius: 4px;
  font-size: 18px;
  margin-left: 10px;
}
@media only screen and (max-width: 768px) {
  .scores_wrapper {
    flex-wrap: wrap;
  }
  .scores_container {
    min-width: 300px;
  }
  .scores_information {
    min-width: 300px;
    margin-left: 0;
  }
  .text-inside::before {
    display: none !important;
  }
  .text-inside::after {
    display: none !important;
  }
  .scores_title {
    flex-wrap: wrap;
    justify-content: center;
  }
  .clear_all {
    width: 60%;
    margin: 5px 0;
  }
}
@media only screen and (min-width: 1600px) {
  .scores_container {
    min-width: 40%;
  }
  .scores_title h3 {
    font-size: 50px;
  }
  .clear_all {
    font-size: 30px;
    padding: 15px 10px;
    margin-left: 20px;
  }
  .scores_data ul li {
    font-size: 30px;
  }
}
</style>
