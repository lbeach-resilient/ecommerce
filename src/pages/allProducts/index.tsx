import { useQuery } from '@apollo/client'
import React from 'react'
import CardGrid from 'src/features/products/cardGrid'
import ProductCollectionWrapper from 'src/features/products/collectionsWrapper'
import { GET_PRODUCTS } from 'src/features/products/queries'

export default function AllProducts() {
    // Graph QL
    const allProducts = useQuery<ProductsData>(GET_PRODUCTS)

    if (allProducts.error) return <p>Error :(</p>
    if (!allProducts.data) return <p>Loading...</p>

    return (
        <ProductCollectionWrapper title={'All Products'}>
            <CardGrid products={allProducts.data.products} />
        </ProductCollectionWrapper>
    )
}
