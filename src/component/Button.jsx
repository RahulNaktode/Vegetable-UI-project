const BUTTON_VARIETY = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 transition-duration-700",
    secondary: "bg-blue-500 text-white hover:bg-blue-600 transition-duration-700",
    thrid: "bg-green-700 text-white hover:bg-green-800 transition-duration-700",
    danger: "bg-red-600 text-white hover:bg-red-700 transition-duration-700"
}

const BUTTON_SIZE = {
    larger: "text-3xl px-7 py-1.5",
    medium: "text-2xl px-4 py-1",
    small: "text-xl px-3 py-0.5"
}

function Button({title, onClick = () => {}, varient='primary', size='larger'}) {
  return (
    <button 
    onClick={onClick}
    className={`rounded-full ${BUTTON_VARIETY[varient]} ${BUTTON_SIZE[size]} mx-5 mt-10 cursor-pointer`}
    >{title}</button>
  )
}

export default Button
