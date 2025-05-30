import React from "react";
import HeroBanner from "@/components/herobanner/Index";
import RenderContactForm from "@/components/contactForm/ContactForm";
import DualColorHeader from "@/components/dualColorHeader/Index";
import ContactPageData from "@/services/contactPageData";
import ContactFormData from "@/services/contactFormData";
import { splitTextByWord } from "@/utils/splitText";

export const RenderContactUseComponent = (contactForm) => {
  const title = contactForm?.contact_form?.title || "";
  const [firstPart, secondPart] = splitTextByWord(title, "Today");
  return (
 
      <div className="lg:container my-6  mx-4  lg:mx-auto lg:my-20 md:my-12 md:mx-8">
        <div className="mb-6">
          <DualColorHeader first={firstPart} second={secondPart} />
        </div>
        <span className="text-[#2A2B2F] text-lg leading-5 ">
          {" "}
          {contactForm?.contact_form?.description
            .replace(/<p>/g, "")
            .replace(/<\/p>/g, "")
            .replace(/&nbsp;/g, "")}
        </span>
        <RenderContactForm formData={contactForm?.contact_form} />
      </div>

  );
};
const ContactUs = async () => {
  const { bannerData,dunmyFormData } = await ContactPageData();
  const { Contact_Form_data } = await ContactFormData();

  return (
    <>
      <HeroBanner
        heroBanner={bannerData?.banner?.background_img?.filename_disk}
        header={bannerData?.banner?.title}
        description={bannerData?.banner?.description}
      />
      {RenderContactUseComponent(Contact_Form_data)}
    </>
  );
};

export default ContactUs;
