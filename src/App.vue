<template>
  <div id="app">
    <TextT />
  </div>
</template>

<script>
import TextT from "./components/TextT";
export default {
  name: "App",
  components: {
    TextT,
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
button {
  cursor: pointer;
}
</style>
