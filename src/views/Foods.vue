<template>
    <div class="foods">
      <h1>Pratos</h1>
      <div v-for="food in foods" :key="food.id" class="food-card">
        <router-link :to="`/foods/${food.id}`">
          <h2>{{ food.name }}</h2>
          <p><strong>Preço:</strong> R$ {{ food.price }}</p>
          <p><strong>Tempo:</strong> {{ food.time }}</p>
          <img :src="food.image" alt="Imagem do prato" />
        </router-link>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      foods: [],
    };
  },
  async created() {
    const response = await axios.get("https://apifakedelivery.vercel.app/foods");
    this.foods = response.data;
  },
};
</script>

<style src="@/styles/Foods.css"></style>