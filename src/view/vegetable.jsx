import React from 'react'
import Navbar from './../component/Navbar.jsx'
import DATA from './../data.json'
import VegetableCard from './../component/VegetableCard.jsx'

function Vegetable() {
  return (
    <div>
        <Navbar />
      <div className='min-h-screen'>
        <div className='flex flex-wrap justify-around items-center rounded-md '>
        {DATA.map((vegItem) => {
          return <VegetableCard key={vegItem.id} {...vegItem} />
        })}
      </div>
      </div>
    </div>
  )
}

export default Vegetable
