"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Loader2, X } from "lucide-react"
import { toast } from "sonner"
import * as yup from "yup"
import { uploadFileToCollection, createItemInCollection } from '@/lib/directus';
// Form validation schema
const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  document: yup.mixed().required("Document is required"),
})

// Mock Directus functions - replace with your actual implementations




const ContactModal = ({ isOpen, closeModal }) => {
  const [loading, setLoading] = useState(false)

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
      document: null,
    },
  })

  useEffect(() => {
    if (!isOpen) reset()
  }, [isOpen, reset])

  const onSubmitForm = async (formData) => {
   
    setLoading(true)

    try {
      let fileId = null

      if (formData.document && formData.document[0]) {
        const { response: fileUploadResponse } = await uploadFileToCollection(formData.document[0])
        fileId = Array.isArray(fileUploadResponse) ? fileUploadResponse[0]?.id : fileUploadResponse?.id
        if (!fileId) throw new Error("File upload failed.")
      }

      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        documents: null,
      }

      const { response } = await createItemInCollection("contact_form_data", dataToSend)
    

      toast.success("🎉 Form submitted successfully!")
      reset()
      closeModal()
    } catch (error) {
      console.error("❌ Error submitting form:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    reset()
    closeModal()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white p-12 w-[400px] md:w-[640px] rounded-lg shadow-lg relative">
        <button onClick={handleClose} className="absolute top-5 right-6 text-gray-600 text-lg hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-5">Your Details</h2>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">*Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">*Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone">*Phone</Label>
              <Input
                id="phone"
                type="text"
                placeholder="Enter your phone number"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* File Upload Field */}
            <div className="space-y-2">
              <Label htmlFor="document">*Upload CV</Label>
              <Controller
                name="document"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Input
                    {...field}
                    id="document"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => onChange(e.target.files)}
                    className={errors.document ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.document && <p className="text-red-500 text-sm">{errors.document.message}</p>}
            </div>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-[#026534] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#024a28]"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Apply"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
