<script>
export default {
  name: 'Importance'
}
</script>

<script setup>
import CardStack from './CardStack.vue';
</script>
<template>
  <div class="container">
    <h1 class="title">重要性</h1>
    <CardStack></CardStack>
  </div>

</template>

<style scoped>
.container {
  background-color: #f4dada;
  padding:200px;
  margin:20px;
}
.title {
    position: relative;
    top: -210px;
     left: -200px;
}
</style>