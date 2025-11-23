import React from 'react'
import HeroSection from '../components/HeroSection'
import FinancialFreedomSection from '../components/FinancialFreedomSection'
import StoxoBanner from '../components/StoxoBanner'
import InsightsExperts from '../components/InsightsExperts'
import InsideMarket from '../components/InsideMarket'
import MediaPress from '../components/MediaPress'
import StoxoPromo from '../components/StoxoPromo'
import EdVisorySection from '../components/EdVisorySection'
import MarketWrapSection from '../components/MarketWrapSection'
import CommunityHero from '../components/CommunityHero'
import Services2Section from '../components/Services2Section/Services2Section'
import AboutSection from '../components/about/AboutSection'
import Services1Section from '../components/Services1Section/Services1Section'
import WhyChooseUs1 from '../components/whychooseus/WhyChooseUs1'
import OutstandingSection from '../components/outstanding/OutstandingSection'
import WorkProcessSection from '../components/workProgress/WorkProcessSection'
import CallToAction1 from '../components/newsletter/CallToAction1'


const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      {/* <Services2Section/> */}
      <WhyChooseUs1/>
      {/* <StoxoBanner/> */}
      <Services1Section/>
      {/* <OutstandingSection/>
      <WorkProcessSection/> */}
      <CallToAction1/>
      {/* <FinancialFreedomSection/> */}
      {/* <InsightsExperts/> */}
      {/* <InsideMarket/> */}
      {/* <CommunityHero/>
      <StoxoPromo/> */}
      {/* <MarketWrapSection/>
      <EdVisorySection/>
      <MediaPress/> */}
    </>
  )
}

export default Home