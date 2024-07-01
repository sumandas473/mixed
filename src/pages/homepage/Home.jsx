import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Cardsec from '../../components/cardsec/Cardsec'

import './Home.css'
function Home() {

  return (
    <div className='main relative select-none' >
      
        <Navbar />
        <Hero />
        <Cardsec  className='py-10'/>
        
       
    </div>
  )
}

export default Home