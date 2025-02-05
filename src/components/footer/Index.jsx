import FooterNavData from "@/services/footer_nav_data";
import MainLogo from "../logo";
import Image from "next/image";

const renderSocialContent = (socialContent) => {
 
  return (
    <div className="flex justify-between items-center gap-3">
      <Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${socialContent?.facebook_icon?.icon?.filename_disk}`} alt='fb-logo' width={30} height={30}  />
      <Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${socialContent?.twitter_icon?.icon?.filename_disk}`} alt='tw-logo' width={30} height={30} />
      <Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${socialContent?.linkedin_icon?.icon?.filename_disk}`} alt='linkedin-logo' width={30} height={30} />
    </div>
  );
}

const renderMobileFooter = (NavBarData) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src='/Logo-2.svg' alt="logo" width={240} height={240} />
      <div className="flex flex-wrap justify-center items-center md:gap-5 gap-4 w-[21rem] md:w-[50%] p-2 text-gray-400 my-4">
        {NavBarData.navigation_items.map((item) => (
          <p key={item.name} className="hover:text-green-800 cursor-pointer">{item.name}</p>
        ))}
      </div>
      {renderSocialContent(NavBarData)}
    </div>
  );
}

const renderDesktopFooter = (NavBarData) => {
  return (
    <>
      <div className="flex mx-32 items-center border-b-2 border-gray-400 mb-8  py-4 justify-between">
        <div>
          <MainLogo color="dark"/>
        </div>
        <div className="flex">
          {renderSocialContent(NavBarData)}
        </div>
      </div>
      <div className="mx-32 lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5">
        {NavBarData?.navigation_items.map((item) => (
          <div key={item.name}>
            <h3 className="text-xl leading-8 font-bold mb-4 text-[#01331A]">{item.name}</h3>
            {item.sub_items && item.sub_items.length > 0 ? (
              <ul className="space-y-2">
                {item.sub_items.map((subItem, index) => (
                  <li key={index}>
                    <a href={subItem.href} className="text-gray-600 hover:text-green-800">
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                <li>
                  <a href={item.href} className="text-gray-600 hover:text-green-800">
                    {item.name}
                  </a>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default async function Footer() {
  const { AllContent } = await FooterNavData();

  return (
    <footer className="bg-gray-50 py-10 px-6 lg:px-0">
      {/* Mobile Footer */}
      <div className="lg:hidden">
        {renderMobileFooter(AllContent)}
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        {renderDesktopFooter(AllContent)}
      </div>

      <div className="  lg:mx-32  text-center mt-6 md:mt-8 lg:mt-10 text-sm   text-gray-600 border-t-2 border-gray-300  pt-4 lg:pt-8">
        {AllContent.copyright_text.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&nbsp;/g, '')}
      </div>
    </footer>
  );
}
