import React, { useEffect } from 'react'
import SimplifiedCryptoTrading from '../components/SimplifiedCryptoTrading'
import GrowYourProfit from '../components/GrowYourProfit'
import OurVision from '../components/OurVision'
import AboutSection from '../components/about/AboutSection'

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className='mt-[calc(var(--header-height,80px))] font-publicSans py-20'>
      <AboutSection />
      <OurVision/>
    </div>
  )
}

export default Aboutus