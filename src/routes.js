import { createRouter, createWebHistory } from "vue-router";
import Users from "./views/Users.vue";
import Restaurants from "./views/Restaurants.vue";
import Foods from "./views/Foods.vue";
import UserDetail from "./views/UserDetail.vue";
import RestaurantDetail from "./views/RestaurantDetail.vue";
import FoodDetail from "./views/FoodDetail.vue";

const routes = [
  { path: "/", component: Users },
  { path: "/users/:id", component: UserDetail },
  { path: "/restaurants", component: Restaurants },
  { path: "/restaurants/:id", component: RestaurantDetail },
  { path: "/foods", component: Foods },
  { path: "/foods/:id", component: FoodDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
