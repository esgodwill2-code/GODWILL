<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav aria-label="Main navigation">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/news">News</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

nav ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  background-color: #333;
  list-style-type: none;
}

nav a {
  display: block;
  padding: 14px 16px;
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a:focus-visible,
nav a.router-link-exact-active {
  background-color: #111;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

section {
  scroll-margin-top: 16px;
  padding: 12px 0;
}

h2,
p {
  margin: 10px;
}

.home-page {
  text-align: center;
}

.home-page img {
  width: min(100%, 360px);
  height: auto;
  border-radius: 8px;
}
</style>
