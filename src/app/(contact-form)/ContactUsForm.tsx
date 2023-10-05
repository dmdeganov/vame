'use client';
import React from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import {useSendEmail} from '@/app/(contact-form)/useSendEmail';
import useModal from '@/hooks/useModal';
import EmailSentModal from '@/app/(contact-form)/EmailSentModal';

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  message: string;
}
const ContactUsForm = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      website: '',
      message: '',
    },
  });
  const {isOpen, open, close, modalData, setModalData} = useModal<{success: boolean}>();
  const onSuccess = () => {
    setModalData({success: true});
    reset();
    open();
  };
  const onError = () => {
    setModalData({success: false});
    open();
  };
  const {sendEmail, loading} = useSendEmail({onError, onSuccess});

  const onSubmit: SubmitHandler<IFormInput> = async data => sendEmail(data);

  return (
    <>
      <form className="contact-form">
        <div className="contact-form__row">
          <Controller
            name="firstName"
            control={control}
            rules={{required: true}}
            render={({field}) => <TextField {...field} label="Name" ref={null} />}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{required: true}}
            render={({field}) => <TextField {...field} label="Surname" ref={null} />}
          />
        </div>
        <div className="contact-form__row">
          <Controller
            name="email"
            control={control}
            rules={{required: true}}
            render={({field}) => <TextField {...field} label="E-mail" ref={null} type="email" />}
          />
          <Controller
            name="phone"
            control={control}
            rules={{required: true}}
            render={({field}) => <TextField {...field} label="Phone" ref={null} type="tel" />}
          />
        </div>
        <Controller
          name="companyName"
          control={control}
          render={({field}) => <TextField {...field} label="Company name" ref={null} />}
        />
        <Controller
          name="website"
          control={control}
          render={({field}) => <TextField {...field} label="Website" ref={null} />}
        />
        <Controller
          name="message"
          control={control}
          rules={{required: true}}
          render={({field}) => <TextField {...field} label="How can we help you?" ref={null} multiline minRows={7} />}
        />
        <Button
          className="button--filled"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || loading}
          loading={loading}
        >
          Get started
        </Button>
      </form>
      <EmailSentModal isOpen={isOpen} close={close} success={modalData?.success as boolean} />
    </>
  );
};

export default ContactUsForm;
