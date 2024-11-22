
<template>
  <div>
    <h1>{{ restaurant.name }}</h1>
    <img :src="restaurant.image" alt="Imagem do restaurante" />
    <p><strong>Nota:</strong> {{ restaurant.rating }}</p>
    <p>{{ restaurant.description }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      restaurant: null,
    };
  },
  async created() {
    const restaurantId = this.$route.params.id;
    const response = await axios.get(`https://apifakedelivery.vercel.app/restaurants/${restaurantId}`);
    this.restaurant = response.data;
  },
};
</script>