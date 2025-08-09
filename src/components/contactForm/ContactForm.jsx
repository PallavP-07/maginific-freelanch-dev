"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../helper/formValidation";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import FileUploadField from "../customInputs/UploadFile";
import InputField from "../customInputs/InputField";
import TextareaField from "../customInputs/TextAreaField";
import { uploadFileToCollection, createItemInCollection } from "@/lib/directus";
import { toast } from "sonner";
const RenderContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      title: "",
      message: "",
      document: null,
    },
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    setSuccessMessage("");
    try {
      let uploadedFileId = null;

      if (formData.document) {
        const { response: fileUploadResponse } = await uploadFileToCollection(
          formData.document
        );
        // ✅ Handle both single or array response correctly
        uploadedFileId = fileUploadResponse?.id;
      }

      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        title: formData.title || null,
        message: formData.message,
        // documents:uploadedFileId ? [{ id: uploadedFileId }] : [],
        documents: null,
      };

      const { response } = await createItemInCollection(
        "contact_form_data",
        dataToSend
      );

      const mailPayload = {
        type: "contact",
        name: response?.name,
        email: response?.email,
        phone: response?.phone,
        company: response?.company,
        title: response?.title,
        message: response?.message,
        resumeFileId: uploadedFileId,
        resumeFileName: formData.document?.name || "resume.pdf",
      };

      const emailRes = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailPayload),
      });

      const emailResData = await emailRes.json();

      if (!emailRes.ok) {
        throw new Error(emailResData?.error || "Email failed to send");
      }
      toast.success("🎉 Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-12 space-y-6">
        {successMessage && (
          <Alert
            variant="success"
            className="bg-green-100 border-green-400 text-green-700"
          >
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
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
          <InputField
            label="Company"
            id="company"
            type="text"
            placeholder="Enter your company name"
            register={register}
            error={errors.company}
          />
          <InputField
            label="Title"
            id="title"
            type="text"
            placeholder="Enter your job title"
            register={register}
            error={errors.title}
          />
          <FileUploadField
            label="Upload Document"
            id="document"
            control={control}
            error={errors.document}
          />
        </div>

        <TextareaField
          label="*Message"
          id="message"
          rows={5}
          placeholder="Type your message here"
          register={register}
          error={errors.message}
        />

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
              "Submit"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RenderContactForm;
