import React, { useEffect, useState } from 'react'
import {Salad as SaladIcon, ShoppingCart as ShoppingCartIcon} from 'lucide-react'

function Navbar(refreshCard) {

  const [itemCard, setItemCard] =useState([]);

  useEffect(() => {
    const existingCard = JSON.parse(localStorage.getItem('card')) || [];
    setItemCard(existingCard)
  }, [refreshCard])

  return (
    
    <div className='max-w-10/12 bg-amber-500 rounded-full px-10 py-3 mx-auto sticky top-3 flex items-center'>
        <SaladIcon size={40} strokeWidth={1}/>
        <h2 className='font-medium text-2xl!'>Rahul Vegetables</h2>
        <div className='ml-auto relative'>
        <span className='absolute -top-2.5 left-4 bg-red-600 rounded-full px-1.5 text-white text-sm'>{itemCard.length}</span>
        <ShoppingCartIcon size={30} strokeWidth={1} className='inline-block'/>  
        </div>
    </div>
    
    
  )
}

export default Navbar
