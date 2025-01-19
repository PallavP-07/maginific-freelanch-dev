import CategoryList from '@/components/accordion/Index'
import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import React from 'react'

const ExpertisePage = () => {
    return (
        <>
            <HeroBanner heroBanner={'/HeroBanners/experties-hero-banner.png'} header={'Expertise'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
            <CategoryList />
            <ContactUs />
            <Footer />
        </>
    )
}

export default ExpertisePage