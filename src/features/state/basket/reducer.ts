import { Reducer } from 'react'

const removeFromBasket = (state: BasketItems, payload: BasketItem) => {
    const inBasket = state.filter((item) => item.id === payload.id)

    if (inBasket.length === 0) {
        throw new Error('ID does not exist')
    }
    if (inBasket.length > 1) {
        throw new Error('Multiple with same ID')
    }

    const filterPayloadState = state.filter((item) => item.id !== payload.id)
    const currentItemInBasket = inBasket[0]
    const quantityOfItemInBasket = currentItemInBasket.quantity
    const newBasketItem = { ...currentItemInBasket, quantity: quantityOfItemInBasket - 1 }
    return [...filterPayloadState, newBasketItem]
}

const addToBasket = (state: BasketItems, payload: BasketItem) => {
    const alreadyInBasket = state.filter((item) => item.id === payload.id)
    if (alreadyInBasket.length === 1) {
        const filterPayloadState = state.filter((item) => item.id !== payload.id)
        const currentItemInBasket = alreadyInBasket[0]
        const quantityOfItemInBasket = currentItemInBasket.quantity
        const quantityOfPayload = payload.quantity
        const newQuantity = quantityOfItemInBasket + quantityOfPayload
        const newBasketItem = { ...currentItemInBasket, quantity: newQuantity }

        return [...filterPayloadState, newBasketItem]
    }
    if (alreadyInBasket.length > 1) {
        throw new Error('Multiple with same ID')
    }

    return [...state, payload]
}

export const initBasket = (initialState: BasketItems) => initialState

export const initialBasketState: BasketItems = []

export const basketReducers: Reducer<BasketItems, BasketActions> = (state: BasketItems, action) => {
    switch (action.type) {
        case 'add':
            return addToBasket(state, action.payload)
        case 'remove':
            return removeFromBasket(state, action.payload)
        case 'reset':
            return initBasket(initialBasketState)
        default:
            throw new Error('')
    }
}
