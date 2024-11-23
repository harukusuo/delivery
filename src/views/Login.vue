<template>
  <div class="login">
    <div class="content-box">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email" class="form-label">E-mail:</label>
          <input type="text" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password" class="form-label">Senha:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit" class="login-button">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("https://apifakedelivery.vercel.app/users", {
          email: this.email,
          password: this.password,
        });
        if (response.data.success) {
          this.$router.push("/restaurants");
        } else {
          alert("Usuário ou senha incorretos");
        }
      } catch (error) {
        alert("Erro ao fazer login");
      }
    },
  },
};
</script>

<style src="@/styles/Login.css"></style>