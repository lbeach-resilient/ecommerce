import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ShopIcon from '@mui/icons-material/Shop'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Paper from '@mui/material/Paper'
import styles from './Layout.module.css'
import { Link, useLocation } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import { BasketContext } from '../state/basket/context'
import BasketDialog from '../basketDialog'

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    // Router
    const { pathname } = useLocation()

    // Local State
    const [currentSelection, setCurrentSelection] = useState<string>()
    const [basketOpen, setBasketOpen] = useState<boolean>(false)

    // Context

    const basket = useContext(BasketContext)

    // Event
    const handleBasket = () => {
        setBasketOpen((current) => {
            setCurrentSelection(current ? 'basket' : pathname)
            return !current
        })
    }

    //  Effects
    useEffect(() => {
        setCurrentSelection(pathname)
    }, [pathname])

    return (
        <div className={styles.layoutContainer}>
            <BasketDialog
                open={basketOpen}
                onClose={() => setBasketOpen(false)}
                rows={basket.basketItems}
            />
            {children}
            <Paper className={styles.navigation} elevation={3}>
                <BottomNavigation value={currentSelection}>
                    <BottomNavigationAction
                        label="Home"
                        value="/"
                        className={styles.link}
                        icon={
                            <Link to="/">
                                <HomeIcon />
                            </Link>
                        }
                    />

                    <BottomNavigationAction
                        label="Shop"
                        value="/shop"
                        className={styles.link}
                        icon={
                            <Link to="/shop">
                                <ShopIcon />
                            </Link>
                        }
                    />

                    <BottomNavigationAction
                        label="Basket"
                        value="basket"
                        onClick={handleBasket}
                        icon={
                            <Badge badgeContent={basket.basketItems.length} color="primary">
                                <ShoppingBasketIcon />
                            </Badge>
                        }
                    />
                </BottomNavigation>
            </Paper>
        </div>
    )
}
