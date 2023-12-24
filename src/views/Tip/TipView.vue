<template>
  <section class="home">
    <div class="home__container">
      <CalculateView />
    </div>

    <div class="home__container result">
      <ResultView />
    </div>
  </section>
</template>

<script setup lang="ts">
import CalculateView from './components/calculate/CalculateView.vue'
import ResultView from './components/result/ResultView.vue'
</script>

<style lang="less">
.home {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  justify-content: center;

  &__container {
    display: flex;
    justify-content: center;
    flex-grow: 1;

    @media @smartphone {
      &.result {
        display: none;
      }
    }
  }
}
</style>
