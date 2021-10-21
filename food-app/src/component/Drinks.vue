<template lang="">
  <div>
    <div id="search">
      <form>
        <label for="fname">search:</label>
        <input
          id="fname"
          type="text"
          v-model="search"
          placeholder="search the cocktail..."
        />
      </form>
    </div>
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
    this.fetchAPI();
  },
  methods: {
    fetchAPI() {
      this.$http
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            this.search
        )
        .then(function(res) {
          console.log(res.data);
          this.drinks = res.data.drinks;
          this.id = res.data.drinks.idDrink;
        });
    }
  },
  watch: {
    search() {
      this.fetchAPI();
    }
  }
};
</script>
<style lang="">
#cocktails {
  width: 60vw;
  margin: 3rem auto;
  max-width: 1170px;
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  grid-template-rows: minmax(20rem, auto);
}
#cocktail {
  background: #fff;
  margin-bottom: 2rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  border-radius: 0.25rem;
}
#cocktail:hover {
  box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
}
#img-footer {
  padding-left: 0.5rem;
}
img {
  height: 15rem;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

@media screen and (min-width: 576px) {
  #cocktails {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

#search {
  margin-top: 1rem;
  padding-bottom: 0;
}
form {
  width: 85vw;
  margin: 0 auto;
  max-width: 40rem;
  background: #fff;
  padding: 2rem 2.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
}
label {
  display: block;
  margin-bottom: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: #476a2e;
}
input {
  width: 100%;
  border: none;
  border-color: transparent;
  background: #f1f5f8;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1.2rem;
}
</style>
