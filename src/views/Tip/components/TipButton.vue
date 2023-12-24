<template>
  <button class="tip-button">
    <slot />
  </button>
</template>

<style scoped>
.tip-button {
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;
  color: white;
}
</style>
