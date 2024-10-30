<script setup>
import Logo from "./icons/Logo.vue";
</script>

<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar">
    <Logo>whu校徽</Logo>
    <ul class="nav-list">
      <li class="nav-item"><a href="/home">首页</a></li>
      <li class="nav-item"><a href="/projects">环保项目</a></li>
      <li class="nav-item"><a href="/cases">环保案例</a></li>
      <li class="nav-item"><a href="/susdev">可持续发展目标</a></li>
      <li class="nav-item"><a href="/crises">生态危机</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: end;
  position: relative;
  top: 0;
  width: 100%;
  background-color: #333;
  padding: 10px;
  margin: 0;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-item a:hover {
  color: white;
}
</style>
