<template>
    <div>
      <h1>Usuários</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="`/users/${user.id}`">{{ user.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        users: [],
      };
    },
    async created() {
      const response = await axios.get("https://apifakedelivery.vercel.app/users");
      this.users = response.data;
    },
  };
  </script>
  