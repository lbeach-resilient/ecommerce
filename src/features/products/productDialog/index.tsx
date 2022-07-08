import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import React, { useContext } from 'react'
import { BasketContext } from 'src/features/state/basket/context'
import styles from './productDialog.module.css'

export default function ProductDialog({
    id,
    title,
    description,
    price,
    stock,
    image,
    open,
    onClose
}: ProductDialogProps) {
    // Context
    const basket = useContext(BasketContext)

    console.log(basket)

    const handleAddToCart = () => {
        basket.dispatch({ type: 'add', payload: { id, title, price, quantity: 1 } })
    }
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth={'lg'}>
            <Box className={styles.rootContainer} id={id}>
                <Box className={styles.containerLeft}>
                    <Box className={styles.titleAndDescription}>
                        <Typography variant="h4">{title}</Typography>
                        <Typography variant="h6">£{price}</Typography>
                        <Box>
                            <Typography variant="h5">Description:</Typography>
                            <Typography>{description}</Typography>
                        </Box>
                    </Box>

                    <Typography>Stock Remaining: {stock}</Typography>
                </Box>
                <Box className={styles.containerRight}>
                    <img src={image} className={styles.image} />
                    <Box className={styles.containerButtons}>
                        <Button variant="contained" onClick={handleAddToCart}>
                            Add to Basket
                        </Button>
                        <Button variant="contained" onClick={onClose}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}
