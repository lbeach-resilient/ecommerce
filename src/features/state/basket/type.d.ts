type BasketItem = Pick<Product, 'id' | 'price' | 'title'> & { quantity: number }

type BasketItems = BasketItem[]

type Basket = {
    basketItems: BasketItem[]
    dispatch: React.Dispatch<BasketActions>
}
type ActionTypes = 'add' | 'remove' | 'reset'

type BasketActions = { type: ActionTypes; payload: BasketItem }

type BasketContext = Context<Basket>
type BasketReducer = [BasketItems, React.Dispatch<BasketActions>]
