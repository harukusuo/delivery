<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Restaurantes</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div v-for="restaurant in restaurants" :key="restaurant.id" class="flex flex-col shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img :src="restaurant.image" alt="restaurant.name" class="" />
                <h2 class="text-red-600 font-bold">{{ restaurant.name }}</h2>
                <p>{{ restaurant.description }}</p>
                <button @click="viewDetails(restaurant.id)" class="text-neutral-950 hover:text-red-600 font-bold mt-auto">Ver Detalhes</button>
            </div>
        </div>
        <h1 class="text-2xl font-bold mt-8 mb-4">Recomendados</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="food in recommendedFoods" :key="food.id" class="flex flex-col shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img :src="food.image" alt="food.name" class="max-h-32 object-cover" />
                <h2 class="text-red-600 font-bold">{{ food.name }}</h2>
                <p>R$ {{ food.price }}</p>
                <button @click="addToCart(food)" class= "text-neutral-950 hover:text-red-600 font-bold">Adicionar ao Carrinho</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '../stores/cart';
import { useRouter } from 'vue-router';
import { Restaurant } from '@/models/Restaurant';
import { Food } from '@/models/Food';

const router = useRouter();
const restaurants = ref([] as Restaurant[]);
const recommendedFoods = ref([] as Food[]);
const cartStore = useCartStore();

onMounted(async () => {
    const restaurantRes = await fetch('https://apifakedelivery.vercel.app/restaurants');
    const restaurantsJson = await restaurantRes.json() as any[];
    restaurants.value = restaurantsJson.map(restaurant => Restaurant.fromJson(restaurant));

    const foodRes = await fetch('https://apifakedelivery.vercel.app/foods');
    const foodsJson = await foodRes.json() as any[];
    recommendedFoods.value = foodsJson.map(food => Food.fromJson(food)).slice(0, 3);
});

const viewDetails = (id: string) => router.push(`/restaurant/${id}`);
const addToCart = (food: any) => cartStore.addToCart({ id: food.id, name: food.name, price: food.price });
</script>