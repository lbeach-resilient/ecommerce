import { useQuery } from "@apollo/client"
import React from "react"
import { EXCHANGE_RATES } from "./queries"

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }: ExchangeRates) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}
