
import React from 'react';

import HeroBanner from '@/components/herobanner/Index';
import RenderContactForm from '@/components/contactForm/ContactForm';
import DualColorHeader from '@/components/dualColorHeader/Index';

export const renderContatUseComponent = () => {
  return (
    <>
      <div className='lg:container my-6  mx-4  lg:mx-auto lg:my-20 md:my-12 md:mx-8'>
        <div className='mb-6'>

        <DualColorHeader first={"Get in Touch"} second={"Today"}/>
        </div>
        <span className='text-[#2A2B2F] text-lg leading-5 '>We partner with our candidates and clients to advance their goals and turn their potential into reality.</span>
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