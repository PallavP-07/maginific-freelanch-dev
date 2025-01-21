import Footer from '@/components/footer/Index'
import HeroBanner from '@/components/herobanner/Index'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
const renderContactForm = () => {
  return (
    <>
      <div className='my-12'>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="name" className="font-semibold text-lg leading-5 text-gray-800">*Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-2 p-5 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="email" className="font-semibold text-lg leading-5 text-gray-800">*Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-5 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="font-semibold text-lg leading-5 text-gray-800">*Phone</Label>
            <Input
              type="number"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-2 p-5 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="company" className="font-semibold text-lg leading-5 text-gray-800">Company</Label>
            <Input
              type="text"
              id="company"
              placeholder="Enter your company name"
              className="mt-2 p-5 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="title" className="font-semibold text-lg leading-5 text-gray-800">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter your job title"
              className="mt-2 p-5 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Label htmlFor="document" className="font-semibold text-lg leading-5 text-gray-800">
              Upload Document
            </Label>
            <input
              type="file"     
              id="document"
              className="hidden" // Hides the default file input
            />
            <label
              htmlFor="document"
              className="mt-2 p-[8px] w-full cursor-pointer inline-block border border-gray-300  rounded-[5px] hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              <span className="ml-8 text-[#D0D0D0]">Drag & Drop or Select</span>
            </label>
            <svg
              width="20"
              height="20"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute  bottom-[11px] left-[10px]"
            >
              <path
                d="M4.04062 7.48437V15.3512C4.04971 15.9264 4.28461 16.475 4.69463 16.8786C5.10464 17.2822 5.6569 17.5084 6.23223 17.5084C6.80755 17.5084 7.35981 17.2822 7.76983 16.8786C8.17984 16.475 8.41474 15.9264 8.42383 15.3512L8.43094 5.03984C8.4369 4.54816 8.34521 4.06019 8.16118 3.60421C7.97715 3.14823 7.70444 2.73332 7.35886 2.38352C7.01328 2.03372 6.60171 1.756 6.148 1.56645C5.69428 1.3769 5.20746 1.2793 4.71574 1.2793C4.22403 1.2793 3.7372 1.3769 3.28349 1.56645C2.82978 1.756 2.4182 2.03372 2.07262 2.38352C1.72704 2.73332 1.45433 3.14823 1.2703 3.60421C1.08627 4.06019 0.994581 4.54816 1.00055 5.03984V15.4206C0.990529 16.1128 1.11822 16.8001 1.37618 17.4425C1.63415 18.085 2.01725 18.6697 2.50321 19.1627C2.98918 19.6558 3.5683 20.0473 4.20693 20.3146C4.84555 20.5818 5.53092 20.7194 6.2232 20.7194C6.91548 20.7194 7.60086 20.5818 8.23948 20.3146C8.8781 20.0473 9.45723 19.6558 9.94319 19.1627C10.4292 18.6697 10.8123 18.085 11.0702 17.4425C11.3282 16.8001 11.4559 16.1128 11.4459 15.4206V5.72015"
                stroke="#737475"
                strokeWidth="1.75"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

        </div>

        <div className="mt-8">
          <Label htmlFor="message" className="font-semibold text-lg leading-5 text-gray-800">Message</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Type your message here"
            className="mt-2 p-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <Button className="px-8 py-2 bg-[#026534] text-white w-full md:w-auto rounded-[4px] text-[16px] leading-5 font-semibold  ">
            Submit
          </Button>
        </div>
      </div>


    </>
  )
}

 export const renderContatUseComponent = ()=>{
  return(
    <>
    <div className='lg:container  mx-4 mt-12 lg:mx-auto'>
    <p className="text-2xl  md:text-[44px] leading-[80px]  font-semibold  text-[#373A40]  mb-1 w-full sm:w-full">
      Get in Touch  <span className=" font-bold text-2xl md:text-[44px] leading-[80px] text-[#006633]">Today</span>
    </p>
    <span className='text-[#2A2B2F] text-lg leading-5'>We partner with our candidates and clients to advance their goals and turn their potential into reality.</span>
    {renderContactForm()}

  </div>
    </>
  )
}
const ContactUs = () => {
  return (
    <>
      <HeroBanner heroBanner={'/HeroBanners/contact_us-hero-banner.png'} header={'Contact Us'} discription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'} />
          {renderContatUseComponent()}
      <Footer />
    </>
  )
}

export default ContactUs