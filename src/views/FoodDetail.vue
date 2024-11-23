<template>
  <div class="food-detail">
    <h1>{{ food.name }}</h1>
    <img :src="food.image" alt="Imagem do prato" />
    <p><strong>Preço:</strong> R$ {{ food.price }}</p>
    <p><strong>Tempo de entrega:</strong> {{ food.time }}</p>
    <p><strong>Taxa de entrega:</strong> R$ {{ food.delivery }}</p>
    <p><strong>Nota:</strong> {{ food.rating }}</p>
    <p>{{ food.description }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      food: null,
    };
  },
  async created() {
    const foodId = this.$route.params.id;
    const response = await axios.get(`https://apifakedelivery.vercel.app/foods/${foodId}`);
    this.food = response.data;
  },
};
</script>

<style src="@/styles/FoodDetail.css"></style>