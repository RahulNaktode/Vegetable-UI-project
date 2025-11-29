import Button from '../component/Button.jsx';

const removeFromCart = (id) =>{

    const items = JSON.parse(localStorage.getItem('card')) || [];
    
    const itemFiltered = items.filter((item) => item.id !== id);

    localStorage.setItem('card', JSON.stringify(itemFiltered));

    window.location.reload();
}

function CartVedetableCard({id, name, price, image, description, unit, qunatity}) {
  return (
    <div className="bg-white border-solid border-slate-700 p-3 my-3 rounded-lg shadow-xl flex items-center mx-10">
            <img src={image} alt={name}  className="h-37 w-37 rounded-lg"/>
        <div className="ml-3 w-full">
            <h3>{name} <span className="text-lg mx-1">(₹{price}/{unit})</span></h3>
            <p>{description}</p>
            <p>{qunatity} x ₹{price} /-</p>
            <p>₹{qunatity * price} /-</p>

            <div className='flex justify-end'>
        <Button title={'Remove from Card'} size='small' varient='danger' 
        onClick={() => {
            removeFromCart(id)
        }}
        />
      </div>
        </div>
      
    </div>
  )
}

export default CartVedetableCard
