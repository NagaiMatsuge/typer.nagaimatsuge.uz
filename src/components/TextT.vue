<template>
  <div :class="[dark_mode ? 'dark' : 'light']">
    <div class="main_t">
      <div @click="dark_mode = !dark_mode" style="cursor: pointer">
        <div v-if="dark_mode" class="mode_toggler">
          <svg
            id="Layer_1"
            enable-background="new 0 0 497 497"
            height="512"
            viewBox="0 0 497 497"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m248.5 0c-66.377 0-128.781 25.849-175.716 72.784-46.935 46.936-72.784 109.34-72.784 175.716s25.849 128.78 72.784 175.716c46.935 46.935 109.339 72.784 175.716 72.784 17.487 0 34.693-1.812 51.418-5.313v-486.374c-16.725-3.501-33.931-5.313-51.418-5.313z"
              fill="#d4d4d5"
            />
            <path
              d="m497 248.5c0-66.376-25.849-128.78-72.784-175.716-34.57-34.57-77.538-57.683-124.298-67.471-46.761 9.788-89.728 32.901-124.298 67.471-46.935 46.936-72.784 109.34-72.784 175.716s25.849 128.78 72.784 175.716c34.57 34.57 77.538 57.683 124.298 67.471 46.761-9.788 89.728-32.901 124.298-67.471 46.935-46.936 72.784-109.34 72.784-175.716z"
              fill="#efedee"
            />
            <ellipse
              cx="169.331"
              cy="220.763"
              fill="#ff8e9e"
              rx="29.212"
              ry="23.263"
              transform="matrix(1 .003 -.003 1 .693 -.529)"
            />
            <ellipse
              cx="327.669"
              cy="221.259"
              fill="#ff8e9e"
              rx="29.212"
              ry="23.263"
              transform="matrix(-1 -.003 .003 -1 654.644 443.544)"
            />
            <path
              d="m184 178.5c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"
              fill="#313d40"
            />
            <path
              d="m312 178.5c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"
              fill="#313d40"
            />
            <path
              d="m267.735 207.234c-3.737-1.789-8.215-.206-10.001 3.531-1.666 3.484-5.291 5.735-9.234 5.735s-7.568-2.251-9.234-5.735c-1.787-3.737-6.266-5.317-10.001-3.531-3.737 1.787-5.318 6.265-3.531 10.001 4.144 8.666 13.08 14.265 22.766 14.265s18.623-5.599 22.766-14.265c1.787-3.736.206-8.215-3.531-10.001z"
              fill="#313d40"
            />
            <g fill="#d4d4d5">
              <circle cx="396.336" cy="296.5" r="45" />
              <circle cx="176.335" cy="116.5" r="30" />
              <circle cx="304.5" cy="413.5" r="15" />
            </g>
            <circle cx="60" cy="248.5" fill="#b9bbbc" r="15" />
            <circle cx="366.336" cy="101.5" fill="#d4d4d5" r="15" />
            <path
              d="m175.962 424.553-61.848-101.686c-14.638 10.941-24.114 28.408-24.114 48.089 0 33.137 26.863 60 60 60 9.437 0 18.019-2.521 25.962-6.403-.227-.226.227.227 0 0z"
              fill="#b9bbbc"
            />
            <path
              d="m210.001 370.956c0-33.137-26.863-60-60-60-13.456 0-25.878 4.43-35.886 11.911 11.814 37.841 33.016 72.854 61.848 101.686.227.227-.228-.226 0 0 19.95-9.748 34.038-29.896 34.038-53.597z"
              fill="#d4d4d5"
            />
            <path
              d="m40.416 40.416c4.627-1.191 8.983-3.058 12.956-5.49 4.837-2.96 4.837-9.892 0-12.852-3.973-2.431-8.329-4.298-12.956-5.489-1.191-4.627-3.058-8.983-5.49-12.956-2.96-4.837-9.892-4.837-12.852 0-2.432 3.973-4.298 8.329-5.49 12.957-4.627 1.191-8.983 3.058-12.956 5.489-4.837 2.96-4.837 9.892 0 12.852 3.973 2.432 8.329 4.299 12.956 5.49 1.191 4.627 3.058 8.983 5.49 12.956 2.96 4.837 9.892 4.837 12.852 0 2.432-3.974 4.299-8.33 5.49-12.957z"
              fill="#ffce71"
            />
            <path
              d="m440.465 440.615c6.494-1.672 12.608-4.292 18.184-7.705 6.789-4.155 6.789-13.883 0-18.038-5.576-3.413-11.69-6.033-18.184-7.704-1.672-6.494-4.292-12.608-7.705-18.185-4.155-6.789-13.883-6.789-18.038 0-3.413 5.576-6.033 11.69-7.705 18.185-6.494 1.672-12.608 4.292-18.184 7.704-6.789 4.155-6.789 13.883 0 18.038 5.576 3.413 11.69 6.033 18.184 7.705 1.672 6.494 4.292 12.607 7.705 18.184 4.155 6.789 13.883 6.789 18.038 0 3.413-5.577 6.033-11.691 7.705-18.184z"
              fill="#ffce71"
            />
          </svg>
        </div>
        <div v-else class="mode_toggler">
          <svg
            height="512"
            viewBox="0 0 128 128"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <circle cx="64" cy="63.997" fill="#fedb41" r="39.247" />
              <g fill="#fea832">
                <path
                  d="m95.247 65.747a1.749 1.749 0 0 1 -1.747-1.747 29.53 29.53 0 0 0 -29.5-29.5 1.75 1.75 0 0 1 0-3.5 33.035 33.035 0 0 1 33 33 1.749 1.749 0 0 1 -1.753 1.747z"
                />
                <g>
                  <path
                    d="m64 16.75a47.252 47.252 0 0 1 8.5.781c.038-.545.063-1.1.063-1.658-.001-7.801-8.563-14.126-8.563-14.126s-8.563 6.325-8.563 14.126c0 .562.026 1.113.064 1.658a47.243 47.243 0 0 1 8.499-.781z"
                  />
                  <path
                    d="m64 111.244a47.343 47.343 0 0 0 8.5-.78c.038.544.063 1.095.063 1.657 0 7.8-8.562 14.126-8.562 14.126s-8.563-6.324-8.563-14.126c0-.562.026-1.113.064-1.657a47.335 47.335 0 0 0 8.498.78z"
                  />
                  <path
                    d="m97.409 30.588a47.349 47.349 0 0 1 5.457 6.562c.413-.358.82-.73 1.217-1.127 5.517-5.517 3.934-16.043 3.934-16.043s-10.526-1.58-16.043 3.934c-.4.4-.769.8-1.127 1.217a47.349 47.349 0 0 1 6.562 5.457z"
                  />
                  <path
                    d="m30.591 97.406a47.232 47.232 0 0 0 6.562 5.457c-.358.413-.73.82-1.127 1.217-5.517 5.517-16.043 3.934-16.043 3.934s-1.583-10.526 3.934-16.043c.4-.4.8-.769 1.217-1.127a47.291 47.291 0 0 0 5.457 6.562z"
                  />
                  <path
                    d="m111.247 64a47.335 47.335 0 0 1 -.78 8.5c.544.038 1.095.064 1.657.064 7.8 0 14.126-8.563 14.126-8.563s-6.325-8.562-14.126-8.562c-.562 0-1.113.025-1.657.063a47.343 47.343 0 0 1 .78 8.498z"
                  />
                  <path
                    d="m16.753 64a47.335 47.335 0 0 0 .78 8.5c-.544.038-1.1.064-1.657.064-7.801-.004-14.126-8.564-14.126-8.564s6.325-8.562 14.126-8.562c.562 0 1.113.025 1.657.063a47.343 47.343 0 0 0 -.78 8.499z"
                  />
                  <path
                    d="m97.409 97.406a47.349 47.349 0 0 1 -6.562 5.457c.358.413.73.82 1.127 1.217 5.517 5.517 16.043 3.934 16.043 3.934s1.583-10.526-3.934-16.043c-.4-.4-.8-.769-1.217-1.127a47.291 47.291 0 0 1 -5.457 6.562z"
                  />
                  <path
                    d="m30.591 30.588a47.349 47.349 0 0 0 -5.457 6.562c-.413-.358-.82-.73-1.217-1.127-5.517-5.517-3.934-16.043-3.934-16.043s10.526-1.58 16.043 3.934c.4.4.769.8 1.127 1.217a47.291 47.291 0 0 0 -6.562 5.457z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="p-3 text-inside">
        <div ref="wrapperT" class="wrapperT">
          <span :key="index" v-for="(letter, index) in letters">{{
            letter
          }}</span>
        </div>
        <Data :mistakes="mistakes" :index="index" @stop="stop" />
      </div>
    </div>
    <Scores />
  </div>
