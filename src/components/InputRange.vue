<template>
  <div class="input-range">
    <div class="input-range__label">
      <label :for="label">
        {{ label }}:
        <slot />
      </label>
    </div>
    <div class="input-range__container">
      <span> {{ min }}</span>
      <input v-model="value" type="range" :id="label" :name="label" :min="min" :max="max" />
      <span> {{ max }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type tProps = {
  modelValue: number
  min: number
  max: number
  name: string
  label: string
}

type tEmit = {
  (e: 'update:modelValue', v: number): number
}

const props = defineProps<tProps>()
const emit = defineEmits<tEmit>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: number) {
    return emit('update:modelValue', Number(value))
  }
})
</script>

<style scoped lang="less">
.input-range {
  &__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
  }
}

input[type='range'] {
  height: 29px;
  width: 80%;
  -webkit-appearance: none;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #000000;
  border-radius: 3px;
  border: 0px solid #000000;
}
input[type='range']::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #000000;
  height: 23px;
  width: 23px;
  border-radius: 25px;
  background: #000000;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #000000;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #000000;
  border-radius: 3px;
  border: 0px solid #000000;
}
input[type='range']::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #000000;
  height: 23px;
  width: 23px;
  border-radius: 25px;
  background: #000000;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #000000;
  border: 0px solid #000000;
  border-radius: 6px;
  box-shadow: 0px 0px 0px #000000;
}
input[type='range']::-ms-fill-upper {
  background: #000000;
  border: 0px solid #000000;
  border-radius: 6px;
  box-shadow: 0px 0px 0px #000000;
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #000000;
  height: 23px;
  width: 23px;
  border-radius: 25px;
  background: #000000;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: #000000;
}
input[type='range']:focus::-ms-fill-upper {
  background: #000000;
}
</style>
