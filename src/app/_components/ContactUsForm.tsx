'use client';
import React from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import TextField from '@/app/_components/TextField';
import Button from "@/app/_components/Button";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  message: string;
}
const ContactUsForm = () => {
  const {control, handleSubmit, register} = useForm({
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

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="contact-form__row">
        <Controller
          name="firstName"
          control={control}
          render={({field}) => <TextField {...field} label="Name" ref={null} />}
        />
        <Controller
          name="lastName"
          control={control}
          render={({field}) => <TextField {...field} label="Surname" ref={null} />}
        />
      </div>
      <div className="contact-form__row">
        <Controller
          name="email"
          control={control}
          render={({field}) => <TextField {...field} label="E-mail" ref={null} type="email" />}
        />
        <Controller
          name="phone"
          control={control}
          render={({field}) => <TextField {...field} label="phone" ref={null} type="tel" />}
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
        render={({field}) => <TextField {...field} label="How can we help you?" ref={null} multiline minRows={7} />}
      />
      <Button className="button--filled">Get started</Button>
    </form>
  );
};

export default ContactUsForm;
