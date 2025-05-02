import * as Yup from "yup";

const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(
      /^[0-9]{7,15}$/,
      "Phone number must be numeric and between 7–15 digits"
    )
    .required("Phone number is required"),

  company: Yup.string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters")
    .nullable(),

  // title: Yup.string()
  //   .trim()
  //   .max(100, "Title cannot exceed 100 characters")
  //   .nullable(),

  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Message is required"),

  document: Yup.mixed()
    .nullable()
    .required("Document is required")
    .test("fileType", "Only PDF, DOC, or DOCX files are allowed", (file) => {
      return !file || (file && SUPPORTED_FORMATS.includes(file.type));
    })
    .test("fileSize", "File must be less than 5MB", (file) => {
      return !file || (file && file.size <= 5 * 1024 * 1024);
    }),
});
