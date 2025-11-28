import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './view/Home.jsx'
import Vegetables from './../src/view/Vegetable.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/vegetable' element={<Vegetables />} />
  </Routes>
  </BrowserRouter>
)
