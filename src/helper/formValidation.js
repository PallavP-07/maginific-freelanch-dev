import * as Yup from "yup";

const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Strong email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// Name: only letters, spaces, apostrophes, hyphens
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

// Phone: digits only, optional +, 7–15 digits
const phoneRegex = /^\+?[0-9]{7,15}$/;

// Message: allow letters, numbers, spaces, and basic punctuation
const messageRegex = /^[A-Za-z0-9À-ÖØ-öø-ÿ.,!?'"()&\s-]{10,}$/;

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(nameRegex, "Name can only contain letters, spaces, apostrophes, or hyphens")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .matches(emailRegex, "Please enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(phoneRegex, "Phone number must be 7–15 digits and may start with +")
    .required("Phone number is required"),

  company: Yup.string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters")
    .nullable(),

  message: Yup.string()
    .trim()
    .matches(
      messageRegex,
      "Message must be at least 10 characters and not contain emojis or unusual symbols"
    )
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Message is required"),

  document: Yup.mixed()
    .nullable()
    .required("Document is required")
    .test("fileType", "Only PDF, DOC, or DOCX files are allowed", (file) => {
      return !file || SUPPORTED_FORMATS.includes(file.type);
    })
    .test("fileSize", "File must be less than 5MB", (file) => {
      return !file || file.size <= 5 * 1024 * 1024;
    }),
});
