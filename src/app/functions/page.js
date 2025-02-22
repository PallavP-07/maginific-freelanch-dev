import CategoryList from '@/components/accordion/Index'
import ContactUs from '@/components/contact/Index'
import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import FunctionListData from '@/services/functionalExpertiseListData'
import React from 'react'

const FunctionsPage = async() => {
    const{bannerData}= await FunctionListData();
   
    return (
        <>
               <HeroBanner
               heroBanner={bannerData?.banner?.background_img?.filename_disk}
               header={bannerData?.banner?.title}
               description={bannerData?.banner?.description}
            />
            {/* <CategoryList /> */}
            <ContactUs />
            <Footer />
        </>
    )
}

export default FunctionsPage