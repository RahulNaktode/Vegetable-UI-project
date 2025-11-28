import React from 'react'
import {Salad as SaladIcon} from 'lucide-react'

function Navbar() {
  return (
    <div className='max-w-10/12 bg-amber-500 rounded-full px-15 py-3 mx-auto mt-0 sticky top-3 font-medium text-xl flex items-center'>
        <SaladIcon size={40} strokeWidth={1}/>
      Rahul Vegetable
    </div>
  )
}

export default Navbar
