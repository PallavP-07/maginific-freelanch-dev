import { BulbIcon, PeopleIcon, ProcessIcon } from '@/assets/Icons';
import AboutHeroBanner from '@/components/aboutHeroBanner/Index'
import ContactUs from '@/components/contact/Index';
import Image from 'next/image';
import React from 'react'



// const RightTrapezoidCard = () => {
//   return (
//     <div className="relative bg-[#01331A] w-full h-[380px]">
//       <div className="relative w-64 h-40 bg-white text-gray-800 clip-trapezoid p-4 shadow-lg">
//         {/* Pseudo-element to simulate border */}
//         <div className="absolute top-0 left-0 w-full h-full clip-trapezoid-border bg-green-800 -z-10"></div>

//         <h2 className="text-lg font-bold">Trapezoid Card</h2>
//         <p className="text-sm mt-2">
//           This is a right trapezoid card styled with Tailwind CSS.
//         </p>
//       </div>
//     </div>
//   );
// };

const LeftSlantedTrapezoidCard = () => {
  return (
    <>
      <div className="relative bg-[#01331A] w-full h-[380px] md:block hidden">
        {/* Right Trapezoid */}
        <div className="absolute  right-0 h-full w-[98%] clip-left-trapezoid">
          <Image
            src="/assets/content-img-2.png"
            alt="content"
            fill
           
          />
        </div>
        <div className="relative h-full w-2/3 clip-trapezoid bg-[#01331A] text-gray-800">
          {/* Border Layer */}
          <div className="absolute left-0 top-0 w-[calc(100%-10px)] h-full lg:container lg:mx-auto bg-white clip-trapezoid-border">
            <div className='flex flex-col py-20 mx-8 lg:mx-20 gap-4'>
              <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
                Identifying the Best Candidates
              </h2>
              <p className='text-[#D0D0D0] leading-8 break-words font-semibold text-2xl'>First things first...</p>
              <p className='text-[#737475] font-normal text-[16px] leading-5'>
                You need to know who you're looking for. Utilizing our extensive network and tapping into AI sourcing and industry insights, we swiftly pinpoint the most suitable candidates for your needs. Efficiency is our forte, and we pride ourselves on delivering top-notch talent at lightning speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  h-full lg:container lg:mx-auto bg-white md:hidden">
        <div className='flex flex-col py-20 mx-8 gap-4'>
          <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
            Identifying the Best Candidates
          </h2>
          <p className='text-[#D0D0D0] leading-8 font-semibold text-2xl'>First things first...</p>
          <p className='text-[#737475] font-normal text-[16px] leading-5'>
            You need to know who you're looking for. Utilizing our extensive network and tapping into AI sourcing and industry insights, we swiftly pinpoint the most suitable candidates for your needs. Efficiency is our forte, and we pride ourselves on delivering top-notch talent at lightning speed.
          </p>

        </div>
      </div>
    </>
  );
};
const RightSlantedTrapezoidCard = () => {
  return (
    <>
      <div className="relative bg-[#01331A] w-full h-[380px] md:block hidden">

        <div className="relative h-full md:w-1/2 clip-trapezoid-dummy">
          {/* Border Layer */}
          <div className="absolute left-0 top-0 h-full lg:container lg:mx-auto clip-trapezoid-border-dummy">
            <div className='w-full h-full'>
              <Image
                src="/assets/content-img-2.png"
                alt="content"
                fill
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute  right-0 top-0 h-full w-2/3  clip-right-trapezoid ">

          <div className="  h-full lg:container lg:mx-auto bg-white ">
            <div className='flex flex-col py-20 ml-40 gap-4'>
              <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
                Identifying the Best Candidates
              </h2>
              <p className='text-[#D0D0D0] leading-8 font-semibold text-2xl'>First things first...</p>
              <p className='text-[#737475] font-normal text-[16px] leading-5'>
                You need to know who you're looking for. Utilizing our extensive network and tapping into AI sourcing and industry insights, we swiftly pinpoint the most suitable candidates for your needs. Efficiency is our forte, and we pride ourselves on delivering top-notch talent at lightning speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  h-full lg:container lg:mx-auto bg-white md:hidden">
        <div className='flex flex-col py-20 mx-8 gap-4'>
          <h2 className='text-[#006633] text-3xl leading-9 font-medium'>
            Identifying the Best Candidates
          </h2>
          <p className='text-[#D0D0D0] leading-8 font-semibold text-2xl'>First things first...</p>
          <p className='text-[#737475] font-normal text-[16px] leading-5'>
            You need to know who you're looking for. Utilizing our extensive network and tapping into AI sourcing and industry insights, we swiftly pinpoint the most suitable candidates for your needs. Efficiency is our forte, and we pride ourselves on delivering top-notch talent at lightning speed.
          </p>

        </div>
      </div>
    </>
  );
};



