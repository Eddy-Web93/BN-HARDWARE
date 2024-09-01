import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Products from './Pages/Products/Products'
import Item from './Pages/Item/Item'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/item/:itemCategory/:itemId' element={<Item/>}/>
          <Route path='/place-order/:itemCategory/:itemId' element={<PlaceOrder/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App