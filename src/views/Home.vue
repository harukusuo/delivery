<template>
  <div class="home background">
    <div class="content-box">
      <h1 class="welcome-text">Bem vindo ao Nhack!</h1>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Logo Nhack" class="logo" />
      </div>
      <p class="subtitle">aqui é onde sua fome termina</p>
    </div>
    <div class="spacer"></div>
    <router-link to="/login" class="login-button">Login</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style src="@/styles/Home.css"></style>