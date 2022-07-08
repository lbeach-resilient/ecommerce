import React from 'react'

export const BasketContext = React.createContext<Basket>({
    basketItems: [],
    dispatch: () => ({})
})
