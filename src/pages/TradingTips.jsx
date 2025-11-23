import React from 'react'
import AlertBanner from '../components/AlertBanner'
import IntradayHero from '../components/IntradayHero'
import WhatToExpect from '../components/WhatToExpect'
import FaqSimple from '../components/FaqSimple'
import SubscribePlans from '../components/SubscribePlans'
import WhatMakesUsBetter from '../components/WhatMakesUsBetter'
import OnboardingCompliance from '../components/Onboarding'

const TradingTips = () => {
    return (
        <>
            <AlertBanner />
            <IntradayHero />
            <WhatToExpect />
            <OnboardingCompliance />
            <SubscribePlans />
            <WhatMakesUsBetter />
            <FaqSimple />
        </>
    )
}

export default TradingTips