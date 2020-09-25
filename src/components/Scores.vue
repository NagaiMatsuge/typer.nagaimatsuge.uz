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
            <li>Click on power button on top left corner to enable typing!</li>
            <li>Start typing to get your scores here!</li>
            <li>Every record is being saved locally!</li>
            <li>Your own text should contain at least 30 chars!</li>
          </ul>
        </div>
      </div>
      <div class="scores_information">
        <Side />
      </div>
    </div>
    <div class="provide_text">
      <div class="provide_text_content">
        <div class="input_field">
          <input
            type="text"
            v-model="newText"
            @focus="stopTyping"
            placeholder="Provide your own text..."
          />
        </div>
        <div>
          <button @click="updateText">Change</button>
        </div>
      </div>
    </div>
    <div v-if="notify">
      <Notification :message="message" :type="notify_type" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Side from "./Side";
import Footer from "./Footer";
import Notification from "./Notification";
import { mapMutations } from "vuex";
export default {
  name: "Scores",
  data() {
    return {
      newText: "",
      notify: false,
      message: "",
      notify_type: "primary",
    };
  },
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
    ...mapMutations([
      "removeScores",
      "updateScores",
      "setNewText",
      "toggleCustomText",
    ]),
    delete_score(index) {
      this.removeScores(index);
      window.localStorage.setItem("scores", JSON.stringify(this.scores));
    },
    clear_storage() {
      window.localStorage.clear();
      this.updateScores();
    },
    stopTyping() {
      if (this.$store.getters.getEnableT) {
        if (!this.notify) {
          this.message =
            "Dont forget to click on power button on top left corner to enable typing";
          this.notify_type = "primary";
          this.show_notify();
        }
        document.getElementById("toggler_typing").click();
      }
    },
    updateText() {
      if (this.newText.length > 30) {
        this.setNewText(this.newText);
        this.toggleCustomText();
        this.newText = "";
        this.$emit("textChanged");
      } else {
        if (!this.notify) {
          this.message = "Your text should contain at least 30 characters!";
          this.notify_type = "warning";
          this.show_notify();
        }
      }
    },
    show_notify() {
      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 5000);
    },
  },
  components: {
    Side,
    Footer,
    Notification,
  },
};
</script>

<style>
.scores_wrapper {
  background: var(--primary-color);
  color: var(--opposite-color);
  padding: 30px 10px 0 30px;
  display: flex;
  justify-content: center;
}
.scores_container {
  text-align: center;
  background: var(--secondary-color);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 7px var(--shadow-color);
}
.provide_text {
  background: var(--primary-color);
  padding: 20px;
}
.provide_text_content {
  background: var(--secondary-color);
  padding: 15px 20px;
  border-radius: 5px;
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 7px var(--shadow-color);
}
.provide_text_content button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 18px;
  color: white;
  background-image: linear-gradient(
    -180deg,
    rgb(83, 86, 89) 0%,
    rgb(66, 69, 73) 90%
  ) !important;
  border-color: rgb(24, 26, 31) !important;
}
.provide_text_content button:hover {
  background-image: linear-gradient(
    -180deg,
    rgba(83, 86, 89, 0.9) 0%,
    rgba(66, 69, 73, 0.9) 90%
  ) !important;
  border-color: rgb(24, 26, 31) !important;
}
.input_field {
  flex: 1;
  display: flex;
  align-items: center;
}
.input_field input {
  width: 100%;
  outline: none;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  background: var(--secondary-color);
  color: var(--opposite-color);
  font-size: 20px;
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
  color: white;
  border-radius: 4px;
  font-size: 18px;
  margin-left: 10px;
  background-image: linear-gradient(
    -180deg,
    rgb(83, 86, 89) 0%,
    rgb(66, 69, 73) 90%
  ) !important;
  border-color: rgb(24, 26, 31) !important;
}
.clear_all:hover {
  background-image: linear-gradient(
    -180deg,
    rgba(83, 86, 89, 0.9) 0%,
    rgba(66, 69, 73, 0.9) 90%
  ) !important;
  border-color: rgb(24, 26, 31) !important;
}
@media only screen and (max-width: 768px) {
  .scores_wrapper {
    flex-wrap: wrap;
    padding: 3%;
  }
  .scores_container {
    min-width: 300px;
  }
  .provide_text {
    padding: 3%;
    padding-bottom: 20px;
  }
  .provide_text_content {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
  }
  .provide_text_content .input_field {
    width: 100%;
    margin-bottom: 10px;
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
  .provide_text_content {
    width: 55%;
    padding: 30px;
  }
  .provide_text_content input {
    padding: 20px;
    font-size: 25px;
  }
  .provide_text_content button {
    padding: 20px;
    font-size: 30px;
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
