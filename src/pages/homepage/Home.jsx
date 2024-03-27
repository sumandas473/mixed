import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Cardsec from '../../components/cardsec/Cardsec'


function Home() {
  return (
    <div className='bg-[#252126]'>
        <Navbar />
        <Hero />
        <Cardsec  className='py-10'/>
       
    </div>
  )
}

export default Home