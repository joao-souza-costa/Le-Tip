<template>
  <section class="result">
    <div class="result__container">
      <span class="result__container__label">Conta</span>
      <p class="result__container__value">
        {{ balanceValues.symbol }} {{ balanceValues.value.toFixed(2) }}
      </p>
    </div>

    <div class="result__container">
      <span class="result__container__label">Gorjeta</span>
      <p class="result__container__value">
        {{ balanceValues.symbol }} {{ balanceStore.tip.toFixed(2) }}
      </p>
    </div>

    <div class="result__container">
      <span class="result__container__label">Total</span>
      <p class="result__container__value">
        {{ balanceValues.symbol }} {{ balanceStore.total.toFixed(2) }}
      </p>
    </div>

    <div class="result__container">
      <span class="result__container__label">por Pessoa</span>
      <p class="result__container__value">
        {{ balanceValues.symbol }} {{ balanceStore.personValue.toFixed(2) }}
      </p>
    </div>

    <div class="result__container">
      <span class="result__container__label">em R$</span>
      <p class="result__container__value">R$ {{ balanceStore.convertedToBRL.toFixed(2) }}</p>
    </div>
  </section>

  <tip-button class="button" @click="handleRouteResult"> {{ '<' }} </tip-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TipButton from '../TipButton.vue'
import { useBalanceStore } from '@/stores/balance'
import { CALCULATE_ROUTE } from '@/constants/routes'

const router = useRouter()
const balanceStore = useBalanceStore()
const balanceValues = balanceStore.balanceValues

const handleRouteResult = (): void => {
  router.push(CALCULATE_ROUTE)
}
</script>

<style lang="less">
.result {
  &__container {
    text-align: center;
    margin-bottom: 40px;

    &__value {
      font-size: 32px;
      font-weight: bold;
    }
  }
}

@media @desktop {
  &.button {
    display: none;
  }
}
</style>
