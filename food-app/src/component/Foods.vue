<template lang="">
  <div>
    <input type="text" v-model="search" placeholder="search the cocktail..." />
    <div id="cocktails">
      <div v-for="drink in drinks" :key="drink.idDrink" id="cocktail">
        <img v-bind:src="drink.strDrinkThumb" />
        <div id="img-footer">
          <h2>{{ drink.strDrink }}</h2>
          <h3>{{ drink.strGlass }}</h3>
          <p>{{ drink.strAlcoholic }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      drinks: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then(function(res) {
        console.log("c");
        this.drinks = res.data.drinks;
        this.id = res.data.drinks.idDrink;
      });
  }
};
</script>
<style lang="">
#cocktails {
  width: 85vw;
  margin: 3rem auto;
  max-width: 1170px;
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
}
#cocktail {
  background: #fff;
  margin-bottom: 2rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
}
#cocktail:hover {
  box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
}
#img-footer {
  padding: 1.5rem;
}
img {
  height: 20rem;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

@media screen and (min-width: 576px) {
  #cocktails {
    grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
  }
}
</style>
