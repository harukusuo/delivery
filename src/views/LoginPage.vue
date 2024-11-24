<template>
  <div class="flex flex-1 flex-col items-center justify-center m-auto">
    <h1 class="text-3xl font-bold mb-6">Entrar</h1>
    <form class="flex flex-col items-center space-y-4 w-1/3">
      <input type="email" placeholder="Email" class="input border border-gray-300 rounded-full px-4" v-model="email" />
      <input type="password" placeholder="Senha" class="input border border-gray-300 rounded-full px-4" v-model="password" />
      <button class="bg-red-600 hover:bg-red-700 text-gray-200 hover:text-gray-200 py-4 px-6 rounded-full" @click.prevent="login">Login</button>
    </form>
  </div>
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat custom-bg"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const login = () => {
  // Fake login logic
  router.push('/home');
};
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
}
.custom-bg {
  background-image: url('@/assets/background.jpg');
  z-index: -1;
}
</style>