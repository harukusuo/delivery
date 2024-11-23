import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Array<{ id: string; name: string; price: number; quantity: number }>,
  }),
  actions: {
    addToCart(item: { id: string; name: string; price: number }) {
      const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(itemId: string) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },
  },
  getters: {
    totalPrice: (state) => state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
});