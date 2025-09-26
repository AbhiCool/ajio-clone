import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import Kid from './pages/Kid'
import Men from './pages/Men'
import Women from './pages/Women'
import Layout from './pages/Layout'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/kid' element={<Kid />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<h1 style={{
            marginTop: "50px",
            textAlign: "center"
          }}>404-The page does not exist</h1>}></Route>
        </Route>


      </Routes>
    </div>
  )
}

export default App
