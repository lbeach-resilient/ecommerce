import IconButton from '@mui/material/IconButton'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Typography from '@mui/material/Typography'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import Grid from '@mui/material/Grid'

export default function ImageCard({
    id,
    title,
    description,
    category,
    specs,
    price,
    stock,
    image
}: Product) {
    return (
        <ImageListItem key={id}>
            <img src={image} alt={title} loading="lazy" />
            <ImageListItemBar
                title={title}
                subtitle={`£${price}`}
                actionIcon={
                    stock >= 1 ? (
                        <IconButton aria-label={`info about ${title}`}>
                            <InfoIcon />
                        </IconButton>
                    ) : (
                        <Typography color="error">Out of Stock</Typography>
                    )
                }
            />
        </ImageListItem>
    )
}
