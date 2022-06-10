import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './features/layout'
import Demo from './pages/demo'
import Home from './pages/home'
import AllProducts from './pages/allProducts'

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/all-products" element={<AllProducts />}></Route>
                    <Route path="/demo" element={<Demo />}></Route>
                </Routes>
            </Layout>
        </Router>
    )
}
