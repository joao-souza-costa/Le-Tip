import { CURRENCY_ENUM } from "@/constants/enums/balance";
import clientGraphql from "./clientGraphql";

const convertCurrenciesParams = {
  USD: ["BRL", "EUR"],
  EUR: ["BRL", "USD"],
  BRL: ["EUR", "USD"],
}

interface iFetchCurrencyConversionResponse {
  symbol: string
  rateBRL: number
  rateChosen: number
}


export default {
  fetchCurrencyConversion(currency: CURRENCY_ENUM): Promise<iFetchCurrencyConversionResponse> {
    const schema = `{
      currencyConversion(baseCurrency: "${currency}", convertCurrencies: ${JSON.stringify(convertCurrenciesParams[currency])}) {
      baseCurrencyInfo {
        code
        symbol
      }
      conversions {
        rate
      }
    }
  }`
    return clientGraphql.query(schema).then(({ data: { currencyConversion } }) => ({
      symbol: currencyConversion.baseCurrencyInfo.symbol,
      rateBRL: currencyConversion.conversions[0].rate.toFixed(3),
      rateChosen: Number(currencyConversion.conversions[1].rate.toFixed(3))
    }))
  }
}