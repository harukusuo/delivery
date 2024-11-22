<template>
    <div>
      <h1>Restaurantes</h1>
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-card">
        <router-link :to="`/restaurants/${restaurant.id}`">
          <h2>{{ restaurant.name }}</h2>
          <p>{{ restaurant.description }}</p>
          <p><strong>Nota:</strong> {{ restaurant.rating }}</p>
          <img :src="restaurant.image" alt="Imagem do restaurante" />
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        restaurants: [],
      };
    },
    async created() {
      const response = await axios.get("https://apifakedelivery.vercel.app/restaurants");
      this.restaurants = response.data;
    },
  };
  </script>
  
  <style>
  .restaurant-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 20px;
  }
  </style>
  