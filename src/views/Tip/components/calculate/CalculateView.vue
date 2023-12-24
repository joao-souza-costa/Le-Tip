<template>
  <section class="calculate">
    <div class="calculate__input">
      <InputSwitch @change="handleSwitchChange" />
    </div>

    <div class="calculate__input">
      <InputCurrency :symbol="balanceValues.symbol" v-model="balanceStore.balanceValues.value" />
    </div>

    <div class="calculate__input">
      <InputRange
        label="Gorjeta"
        name="tip"
        :min="10"
        :max="20"
        v-model="balanceValues.tipPercentage"
      >
        <span class="calculate__input__range"> {{ balanceValues.tipPercentage }}% </span>
      </InputRange>
    </div>

    <div class="calculate__input">
      <InputRange label="Pessoas" name="tip" :min="2" :max="16" v-model="balanceValues.people">
        <span class="calculate__input__range"> {{ balanceValues.people }} </span>
      </InputRange>
    </div>
  </section>

  <tip-button class="button" @click="handleRouteResult"> > </tip-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import InputSwitch from '@/components/InputSwitch.vue'
import InputCurrency from '@/components/InputCurrency.vue'
import InputRange from '@/components/InputRange.vue'
import TipButton from '../TipButton.vue'
import { useBalanceStore } from '@/stores/balance'
import { CURRENCY_ENUM } from '@/constants/enums/balance'
import { RESULT_ROUTE } from '@/constants/routes'

const router = useRouter()
const balanceStore = useBalanceStore()
const balanceValues = balanceStore.balanceValues

const handleSwitchChange = (value: boolean): void => {
  balanceValues.currency = value ? CURRENCY_ENUM.USD : CURRENCY_ENUM.EUR
}

const handleRouteResult = (): void => {
  router.push(RESULT_ROUTE)
}
</script>

<style lang="less">
.calculate {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    margin-bottom: 40px;
    width: 200px;

    &__range {
      color: black;
      font-weight: bold;
      font-size: 32px;
    }
  }
}

@media @desktop {
  &.button {
    display: none;
  }
}
</style>
