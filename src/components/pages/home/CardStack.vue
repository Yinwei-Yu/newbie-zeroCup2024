<template>
  <div class="stacked-cards">
    <div v-for="(card, index) in cards" :key="card.id" class="card"
      :class="{ expanded: isHovered || activeCard === index }" :style="{
        transform: isHovered || activeCard === index
          ? `translateX(${index * 250}px)`
          : `translateX(${index * 10}px)`,
        zIndex: isHovered || activeCard === index ? cards.length - index : cards.length - index // 堆叠顺序相反
      }" @mouseenter="onHover(index)" @mouseleave="onLeave">
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-content" v-if="isHovered || activeCard === index">{{ card.details }}</p>
      <p class="card-summary" v-else>{{ index === 0 ? card.details : '' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      activeCard: null,
      cards: [
        { id: 1, title: 'Card 1', summary: 'Brief info about Card 1', details: 'Detailed information about Card 1.' },
        { id: 2, title: 'Card 2', summary: 'Brief info about Card 2', details: 'Detailed information about Card 2.' },
        { id: 3, title: 'Card 3', summary: 'Brief info about Card 3', details: 'Detailed information about Card 3.' },
      ],
    };
  },
  methods: {
    onHover(index) {
      this.isHovered = true;
      this.activeCard = index;
    },
    onLeave() {
      this.isHovered = false;
      this.activeCard = null;
    },
  },
};
</script>

<style scoped>
.stacked-cards {
  position: relative;
  width: 250px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, opacity 0.3s ease, z-index 0.3s ease;
  border-radius: 8px;
  padding: 20px;
  opacity: 0.9;
}

.card.expanded {
  transition: transform 0.5s ease-in-out;
}

.card-title {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.card-summary {
  font-size: 0.9em;
  color: #666;
}

.card-content {
  font-size: 1em;
  color: #333;
}
</style>
