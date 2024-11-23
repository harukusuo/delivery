<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Carrinho</h1>
  
      <div v-if="cartItems.length === 0" class="text-gray-500">
        O carrinho está vazio.
      </div>
  
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="flex justify-between items-center mb-4">
          <div>
            <h3 class="text-lg">{{ item.name }}</h3>
            <p>R$ {{ item.price }} x {{ item.quantity }}</p>
          </div>
          <button @click="removeFromCart(item.id)" class="text-neutral-950 hover:text-red-600">Remover</button>
        </div>
        <p class="text-lg font-bold mt-6">Total: R$ {{ totalPrice }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCartStore } from '@/stores/cart';
  
  const cartStore = useCartStore();
  const cartItems = cartStore.cartItems;
  const totalPrice = cartStore.totalPrice;
  
  const removeFromCart = (id: string) => {
    cartStore.removeFromCart(id);
  };
  </script>
  