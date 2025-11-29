import React, { useState } from 'react'
import Navbar from './../component/Navbar.jsx'
import DATA from './../data.json'
import VegetableCard from './../component/VegetableCard.jsx'
import toast, { Toaster} from 'react-hot-toast'

function Vegetable() {

  const [refreshCard, setRefreshCard] = useState(false);


  function addToCard(item){
    const existingCard = JSON.parse(localStorage.getItem('card')) || [];

    const itemIndex = existingCard.findIndex((cardItem) => cardItem.id ===item.id);

    if(itemIndex !== -1){
      existingCard[itemIndex] = item;
    }else{
      existingCard.push(item);
    }
    localStorage.setItem('card', JSON.stringify(existingCard));

    setTimeout(() => {
      setRefreshCard(!refreshCard)
    }, 1000)

    toast.success("Item added to card")
  }
  return (
    <div>
        <Navbar refreshCard={refreshCard}/>
      <div className='min-h-screen'>
        <div className='flex flex-wrap justify-around items-center rounded-md '>
        {DATA.map((vegItem) => {
          return <VegetableCard key={vegItem.id} {...vegItem} addToCard={addToCard}/>
        })}
      </div>
      </div>
    </div>
  )
}

export default Vegetable
