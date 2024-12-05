import * as yup from 'yup';
export const contactUsValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters long'),

  emailAddress: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(2, 'Message must be at least 2 characters long'),
});
