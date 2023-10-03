'use client';
import {IFormInput} from '@/app/(contact-form)/ContactUsForm';
import {useState} from 'react';

interface Props {
  onSuccess: () => void;
  onError: () => void;
}
export function useSendEmail({onSuccess, onError}: Props) {
  const [loading, setLoading] = useState(false);
  const apiEndpoint = '/api/email';

  const sendEmail = async (data: IFormInput) => {
    const text = `
    name: ${data.firstName} ${data.lastName}\n
    phone: ${data.phone}\n
    email: ${data.email}\n
    company: ${data.companyName}\n
    website: ${data.website}\n
    message: ${data.message}\n
    `;
    try {
      setLoading(true);
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify({subject: `Message from ${data.firstName} ${data.lastName} (${data.email})`, text}),
      }).then(res => res.json());
      onSuccess();
      console.log({response});
    } catch (err) {
      console.log(err);
      onError();
    } finally {
      setLoading(false);
    }
  };
  return {sendEmail, loading};
}
