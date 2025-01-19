import CategoryList from '@/components/accordion/Index'
import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import React from 'react'

const SolutonsPage = () => {
    return (
        <>
            <HeroBanner heroBanner={'/HeroBanners/solutions-hero-banner.png'} header={'Solutions'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
            <CategoryList />
            <ContactUs />
            <Footer />
        </>
    )
}

export default SolutonsPage