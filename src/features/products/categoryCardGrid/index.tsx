import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ListSubheader from '@mui/material/ListSubheader'
import React from 'react'
import ImageCard from './imageCard'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

type Props = {
    products: Product[]
    category: string
}

export default function CategoryCardGrid({ products, category }: Props) {
    console.log(category, { products })
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <ImageList
            cols={matches ? 2 : 1}
            sx={{
                mx: 2
            }}
        >
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div" sx={{ textTransform: 'capitalize' }}>
                    {category}
                </ListSubheader>
            </ImageListItem>
            {products.map((product) => (
                <ImageCard {...product} key={product.id} />
            ))}
        </ImageList>
    )
}
