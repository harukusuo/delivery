<template>
    <div class="user-detail">
      <h1>Detalhes do Usuário</h1>
      <p><strong>Nome:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Saldo:</strong> R$ {{ user.saldo }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const userId = this.$route.params.id;
    const response = await axios.get(
      `https://apifakedelivery.vercel.app/users/${userId}`
    );
    this.user = response.data;
  },
};
</script>

<style src="@/styles/UserDetails.css"></style>