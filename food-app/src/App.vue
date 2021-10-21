<template>
  <div>
    <headerApp></headerApp>
    <router-view></router-view>
  </div>
</template>

<script>
import About from "./component/About.vue";
import Header from "./component/Header.vue";
import Drinks from "./component/Drinks.vue";
export default {
  components: {
    headerApp: Header,
    drink: Drinks,
    about: About
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
