import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import React, { ReactNode, useEffect, useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import ShopIcon from "@mui/icons-material/Shop"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import Paper from "@mui/material/Paper"
import styles from "./Layout.module.css"
import { Link, useLocation } from "react-router-dom"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  // Router
  const { pathname } = useLocation()

  // Local State
  const [currentSelection, setCurrentSelection] = useState<string>()
  const [basketOpen, setBasketOpen] = useState<boolean>()

  // Event
  const handleBasket = () => {
    setBasketOpen((current) => {
      setCurrentSelection(current ? "basket" : pathname)
      return !current
    })
  }

  //  Effects
  useEffect(() => {
    setCurrentSelection(pathname)
  }, [pathname])

  return (
    <div className={styles.layoutContainer}>
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
            icon={<ShoppingBasketIcon />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  )
}
