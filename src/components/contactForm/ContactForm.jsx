'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../../helper/formValidation';


import { Button } from '@/components/ui/button';
import FileUploadField from '../customInputs/UploadFile';
import InputField from '../customInputs/InputField';
import TextareaField from '../customInputs/TextAreaField';

const RenderContactForm = ({formData}) => {
   console.log(formData)
  const { handleSubmit, register, control, formState: { errors } } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      title: '',
      message: '',
      document: null,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Name Field */}
          <InputField
            label="*Name"
            id="name"
            type="text"
            placeholder="Enter your name"
            register={register}
            error={errors.name}
          />
          
          {/* Email Field */}
          <InputField
            label="*Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email}
          />
          
          {/* Phone Field */}
          <InputField
            label="*Phone"
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            register={register}
            error={errors.phone}
          />

          {/* Company Field */}
          <InputField
            label="Company"
            id="company"
            type="text"
            placeholder="Enter your company name"
            register={register}
            error={errors.company}
          />
          
          {/* Title Field */}
          <InputField
            label="Title"
            id="title"
            type="text"
            placeholder="Enter your job title"
            register={register}
            error={errors.title}
          />
          
          {/* Document Field */}
          <FileUploadField
            label="Upload Document"
            id="document"
            control={control}
            error={errors.document}
          />
        </div>

        {/* Message Field */}
        <TextareaField
          label="*Message"
          id="message"
          rows={5}
          placeholder="Type your message here"
          register={register}
          error={errors.message}
        />

        {/* Submit Button */}
        <div className="mt-6">
          <Button type="submit" className="px-8 py-2 bg-[#026534] text-white w-full md:w-auto rounded-[4px] text-[16px] leading-5 font-semibold">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RenderContactForm;
