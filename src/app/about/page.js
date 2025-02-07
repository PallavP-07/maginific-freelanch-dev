import AboutHeroBanner from '@/components/aboutHeroBanner/Index'
import ContactUs from '@/components/contact/Index';
import Image from 'next/image';
import React from 'react'
import AboutPageData from '@/services/aboutPageData';


const LeftSlantedTrapezoidCard = ({ data }) => {
  return (
    <>
      <div className="relative bg-[#01331A] w-full h-[380px] md:block hidden">
        {/* Right Trapezoid */}
        <div className="absolute  right-0 h-full w-[98%] clip-left-trapezoid">
          <Image
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}`}
            alt="content"
            fill

          />
        </div>
        <div className="relative h-full w-2/3 clip-trapezoid bg-[#01331A] text-gray-800">
          {/* Border Layer */}
          <div className="absolute left-0 top-0 w-[calc(100%-10px)] h-full lg:container lg:mx-auto bg-white clip-trapezoid-border">
            <div className='flex flex-col py-20 mx-8 md:mx-6 lg:mx-5 gap-4'>
              <h2 className='text-[#006633]  md:text-3xl leading-9 font-medium'>
                {data.title}
              </h2>
              <p className='text-[#D0D0D0] leading-8 break-words font-semibold text-2xl'>{data.subtitle}</p>
              <p className='text-[#737475] font-normal text-[16px] leading-5 md:w-[380px] lg:w-[460px] '>
                {data.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  h-full lg:container lg:mx-auto bg-white md:hidden">
        <div className='flex flex-col py-20 mx-8 gap-4 '>
          <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
            {data.title}
          </h2>
          <p className='text-[#D0D0D0] leading-8 font-semibold text-2xl'>{data.subtitle}</p>
          <p className='text-[#737475] font-normal text-[16px] leading-5 '>
            {data.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
          </p>

        </div>
      </div>
    </>
  );
};
const RightSlantedTrapezoidCard = ({ data }) => {
  return (
    <>
      <div className="relative bg-[#01331A] w-full h-[380px]  hidden md:block">
        <div className="relative h-full md:w-1/2 clip-trapezoid-dummy">
          {/* Border Layer */}
          <div className="absolute left-0 top-0 w-full h-full lg:container lg:mx-auto clip-trapezoid-border-dummy">
            <div className='w-full h-full'>
              <Image
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${data?.img?.filename_disk}`}
                alt="content"
                fill
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute  right-0 top-0 h-full w-2/3  clip-right-trapezoid ">

          <div className="  h-full lg:container lg:mx-auto bg-white ">
            <div className='flex flex-col py-20 md:ml-36 lg:ml-24 gap-4 md:w-[400px] lg:w-[460px]'>
              <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
                {data.title}
              </h2>
              <p className='text-[#D0D0D0] leading-8 font-semibold text-2xl'>{data.subtitle}</p>
              <p className='text-[#737475] font-normal text-[16px] leading-5'>
                {data.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  h-full lg:container lg:mx-auto bg-white md:hidden">
        <div className='flex flex-col py-20 mx-8 gap-4'>
          <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
            {data.title}
          </h2>
          <p className='text-[#D0D0D0] leading-8 font-semibold text-2xl'>{data.subtitle}</p>
          <p className='text-[#737475] font-normal text-[16px] leading-5'>
            {data.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
          </p>

        </div>
      </div>
    </>
  );
};



const WhatWeDo = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-[#13432b] via-[#01331a] to-black text-white py-16">
      <div className="lg:container lg:mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-lg mb-12">
          {data.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
        </p>
        <div className="flex flex-wrap justify-center items-center">
          {data?.sections.map((item, i) => (
            
              <div
                key={i}
                className={` py-4 pr-5  m-4 md:w-[180px]  lg:w-[282px] my-4 ${(i === 0 || i === 1 || (i - 3) % 4 === 0) ? "md:border-r-2 md:border-[#CCE0D6]" : ""
                  }`}
              >
                <h3 className="text-xl font-bold leading-6 mb-8">{item.title}</h3>
                <p className="text-[#F9F9F9] text-16px leading-5 font-normal">{item.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}</p>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeHelp = ({ data }) => {

  return (
    <section className="py-24 lg:container mx-6 lg:mx-auto text-center">
      <h2 className="text-2xl font-bold text-[#006633] mb-4">{data?.title}</h2>
      <p className="text-gray-600  mx-auto mb-20">
        {data?.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
      </p>
      <div className="grid md:grid-cols-3 gap-8  mx-auto">
        {data?.sections.map((item, i) => (
          
            <div className="flex flex-col items-center" key={item.sort}>
              <div className="mb-6">
                <Image
                  className="w-full object-fill h-full"
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${item?.icon?.filename_disk}`}
                  alt="icon"
                  width={40}
                  height={40}

                />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">
                {item.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
              </p>
            </div>
          
        ))}
      </div>
    </section>
  );
};

const page = async () => {
	const { bannerData,
    AllContent,
	} = await AboutPageData();
  return (
    <>
      <AboutHeroBanner banner={bannerData.banner} />
      <div className="flex flex-col items-center justify-center text-center bg-gray-100 py-16 px-4">
        <div className='lg:container lg:mx-auto my-10'>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#006633] mb-10">
            {AllContent?.section_1?.title}
          </h1>
          <p className="text-[#737475] text-lg leading-5 lg:mx-20">
            {AllContent?.section_1?.description.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
          </p>
        </div>
      </div>
      <LeftSlantedTrapezoidCard data={AllContent.section_2.rows[0]} />
      <RightSlantedTrapezoidCard data={AllContent.section_2.rows[1]} />
      <WhatWeDo data={AllContent.section_3} />
      <HowWeHelp data={AllContent.section_4} />
      <ContactUs />
    </>
  )
}

export default page