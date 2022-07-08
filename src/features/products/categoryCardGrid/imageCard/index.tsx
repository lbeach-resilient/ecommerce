import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Typography from '@mui/material/Typography'
import React from 'react'
import ButtonWrapper from 'src/features/ui/buttonWrapper'
import InfoButton from 'src/features/ui/infoButton'

export default function ImageCard({ id, title, price, stock, image, onClick }: ImageCardProps) {
    return (
        <ImageListItem key={id}>
            <ButtonWrapper onClick={() => onClick(id)}>
                <img src={image} alt={title} loading="lazy" />
                <ImageListItemBar
                    title={title}
                    subtitle={`£${price}`}
                    actionIcon={
                        stock >= 1 ? (
                            <InfoButton
                                title={title}
                                onClick={() => onClick(id)}
                                tooltip={'Click for more details'}
                            />
                        ) : (
                            <Typography color="error">Out of Stock</Typography>
                        )
                    }
                />
            </ButtonWrapper>
        </ImageListItem>
    )
}
