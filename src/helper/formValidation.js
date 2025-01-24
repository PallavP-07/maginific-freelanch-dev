// formValidation.js
import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone must be a valid number')
    .required('Phone is required'),
  company: Yup.string(),
  title: Yup.string(),
  document: Yup.mixed()
    .nullable()
    .required('File is required')
    .test('fileType', 'Only PDF or DOC files are allowed', (value) => {
      return value && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type);
    })
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    }),
  message: Yup.string().required('Message is required'),
});
