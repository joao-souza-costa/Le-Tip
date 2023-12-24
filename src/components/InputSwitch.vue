<template>
  <div class="input-switch">
    <span class="input-switch__label">EUR</span>
    <label class="switch">
      <input v-model="value" type="checkbox" />
      <span class="slider"></span>
    </label>
    <span class="input-switch__label">USD</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type tProps = {
  modelValue?: boolean
  defaultValue?: boolean
}

type tEmit = {
  change: [value: boolean]
  'update:modelValue': [value: boolean]
}

const props = withDefaults(defineProps<tProps>(),{
  defaultValue:false
})
const emit = defineEmits<tEmit>()

const value = computed({
  get() {
    return props.modelValue || props.defaultValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
    emit('change', value)
  }
})
</script>

<style scoped>
.input-switch {
  margin: auto;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.switch {
  outline: 1px solid black;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(45deg, #ccc, #ccc 10px, #999696 10px, #999696 20px);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  outline: 1px solid black;

  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
