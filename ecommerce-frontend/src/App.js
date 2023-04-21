import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import AddItem from './components/AddItem';
import ShowItem from './components/ShowItem';
import Home from './components/Home';
import Cart from './components/Cart';


const App = () => {
  const [cartItem, setCartItem] = useState([])
  const [cartNumber, setCartNumber] = useState(0)

  return (
    <Routes>
      <Route path="/" exact element={<Home 
          cartItem={cartItem} 
          setCartItem={setCartItem}
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
        />} />
      <Route path="/supplier/add-item" element={<AddItem />} />
      <Route path="/cart" element={<Cart 
        cartItem={cartItem} 
        setCartItem={setCartItem} 
        cartNumber={cartNumber} 
        setCartNumber={setCartNumber}
      />} />
      <Route path='/supplier/all-products' element={<ShowItem />} />
    </Routes>
  )
}

export default App;
