import { useQuery } from '@apollo/client'
import React from 'react'
import CategoryCardGrid from 'src/features/products/categoryCardGrid'
import ProductCollectionWrapper from 'src/features/products/collectionsWrapper'
import { GET_PRODUCTS } from 'src/features/products/queries'
import uniqueArray from 'src/features/utils/uniqueArray'

export default function AllProducts() {
    // Graph QL
    const allProducts = useQuery<ProductsData>(GET_PRODUCTS)

    if (allProducts.error) return <p>Error :(</p>
    if (!allProducts.data) return <p>Loading...</p>

    const products = allProducts.data.products
    const categories = products.map((product) => product.category)
    const uniqueCategories = uniqueArray(categories)

    return (
        <ProductCollectionWrapper title={'All Products'}>
            {uniqueCategories.map((category, index) => {
                const productsMatchingCategory = products.filter(
                    (product) => product.category === category
                )
                return (
                    <div key={`${category}-${index}`}>
                        <CategoryCardGrid products={productsMatchingCategory} category={category} />
                    </div>
                )
            })}
        </ProductCollectionWrapper>
    )
}
