<template>
  <div id="app">
    <router-view v-if="show" @stop="stop"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      show: true,
    };
  },
  methods: {
    stop() {
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      console.log("smth");
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
</style>
