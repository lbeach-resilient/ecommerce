type Product = {
    id: string
    title: string
    description: string
    category: string
    specs: Specifications
    price: string
    stock: number
    image: string
}
type ProductsData = {
    products: Product[]
}
type ProductsByData = {
    productsBy: Product
}

type ProductsByVars = {
    productsById: string
}
