
import React from 'react';

import HeroBanner from '@/components/herobanner/Index';
import RenderContactForm from '@/components/contactForm/ContactForm';

export const renderContatUseComponent = () => {
  return (
    <>
      <div className='lg:container  mx-4 mt-12 lg:mx-auto'>
        <p className="text-2xl  md:text-[44px] leading-[80px]  font-semibold  text-[#373A40]  mb-1 w-full sm:w-full">
          Get in Touch  <span className=" font-bold text-2xl md:text-[44px] leading-[80px] text-[#006633]">Today</span>
        </p>
        <span className='text-[#2A2B2F] text-lg leading-5'>We partner with our candidates and clients to advance their goals and turn their potential into reality.</span>
        <RenderContactForm />

      </div>
    </>
  )
}
const ContactUs = () => {
  return (
    <>
      <HeroBanner heroBanner={'/HeroBanners/contact_us-hero-banner.png'} header={'Contact Us'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
      {renderContatUseComponent()}

    </>
  )
}

export default ContactUs