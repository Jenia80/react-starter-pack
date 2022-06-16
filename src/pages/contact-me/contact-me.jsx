import React from 'react';
import { useForm } from 'react-hook-form';
import './contact-me.scss';

function ContactUs() {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <h1>REACT HOOK FORM</h1>
      <form className="contact-me" onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register('firstName', {
              required: false,
            })}
          />
        </label>

        <label>
          Second Name:
          <input
            {...register('secondName', {
              required: false,
            })}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: false,
            })}
          />
        </label>

        <label>
          Your messsage?
          <textarea
            type="text-aria"
            {...register('text-area', {
              required: false,
            })}
          />
        </label>

        <label>
          Are you agree with our private policy:
          <input
            type="checkbox"
            {...register('checkbox', {
              required: 'checkbox required',
            })}
          />
        </label>

        <div>
          {errors?.checkbox && <p>{errors?.checkbox?.message || 'Error'}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ContactUs;
