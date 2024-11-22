<template>
  <div id="app">
    <header>
      <h1>Nhack</h1>
      <nav>
        <router-link to="/">Usuários</router-link>
        <router-link to="/restaurants">Restaurantes</router-link>
        <router-link to="/foods">Pratos</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #ff6347;
  color: white;
  padding: 10px 0;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2em;
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
