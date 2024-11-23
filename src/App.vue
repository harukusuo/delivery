<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-red-600 text-white py-4">
      <div class="container mx-auto flex justify-between items-center max-w-screen-md">
        <h1 class="text-xl font-bold">Nhack Delivery</h1>
        <nav>
          <router-link to="/" class="text-gray-300 hover:text-white mx-2">Home</router-link>
          <router-link to="/cart" class="text-gray-300 hover:text-white mx-2">Carrinho</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex flex-1 container mx-auto py-6 max-w-screen-md">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-red-600 text-gray-300 py-4">
      <div class="container mx-auto text-center">
        &copy; 2024 Nhack Delivery. Todos os direitos reservados.
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// No special logic is required here for the basic layout
</script>

<style scoped>
/* Scoped styles if needed */
</style>