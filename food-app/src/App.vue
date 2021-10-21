<template>
  <div>
    <headerApp></headerApp>
    <router-view></router-view>
  </div>
</template>

<script>
import Foods from "./component/Foods.vue";
import Header from "./component/Header.vue";
import Drink from "./component/Drink.vue";
export default {
  components: {
    headerApp: Header,
    food: Foods,
    drink: Drink
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
