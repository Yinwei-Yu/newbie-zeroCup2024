<!-- 主界面的 定义 板块 -->
<script>
export default {
  name: 'Definition'
}
</script>

<script setup>
import SlideShow from "./Slide.vue";
</script>

<template>
  <div class="container">
    <h1 class="title">定义</h1>
    <p class="definition_text">生态文明的定义：
      生态文明是人类文明发展的一个新的阶段，即工业文明之后的文明形态；生态文明是人类遵循人、自然、社会和谐发展这一客观规律而取得的物质与精神成果的总和。
      生态文明是以人与自然、人与人、人与社会和谐共生、良性循环、全面发展、持续繁荣为基本宗旨的社会形态。
      从人与自然和谐的角度，吸收十八大成果的定义是：生态文明是人类为保护和建设美好生态环境而取得的物质成果、精神成果和制度成果的总和，是贯穿于经济建设、政治建设、文化建设、社会建设全过程和各方面的系统工程，反映了一个社会的文明进步状态。
    </p>
    <SlideShow></SlideShow>
  </div>
</template>

<style scoped>
.container {
  background-color: #f4dada;
  padding: 200px;
  margin: 85px 20px 20px;
}

.title {
  position: relative;
  top: -210px;
  left: -200px;
}

.definition_text {
  position: relative;
  top: -200px;
  left: -200px;
  font-size: 20px;
  font-family: "Kaiti", "楷体";
}
</style>