<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">{{ food?.name }}</h1>
        <img :src="food?.image" alt="food.name" class="my-4 w-full max-w-md rounded" />
        <p>{{ food?.description }}</p>
        <p class="text-lg font-bold">Preço: R$ {{ food?.price }}</p>
        <p class="text-sm text-gray-500">Avaliação: {{ food?.rating }}</p>
        <p class="text-sm text-gray-500">Entrega: R$ {{ food?.delivery }}</p>
        <p class="text-sm text-gray-500">Tempo de entrega: {{ food?.time }}</p>

        <button @click="addToCart(food)" class="btn mt-4">Adicionar ao Carrinho</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { Food } from '@/models/Food';

const route = useRoute();
const cartStore = useCartStore();
const food = ref<Food | null>(null);

onMounted(async () => {
    const foodId = route.params.id as string;

    const res = await fetch(`https://apifakedelivery.vercel.app/foods/${foodId}`);
    const resJson = await res.json();
    food.value = Food.fromJson(resJson);
});

const addToCart = (food: Food | null) => {
    if (food) cartStore.addToCart({ id: food.id, name: food.name, price: food.price });
};
</script>