'use client';

import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import validator from 'validator';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isHRChecked, setIsHRChecked] = useState(false);
  const [isOpsChecked, setIsOpsChecked] = useState(false);
  const [isFinChecked, setIsFinChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          'contact_service',
          'contact_form',
          form.current!,
          process.env.REACT_APP_EMAIL_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              handleSuccessfulSubmit();
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } catch {
      handleError();
    }
  };

  const handleSubmit = (message: string, timeoutTime: number): void => {
    setEmailMessage('');
    setFormSubmitted(true);
    setConfirmationMessage(message);
    setIsHRChecked(false);
    setIsOpsChecked(false);
    setIsFinChecked(false);
    setFormValues({
      name: '',
      email: '',
      company: '',
      message: '',
      service: '',
    });

    setTimeout(() => setFormSubmitted(false), timeoutTime);
  };

  const handleSuccessfulSubmit = () => {
    const successMessage = 'Thank you for reaching out, we will be in touch!';
    handleSubmit(successMessage, 7000);
  };

  const handleError = () => {
    const errorMessage =
      "Oops! Something isn't working, email us directly instead.";
    handleSubmit(errorMessage, 8000);
  };

  const validateEmail = (e: FormEvent<HTMLInputElement>) => {
    const email: string = (e.target as HTMLInputElement).value;

    if (validator.isEmail(email)) {
      setEmailMessage('');
    } else {
      setEmailMessage('Please enter a valid email...');
    }
  };

  const handleEmail = (e: FormEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      email: (e.target as HTMLInputElement).value,
    });
    validateEmail(e);
  };

  const handleCheck = (service: string) => {
    switch (service) {
      case 'hr':
        setIsHRChecked(!isHRChecked);
        break;
      case 'ops':
        setIsOpsChecked(!isOpsChecked);
        break;
      case 'fin':
        setIsFinChecked(!isFinChecked);
        break;
      default:
        console.log('Invalid option!');
    }
  };

  return (
    <section className="w-full flex flex-col items-center p-6 sm:w-2/3 md:w-1/3">
      <div id="confirmation-msg">
        <span className="place-holder">p</span>

        {formSubmitted && <p>{confirmationMessage}</p>}
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate
        className="w-full md:mt-16"
      >
        <div className="pb-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="col-span-full">
              <label className="block text-lg manrope-semibold leading-6">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="from_name"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                  required
                  className="w-full flex p-1.5 rounded-md outline-none shadow-sm ring-1 ring-inset ring-accentlight focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent sm:max-w-m"
                  placeholder="Jane Smith"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-lg manrope-semibold leading-6">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="from_email"
                  value={formValues.email}
                  onChange={(e) => handleEmail(e)}
                  required
                  className="w-full flex p-1.5 rounded-md outline-none shadow-sm ring-1 ring-inset ring-accentlight focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent sm:max-w-m"
                  placeholder="janesmith@email.com"
                />
                <p className="text-sm">
                  {emailMessage}
                  <span className="place-holder">p</span>
                </p>
              </div>
            </div>

            <div className="col-span-full -mt-4">
              <label className="block text-lg manrope-semibold leading-6">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="from_company"
                  value={formValues.company}
                  onChange={(e) =>
                    setFormValues({ ...formValues, company: e.target.value })
                  }
                  required
                  className="w-full flex p-1.5 rounded-md outline-none shadow-sm ring-1 ring-inset ring-accentlight focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent sm:max-w-m"
                  placeholder="Jane Smith LLC"
                />
              </div>
            </div>

            <div className="col-span-full space-y-2">
              <label className="block text-lg manrope-semibold leading-6">
                Service
              </label>

              <fieldset>
                <div className="space-y-2">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        name="selected_service"
                        value=" Operations"
                        type="checkbox"
                        checked={isOpsChecked}
                        onChange={() => handleCheck('ops')}
                        className="h-4 w-4 rounded border-accentlight text-accent focus:ring-accent"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label className="text-base">Operations</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        name="selected_service"
                        value=" Finance"
                        type="checkbox"
                        checked={isFinChecked}
                        onChange={() => handleCheck('fin')}
                        className="h-4 w-4 rounded border-accentlight text-accent focus:ring-accent"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label className="text-base">Finance</label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        name="selected_service"
                        value=" Human Resources"
                        type="checkbox"
                        checked={isHRChecked}
                        onChange={() => handleCheck('hr')}
                        className="h-4 w-4 rounded border-accentlight text-accent focus:ring-accent"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label className="text-base w-full">Human Resources</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="col-span-full">
              <label className="block text-lg manrope-semibold leading-6">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="message"
                  rows={3}
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues({ ...formValues, message: e.target.value })
                  }
                  className="w-full flex p-1.5 rounded-md outline-none shadow-sm ring-1 ring-inset ring-accentlight focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent sm:max-w-m"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end text-lg">
            <button type="submit" className="button">
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
