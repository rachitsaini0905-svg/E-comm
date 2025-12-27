import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './components/ProductPage'

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Main content */}
      <main className="px-12 pt-24 h-auto">
        <Routes>
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
