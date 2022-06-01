import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./features/layout"
import Demo from "./pages/demo"
import Shop from "./pages/shop"

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Demo />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </Layout>
    </Router>
  )
}