const WhatWeDo = () => {
  const items = [
    {
      title: "Talent Acquisition",
      description:
        "Attract and retain top talent at every level, leveraging scientific research, practical experience, and industry expertise.",
    },
    {
      title: "Executive Search",
      description:
        "We bring in the best leaders tailored to your business, team, and culture, ensuring they remain motivated and primed for success.",
    },
    {
      title: "Project Recruitment",
      description:
        "Rapidly fill numerous roles during pivotal moments like mergers, relocations, expansions, or product launches.",
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      description:
        "Outsourcing (RPO): Our RPO partnerships streamline your hiring processes, delivering quality candidates promptly to fuel your growth.",
    },
    {
      title: "Interim Executives & Professionals",
      description:
        "Whether it's the C-suite or professional roles, we supplement and enhance your workforce with high-performing individuals.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#13432b] via-[#01331a] to-black text-white py-16">
      <div className="lg:container lg:mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-lg mb-12">
          Our specialists across the globe harness the power of the Fellow
          Intelligence – utilizing cutting-edge tools and analytics combined
          with in-depth market and industry knowledge to navigate every stage
          of the talent acquisition process.
        </p>
        <div className="flex  flex-wrap justify-center items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={` py-4 px-5 lg:py-8 lg:px-10 md:w-[240px] lg:w-[320px] my-4 ${(index === 0 || index === 1 || (index - 3) % 4 === 0) ? "md:border-r-2 md:border-[#CCE0D6]" : "" // Apply border to every 3rd index + 1 (1, 4, 7, ...)
                }`}
            >
              <h3 className="text-xl font-bold leading-6 mb-8">{item.title}</h3>
              <p className="text-[#F9F9F9] text-16px leading-5 font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeHelp = () => {
  return (
    <section className="py-24 lg:container mx-6 lg:mx-auto text-center">
      <h2 className="text-2xl font-bold text-[#006633] mb-4">How We Help You</h2>
      <p className="text-gray-600  mx-auto mb-20">
        At Magnific Search, we understand that effective leadership is the cornerstone of organizational success. With our strategic approach and unwavering commitment to excellence, we empower your organization to thrive in a dynamic and competitive landscape. Let us help you unlock the potential of your strategy with the right talent.
      </p>
      <div className="grid md:grid-cols-3 gap-8  mx-auto">
        {/* Accelerating Hiring Processes */}
        <div className="flex flex-col items-center">
          <div className="text-green-700 text-4xl mb-6"><ProcessIcon /></div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Accelerating Hiring Processes</h3>
          <p className="text-gray-600 mt-2">
            Through our vast talent database and industry connections, we expedite the hiring process, ensuring top talent joins your organization swiftly.
          </p>
        </div>
        {/* Finding the Right Candidates */}
        <div className="flex flex-col items-center">
          <div className="text-green-700 text-4xl mb-6"><PeopleIcon /></div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Finding the Right Candidates</h3>
          <p className="text-gray-600 mt-2">
            Leveraging industry-leading tools, digital assessments, and success profiles, we identify candidates who not only meet but exceed your expectations.
          </p>
        </div>
        {/* Scalable Hiring Solutions */}
        <div className="flex flex-col items-center">
          <div className="text-green-700 text-4xl mb-6"><BulbIcon /></div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Scalable Hiring Solutions</h3>
          <p className="text-gray-600 mt-2">
            Whether you're hiring one manager or many, locally or globally, we source the right leaders at the right levels across various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <>
      <AboutHeroBanner />
      <div className="flex flex-col items-center justify-center text-center bg-gray-100 py-16 px-4">
        <div className='lg:container lg:mx-auto my-7'>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#006633] mb-10">
            Unlocking Your Strategy with the Right Talent
          </h1>
          <p className="text-[#737475] text-lg leading-5">
            You've got the strategy, we find the talent. For your strategic vision to soar, you need the perfect blend of individuals occupying key roles, fully aligned and committed to its success. That's where Magnific Search comes in. We specialize in sourcing and recruiting talent that propels your organization forward.
          </p>
        </div>
      </div>

      <LeftSlantedTrapezoidCard />
      <RightSlantedTrapezoidCard />

      <WhatWeDo />
      <HowWeHelp />
      <ContactUs />
    </>
  )
}

export default page