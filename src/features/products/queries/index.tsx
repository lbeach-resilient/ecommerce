import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
    query Products {
        products {
            id
            title
            description
            category
            specs {
                adjective
                color
            }
            price
            stock
            image
        }
    }
`

export const GET_PRODUCT_BY_ID = gql`
    query Product($productById: ID) {
        productById(id: $productById) {
            id
            title
            description
            category
            specs {
                adjective
                color
            }
            price
            stock
            image
        }
    }
`
