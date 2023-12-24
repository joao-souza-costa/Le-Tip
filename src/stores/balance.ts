import { reactive, ref, watch } from 'vue'
import { CURRENCY_ENUM } from '@/constants/enums/balance'
import { defineStore } from 'pinia'
import currencyService from '@/services/currencyService'
import { useCalculateBalance } from '@/composable/useCalculateBalance'

export interface iBalanceValues {
  currency: CURRENCY_ENUM
  symbol: string
  value: number
  tipPercentage: number
  people: number
}

export const useBalanceStore = defineStore('balance', () => {

  const rateBRL = ref(0)

  const balanceValues = reactive<iBalanceValues>({
    symbol: "€",
    currency: CURRENCY_ENUM.EUR,
    value: 0,
    tipPercentage: 10,
    people: 2
  })

  const balanceCalculated = useCalculateBalance({
    rateBRL,
    balanceValues,
  })

  const handleBalanceValuesCurrencyWatch = async (value: CURRENCY_ENUM) => {
    const { symbol, rateBRL: rBRL, rateChosen, } = await currencyService.fetchCurrencyConversion(value)
    balanceValues.symbol = symbol
    rateBRL.value = rBRL
    balanceValues.value = Number((balanceValues.value * rateChosen).toFixed(2))
  }

  watch(() => balanceValues.currency,
    handleBalanceValuesCurrencyWatch,
    { immediate: true })

  return {
    balanceValues,
    ...balanceCalculated,
  }
})
