import type { iBalanceValues } from "@/stores/balance"
import { computed, type Ref } from "vue"

interface iCalculateBalance {
  rateBRL: Ref<number>,
  balanceValues: iBalanceValues
}


export function useCalculateBalance({ rateBRL, balanceValues }: iCalculateBalance) {

  const tip = computed(() => balanceValues.tipPercentage / 100 * balanceValues.value)

  const total = computed(() => balanceValues.value + tip.value)

  const personValue = computed(() => total.value / balanceValues.people)

  const convertedToBRL = computed(() => personValue.value / rateBRL.value)
  
  return {
    tip,
    total,
    personValue,
    convertedToBRL
  }
}