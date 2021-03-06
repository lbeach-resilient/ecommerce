import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './features/layout'
import Demo from './pages/demo'
import Home from './pages/home'
import AllProducts from './pages/allProducts'
import Shop from './pages/shop'
import { CssBaseline, responsiveFontSizes, ThemeProvider, useMediaQuery } from '@mui/material'
import { darkTheme, lightTheme } from './styles'
import useBasket from './features/state/basket'
import { BasketContext } from './features/state/basket/context'

export default function App() {
    // Styling
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const theme = responsiveFontSizes(prefersDarkMode ? darkTheme : lightTheme)

    // Reducer
    const [basketState, basketDispatch] = useBasket()

    return (
        <ThemeProvider theme={theme}>
            <BasketContext.Provider value={{ basketItems: basketState, dispatch: basketDispatch }}>
                <CssBaseline enableColorScheme />
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/all-products" element={<AllProducts />} />
                            <Route path="/demo" element={<Demo />} />
                        </Routes>
                    </Layout>
                </Router>
            </BasketContext.Provider>
        </ThemeProvider>
    )
}
