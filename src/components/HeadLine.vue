<script setup>
  import Logo from './icons/Logo.vue';
</script>


<template>
  <Logo></Logo>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><a href="#">首页</a></li>
      <li class="nav-item"><a href="#">环保项目</a></li>
      <li class="nav-item"><a href="#">环保案例</a></li>
      <li class="nav-item"><a href="#">可持续发展目标</a></li>
      <li class="nav-item"><a href="#">生态危机</a></li>
    </ul>
  </nav>
</template>

<script>


export default {
  name: 'HeadLine'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: end;
  position: relative;
  top: 0;
  width: 100%;
  background-color: transparent;
  padding: 10px;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

.nav-item  {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-item a:hover {
  color: #007bff;
}
</style>