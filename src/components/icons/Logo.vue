<template>
  <div class="logo">
    <img src="/src/assets/logo-whu.png" alt="Logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
}

.logo img {
  width: 50px;
  /* Adjust the size as needed */
  height: auto;
}
</style>