</template>
<script>
import Data from "./Data.vue";
import Scores from "./Scores";
export default {
  name: "TextT",
  data() {
    return {
      text:
        "ZTouch typing (also called touch type or touch keyboarding) is a style of typing. Although the phrase refers to typing without using the sense of sight to find the keys specifically, a touch typist will know their location on the keyboard through muscle memory the term is often used to refer to a specific form of touch typing that involves placing the eight fingers in a horizontal row along the middle of the keyboard (the home row) and having them reach for specific other keys. (Under this usage, typists who do not look at the keyboard but do not use home row either are referred to as hybrid typists.) Both two handed touch typing and one handed touch typing are possible.",
      index: 0,
      letters: [],
      position: window.innerWidth / 2,
      spans: document.getElementsByTagName("span"),
      mistakes: 0,
      fired: false,
      dark_mode: true,
      extra: 0,
      wordWidth: window.innerWidth > 1600 ? 32 : 20,
    };
  },
  mounted() {
    this.start();
    this.handleResize();
    let self = this;
    window.addEventListener("keydown", function(ev) {
      if (
        (ev.keyCode > 31 && ev.keyCode < 37) ||
        (ev.keyCode > 40 && ev.keyCode < 91) ||
        (ev.keyCode > 185 && ev.keyCode < 223)
      ) {
        if (ev.keyCode == 32) {
          ev.preventDefault();
        }
        self.fireStartEvent();
        self.move(ev);
      }
    });
    window.addEventListener("resize", function() {
      self.handleResize();
    });
  },
  methods: {
    handleResize() {
      this.position = window.innerWidth / 2 - this.extra;
      if (this.position > 400) {
        this.position = 400;
      }
      this.$refs.wrapperT.style.left = this.position + "px";
    },
    move(ev) {
      if (ev.key !== this.letters[this.index]) {
        this.spans[this.index].classList.add("mistaken");
        this.mistakes++;
      } else {
        this.index++;
        this.position = this.position - this.wordWidth;
        this.$refs.wrapperT.style.left = this.position + "px";
        this.extra = this.extra + 20;
        if (this.index === this.letters.length) {
          this.$emit("finish");
          return;
        }
        this.spans[this.index].classList.add("current");
        this.spans[this.index - 1].classList.remove("current");
        this.spans[this.index - 1].classList.add("passed");
      }
    },
    fireStartEvent() {
      if (!this.fired) {
        this.$emit("startTimer");
        this.fired = true;
      }
    },
    start() {
      this.letters = [...this.text];
      this.index = 0;
      this.$nextTick(function() {
        this.spans = document.getElementsByTagName("span");
        this.spans[0].classList.add("current");
      });
    },
    stop() {
      this.extra = 0;
      this.handleResize();
      this.$refs.wrapperT.style.left = this.position + "px";
      this.fired = false;
      this.mistakes = 0;
      this.spans.forEach((element) => element.removeAttribute("class"));
      this.start();
    },
  },
  components: {
    Data,
    Scores,
  },
};
</script>
<style>
.light {
  --primary-color: #fff;
  --secondary-color: #f6f8fa;
  --opposite-color: rgb(49, 54, 63);
  --mistake-color: red;
}
.dark {
  --primary-color: #24292e;
  --secondary-color: rgb(49, 54, 63);
  --opposite-color: white;
  --mistake-color: red;
}
.main_t {
  background: var(--secondary-color);
  color: var(--opposite-color);
  padding: 20px;
}
.mode_toggler svg {
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 100;
  top: 10px;
  left: 10px;
  animation: rotating 6s linear infinite;
}
span {
  width: 20px;
  height: 30px;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
.text-inside {
  overflow: hidden;
  width: 900px;
  margin: auto;
  position: relative;
}
.text-inside::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  background: linear-gradient(90deg, transparent, var(--secondary-color));
}
.text-inside::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background: linear-gradient(90deg, var(--secondary-color), transparent);
  z-index: 1;
  max-width: 100%;
  overflow: hidden;
}
.wrapperT {
  display: inline-flex;
  transition: 1s cubic-bezier(0, 0, 0.1, 1.23);
  position: relative;
}
.current {
  background: var(--opposite-color);
  color: var(--primary-color);
  border: 1px solid var(--secondary-color);
  position: relative;
}
.current::after {
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  position: absolute;
  bottom: -17px;
  right: auto;
  background: var(--opposite-color);
}
.passed {
  color: grey;
}
.mistaken {
  background: var(--mistake-color);
  color: var(--opposite-color);
}
@media only screen and (max-width: 900px) {
  .text-inside {
    overflow: hidden;
    max-width: 100%;
  }
}
@media only screen and (min-width: 1600px) {
  .main_t {
    padding: 30px;
  }
  .mode_toggler svg {
    width: 100px;
    height: 100px;
  }
  .data_wrapper {
    min-width: 900px;
  }
  .data_wrapper .data_chunk {
    font-size: 30px;
  }
  span {
    width: 32px;
    height: 44px;
    font-size: 41px;
  }
  .text-inside {
    width: 1020px;
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
