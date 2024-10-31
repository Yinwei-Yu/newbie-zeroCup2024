<template>
  <div class="slideshow-container">
    <!-- 显示当前幻灯片内容 -->
    <transition name="fade">
      <div class="slide" v-if="slides[currentSlide]">
        <img :src="slides[currentSlide].img" alt="Slide" class="slide-img"/>
      </div>
    </transition>

    <!-- 幻灯片导航按钮 -->
    <div class="controls">
      <button @click="prevSlide" :disabled="currentSlide === 0"><</button>
      <button @click="nextSlide" :disabled="currentSlide === slides.length - 1">></button>
      <button @click="toggleAutoPlay">
        {{ isPlaying ? '暂停' : '自动播放' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  data() {
    return {
      currentSlide: 0,
      isPlaying: false,
      autoPlayInterval: null,
      slides: [
        { img: 'src/img/home-page-slide-1.png' },
        { img: 'src/img/home-page-slide-2.jpeg' },
        { img: 'src/img/home-page-slide-3.jpg' },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    toggleAutoPlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.startAutoPlay();
      } else {
        this.stopAutoPlay();
      }
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        if (this.currentSlide < this.slides.length - 1) {
          this.currentSlide++;
        } else {
          this.currentSlide = 0; // 循环播放
        }
      }, 3000); // 每 3 秒切换一页
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    },
  },
  beforeUnmount() {
    // 清理定时器以防止内存泄漏
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.slideshow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
}

.slide {
  margin-bottom: 20px;
}
.slide-image{
  width: 100%;
  height: auto;
  transition: opacity 1s ease;
}
.controls {
  display: flex;
  gap: 10px;
}

/* 过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
