import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import CategoryCardGrid from 'src/features/products/categoryCardGrid'
import ProductCollectionWrapper from 'src/features/products/collectionsWrapper'
import ProductDialog from 'src/features/products/productDialog'
import { GET_PRODUCTS } from 'src/features/products/queries'
import uniqueArray from 'src/features/utils/uniqueArray'

export default function AllProducts() {
    // Local State
    const [selectedProduct, setSelectedProduct] = useState<Product>()
    // Graph QL
    const allProducts = useQuery<ProductsData>(GET_PRODUCTS)

    if (allProducts.error) return <p>Error :(</p>
    if (!allProducts.data) return <p>Loading...</p>

    // Events
    const handleProductClick = (id: string, products: Product[]) => {
        const product = products.filter((product) => product.id === id)

        if (product.length > 1) {
            throw new Error(`Product had multiple id's`)
        }

        setSelectedProduct(product[0])
    }

    const products = allProducts.data.products
    const categories = products.map((product) => product.category)
    const uniqueCategories = uniqueArray(categories)

    return (
        <>
            {selectedProduct && (
                <ProductDialog
                    id={selectedProduct.id}
                    title={selectedProduct.title}
                    description={selectedProduct.description}
                    price={selectedProduct.price}
                    stock={selectedProduct.stock}
                    image={selectedProduct.image}
                    open={!!selectedProduct}
                    onClose={() => setSelectedProduct(undefined)}
                />
            )}
            <ProductCollectionWrapper title={'All Products'}>
                {uniqueCategories.map((category, index) => {
                    const productsMatchingCategory = products.filter(
                        (product) => product.category === category
                    )
                    return (
                        <div key={`${category}-${index}`}>
                            <CategoryCardGrid
                                products={productsMatchingCategory}
                                category={category}
                                onClickProductCard={(id) => handleProductClick(id, products)}
                            />
                        </div>
                    )
                })}
            </ProductCollectionWrapper>
        </>
    )
}
