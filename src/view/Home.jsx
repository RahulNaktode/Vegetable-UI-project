import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import VegetableImg from './../assets/vegetables.png'

import FeatureSession from '../component/FeatureSession.jsx'


function Home() {
  return (
    
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <div className='items-center md:flex px-10 md:px-25'>
          <img src={VegetableImg} alt="Vegetable-image" className='pl-20 h-50 md:h-90'/>
          <h1 className='text-center text-4xl! md:text-7xl!  text-orange-700'>One Platfrom that all the Vegetables you Needs</h1>
        </div>
        
        <FeatureSession />
        </div>
      
      <Footer />
      
    </div>
    
    
  )
}

export default Home
