import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import VegetableImg from './../assets/vegetables.png'
import Button from './../component/Button.jsx'
import FeatureSession from '../component/FeatureSession.jsx'


function Home() {
  return (
    
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <div className='items-center md:flex px-10 md:px-25 md:my-15'>
          <img src={VegetableImg} alt="Vegetable-image" className='pl-20 h-50 md:h-90'/>
          <div>
          <h1 className='text-center text-4xl! md:text-6xl! md:ml-20  text-orange-700'>One Platfrom that all the Vegetables you Needs</h1>
           <div className='flex flex-col justify-center md:ml-10 md:flex md:flex-row'>
           <Button title='Explore Now' varient='primary' size='medium'/>
           <Button title='Call Us' varient='thrid' size='medium'/>
           </div>
           </div>
        </div>
        
        <FeatureSession />
        </div>
      
      <Footer />
      
    </div>
    
    
  )
}

export default Home
