"use client";

import { Button } from "../ui/button";
import InputField from "../customInputs/InputField";
import FileUploadField from "../customInputs/UploadFile";
import { createItemInCollection, uploadFileToCollection } from "@/lib/directus";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../../helper/formValidation';
import { Loader2 } from 'lucide-react';

const Model = ({ isOpen, closeModal,  }) => {

 const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      document: null,
    },
  });

  const onSubmitForm = async (formData) => {
    setLoading(true);
    setSuccessMessage('');
    try {
      let fileId = null;

      if (formData.document) {
        const { response: fileUploadResponse } = await uploadFileToCollection(formData.document);
        fileId = fileUploadResponse?.id;
      }

      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        documents: fileId ? [fileId] : [],
      };

      const { response } = await createItemInCollection('contact_form_data', dataToSend);
      console.log('✅ Contact form submitted:', response);

      setSuccessMessage('🎉 Your message has been submitted successfully!');
      reset();
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
        <div className="bg-white p-12 w-[400px] md:w-[640px] lg:max-w-full rounded-lg shadow-lg  relative">
          <button
            onClick={closeModal}
            className="absolute top-5 right-6 text-gray-600 text-lg hover:text-gray-900"
          >
            ✖
          </button>
          <h2 className="text-xl font-bold leading-7 text-gray-800 mb-5">
            Your Details
          </h2>
          <form onSubmit={handleSubmit(onSubmitForm)}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <InputField
              label="*Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              register={register}
              error={errors.name}
            />
            <InputField
              label="*Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email}
            />
            <InputField
              label="*Phone"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              register={register}
              error={errors.phone}
            />
            <FileUploadField
              label="*Upload CV"
              id="document"
              control={control}
              error={errors.document}
            />
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              disabled={loading}
              className="px-8 py-2 bg-[#026534] text-white w-full md:w-auto rounded-[4px] text-[16px] leading-5 font-semibold"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </span>
              ) : (
                " Apply"
              )}
            </Button>
          </div>
          </form>
        
        </div>
      </div>
    )
  );
};

export default Model;
