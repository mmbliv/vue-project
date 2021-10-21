import food from "./component/Foods.vue";
import drink from "./component/Drink.vue";

export default [
  { path: "/", component: food },
  { path: "/:id", component: drink }
];
