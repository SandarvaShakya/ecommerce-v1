import './App.css';

import { Route, Routes } from 'react-router-dom';
import AddItem from './components/AddItem';
import Home from './components/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/supplier/add-item" element={<AddItem />} />
    </Routes>
  )
}

export default App;
