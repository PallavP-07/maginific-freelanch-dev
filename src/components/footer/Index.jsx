import Image from "next/image";

const renderSocialContent = () => {
  return (
    <div className="flex justify-between items-center gap-3">
      <Image src='/Icons/fb.svg' alt='fb-logo' width={30} height={30} className="text-[#01331A]" />
      <Image src='/Icons/tw.svg' alt='tw-logo' width={30} height={30} />
      <Image src='/Icons/linkedin.svg' alt='linkedin-logo' width={30} height={30} />
    </div>
  );
}

const renderMobileFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src='/Logo-2.svg' alt="logo" width={240} height={240} />
      <div className="flex flex-wrap justify-center items-center md:gap-5 gap-4 w-[21rem] md:w-[50%] p-2 text-gray-400 my-4">
        <p>Home</p>
        <p>About</p>
        <p>Solutions</p>
        <p>Expertise</p>
        <p>Functions</p>
        <p>Job Search</p>
        <p>Insights</p>
        <p>Contacts</p>
      </div>

      {renderSocialContent()}
    </div>
  );
}

const renderDesktopFooter = () => {
  return (
    <>
      <div className="flex mx-24 items-center border-b-2 border-gray-400 mb-8  py-4 justify-between">
        <div>
          <Image src='/Logo.svg' alt="logo" width={150} height={150} />
        </div>
        <div className="flex">
          {renderSocialContent()}
        </div>
      </div>
      <div className="mx-24  lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
        {/* Home Section */}
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">Home</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">Search Jobs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Success Rates</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Why Choose Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Testimonials</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Resources</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Contact</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Background</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Culture</a></li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">Executive Search</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Professional Search</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Interim Talent</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">RPO</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Projects & Contracts</a></li>
          </ul>
        </div>

        {/* Expertise Section */}
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">Expertise</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">Financial Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Technology</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Healthcare</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Pharmaceuticals</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Financial Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Technology</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Healthcare</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Pharmaceuticals</a></li>
          </ul>
        </div>

        {/* Functions Section */}
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">Functions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">Legal & Compliance</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Human Resources</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Accounting</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Financial Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Technology</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Healthcare</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Pharmaceuticals</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Financial Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Technology</a></li>
     
          </ul>
        </div>

        {/* Browse Jobs Section */}
    
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">Insights</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">Pharmaceuticals</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Financial Services</a></li>
        
          </ul>
        </div>
        <div>
          <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">Browse Jobs</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-800">Search Jobs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Browse Jobs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-800">Hire with Us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10 px-6">
      {/* Mobile Footer */}
      <div className="lg:hidden">
        {renderMobileFooter()}
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        {renderDesktopFooter()}
      </div>

      <div className="  lg:mx-24  text-center mt-6 md:mt-8 lg:mt-10 text-sm   text-gray-600 border-t-2 border-gray-300  pt-4 lg:pt-8">
        Copyright © 2024 Magnific | All Rights Reserved
      </div>
    </footer>
  );
}
