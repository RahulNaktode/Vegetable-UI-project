import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './view/Home.jsx'
import MyCard from './view/MyCart.jsx';
import Vegetable from './view/vegetable.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/vegetable' element={<Vegetable />} />
    <Route path='/mycart' element={<MyCard />} />
  </Routes>
  </BrowserRouter>
)
