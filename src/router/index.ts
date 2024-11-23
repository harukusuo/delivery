import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import HomePage from '@/views/HomePage.vue';
import RestaurantDetail from '@/views/RestaurantDetail.vue';
import FoodDetail from '@/views/FoodDetail.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/restaurant/:id', name: 'RestaurantDetail', component: RestaurantDetail },
  { path: '/food/:id', name: 'FoodDetail', component: FoodDetail },
  { path: '/cart', name: 'Cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;