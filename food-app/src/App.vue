<template>
  <div>
    <headerApp></headerApp>
    <food></food>
  </div>
</template>

<script>
import Foods from "./component/Foods.vue";
import Header from "./component/Header.vue";
export default {
  components: {
    headerApp: Header,
    food: Foods
  },

  data() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
