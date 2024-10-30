<script setup>
import Definition from "./Definition.vue";
import Importance from "./Importance.vue";
import AboutUs from "./AboutUs.vue";
</script>

<script>
export default {
  name: 'Home'
}
</script>

<template>
    <div> <HeadLine /></div>
    <div>
    <Definition />
    <Importance />
    <AboutUs />
    </div>
</template>