import CategoryList from '@/components/accordion/Index'
import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import React from 'react'

const FunctionsPage = () => {
    return (
        <>
            <HeroBanner heroBanner={'/HeroBanners/functions-hero-banner.png'} header={'Functions'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
            <CategoryList />
            <ContactUs />
            <Footer />
        </>
    )
}

export default FunctionsPage