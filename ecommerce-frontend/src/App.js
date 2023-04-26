import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

import AddItem from './components/AddItem';
import ShowItem from './components/ShowItem';
import UpdateItem from './components/UpdateItem';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';


const App = () => {
  const [cartItem, setCartItem] = useState([])
  const [cartNumber, setCartNumber] = useState(0)
  const [login, setLogin] = useState(false)

  return (
    <Routes>
      <Route path='/' element={<Login 
        login={login}
        setLogin={setLogin}
      />} />
      {
        localStorage.getItem('login') ?  
        [
          <Route path="/home" element={<Home 
              cartItem={cartItem} 
              setCartItem={setCartItem}
              cartNumber={cartNumber}
              setCartNumber={setCartNumber}
            />} />,
          <Route path="/cart" element={<Cart 
            cartItem={cartItem} 
            setCartItem={setCartItem} 
            cartNumber={cartNumber} 
            setCartNumber={setCartNumber}
          />} />
        ]
        : null
      }
      <Route path="/supplier/add-item" element={<AddItem />} />
      <Route path='/supplier/all-products' element={<ShowItem />} />
      <Route path='/supplier/update-product/:id' element={<UpdateItem />} />
      <Route path={"*"} element={ <Navigate to={ "/" }/> }/>
    </Routes>
  )
}

export default App;
