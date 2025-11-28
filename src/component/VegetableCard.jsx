import React, { useState } from 'react'
import Button from './Button'
import { SquareMinus, SquarePlus } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

function Vegetables({id, name, price,image, category, description, unit, tags}) {

  const [qunatity, setquntity] = useState(1);

  return (
    <div className='bg-white border-solid border-b-slate-700 p-5 w-80 my-5 rounded-lg shadow-xl flex flex-col gap-2'>
      <img src={image} alt={name} className='w-full h-48 object-cover rounded-md' />
      <div className='text-center'>
        <h3 className=''>{name}</h3>
      <p className=''>{description}</p>
      </div>
      <p>
        <span className='text-xl font-bold'>₹{price}</span>/{unit}</p>
      <p>{category}</p>
      <div className='flex pt-3 justify-center items-center gap-4'>
        <SquareMinus onClick={() => {
          if(qunatity>1){
          setquntity(qunatity-1)}
          else{
            toast.error("Quntity cannot be less than 1")
          }
        }}/>
        <label className='text-lg '>{qunatity}</label>
        <SquarePlus onClick={() => {
          if(qunatity<20){
          setquntity(qunatity+1)}
          else{
            toast.error("Qunatity cannot be more than 20")
          }
        }}/>
        </div>
      <div className='flex justify-center'>
      <Button title='Add to Card' size='medium'/>
      </div>

      <Toaster />
      
    </div>
  )
}

export default Vegetables
