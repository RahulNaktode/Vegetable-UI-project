import { useEffect, useState } from 'react'
import Navbar from './../component/Navbar.jsx'
import Footer from '../component/Footer.jsx';
import CartVedetableCard from '../component/CartVedetableCard.jsx';


function MyCard() {

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('card')) || [];
    setCartItems(existingCart);
  }, [])

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price * item.qunatity;
      
    })
    setTotalAmount(total);
  }, [cartItems])

  return (
    <div>
    <Navbar />

    <h4 className='text-right mt-4 mr-10 text-xl font-semibold'>
      Total Amount: ₹{totalAmount} /-
    </h4>


    <div className='min-h-screen'>
      <div className='max-h-[620px] py-4 overflow-y-scroll mt-4'>
      {cartItems.map((item) => {
        return <CartVedetableCard key={item.id} {...item} />
      })}
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default MyCard
