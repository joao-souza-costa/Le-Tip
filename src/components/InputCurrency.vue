<template>
  <div class="input-currency">
    <span class="input-currency__label">Valor</span>
    <div class="input-currency__container">
      <InputCurrency
        class="input-currency__container__value"
        v-model="value"
        v-bind="number"
        @input:model-value="handleValue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { component as InputCurrency } from '@coders-tm/vue-number-format'
import { computed, ref, watch } from 'vue'

type tProps = {
  modelValue: number
  symbol: string
}

type tEmit = {
  (e: 'update:modelValue', v: number): number
}

const props = defineProps<tProps>()
const emit = defineEmits<tEmit>()

const value = ref('')
const contentCSS = computed(() => `"${props.symbol}"`)

watch(
  () => props.symbol,
  () => (value.value = props.modelValue.toFixed(2)),
  {
    immediate: true
  }
)

const number = {
  decimal: '.',
  separator: ',',
  precision: 2,
  masked: true,
  min: 0,
  nullValue: 0,
  reverseFill: true
}

const handleValue = (value: string) => {
  return emit('update:modelValue', Number(value))
}
</script>

<style scoped lang="less">
.input-currency {
  display: flex;
  justify-content: center;
  align-items: end;

  &__label {
    margin-right: 40px;
  }

  &__container {
    font-size: 32px;

    &::before {
      position: relative;
      bottom: 2px;
      right: 4px;
      content: v-bind(contentCSS);
    }

    &__value {
      outline: 1px solid;
      text-align: right;
      width: 110px;
    }
  }
}
</style>
