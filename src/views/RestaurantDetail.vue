<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">{{ restaurant?.name }}</h1>
        <p>{{ restaurant?.description }}</p>
        <p class="text-sm text-gray-500">Avaliação: {{ restaurant?.rating }} ⭐</p>
        <img :src="restaurant?.image" alt="restaurant.name" class="my-4 w-full max-w-md rounded" />

        <h2 class="text-xl font-bold mt-6 mb-4">Cardápio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="food in foods" :key="food.id" class="card">
                <img :src="food.image" alt="food.name" class="card-img" />
                <h3 class="text-lg">{{ food.name }}</h3>
                <p>R$ {{ food.price }}</p>
                <button @click="addToCart(food)" class= "text-neutral-950 hover:text-red-600 font-bold">Adicionar ao Carrinho</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { Restaurant } from '@/models/Restaurant';
import { Food } from '@/models/Food';

const route = useRoute();
const cartStore = useCartStore();
const restaurant = ref<Restaurant | null>(null);
const foods = ref<Food[]>([]);

onMounted(async () => {
    const restaurantId = route.params.id as string;

    const res = await fetch(`https://apifakedelivery.vercel.app/restaurants/${restaurantId}`);
    const resJson = await res.json();
    restaurant.value = Restaurant.fromJson(resJson);

    const foodRes = await fetch('https://apifakedelivery.vercel.app/foods');
    const foodJson = await foodRes.json() as any[];
    foods.value = foodJson.map(food => Food.fromJson(food)).filter((food: Food) => food.restaurantId === restaurantId);
});

const addToCart = (food: Food) => {
    cartStore.addToCart({ id: food.id, name: food.name, price: food.priceRaw });
};
</script>