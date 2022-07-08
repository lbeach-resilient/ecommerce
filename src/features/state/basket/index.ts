import React, { useReducer } from 'react'
import { basketReducers, initBasket, initialBasketState } from './reducer'

const useBasket = (): BasketReducer => {
    const basketReducer = useReducer(basketReducers, initialBasketState, initBasket)

    return basketReducer
}

export default useBasket
