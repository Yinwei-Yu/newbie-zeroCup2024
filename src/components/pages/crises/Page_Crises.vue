<script setup>
import Reason from "./Reason.vue";
import Type from "./Type.vue";
import Harm from "./Harm.vue";
</script>

<script>
export default {
  name: "Crises",
};
</script>

<template>
  <div class="definition">
    <h1 class="title">生态危机</h1>
    <p class="text">这是生态危机的定义</p>
  </div>
  <Reason />
  <Type />
  <Harm />
</template>

<style scoped></style>

<style scoped>
.definition {
    padding:150px;
    margin:20px;
}
.title {
   text-align: center;
}
.text{
   text-align: center;
}
</style>