<template>
  <div class="app-container">
    <header class="header">
      <h1 class="header__title">Le/Tip</h1>
    </header>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="less">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100svh;

  .header {
    width: 100%;
    padding: 4rem;

    &__title {
      text-align: center;
      font-size: 4rem;
    }
  }

  .container {
    flex: 1;
    width: 100%;
  }
}
</style>
