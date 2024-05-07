'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section className="w-full flex flex-col items-center p-6">
      <div id="confirmation-msg">
        <span className="place-holder">p</span>

        {/* {formSubmitted && <p>{confirmationMessage}</p>} */}
      </div>

      <form action="" className="w-full">
        <div className="space-y-12">
          <div className="pb-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label className="block text-lg manrope-semibold leading-6">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
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
                    name="email"
                    className="w-full flex p-1.5 rounded-md outline-none shadow-sm ring-1 ring-inset ring-accentlight focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent sm:max-w-m"
                    placeholder="janesmith@email.com"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-lg manrope-semibold leading-6">
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    className="w-full flex p-1.5 rounded-md outline-none shadow-sm ring-1 ring-inset ring-accentlight focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent sm:max-w-m"
                    placeholder="Jane Smith LLC"
                  />
                </div>
              </div>

              <div className="mt-2 space-y-4">
                <label className="block text-xl manrope-semibold leading-6">
                  Service
                </label>

                <fieldset>
                  <div className="mt-2 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          name="operations"
                          type="checkbox"
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
                          name="finance"
                          type="checkbox"
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
                          name="hr"
                          type="checkbox"
                          className="h-4 w-4 rounded border-accentlight text-accent focus:ring-accent"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label className="text-base">Human Resources</label>
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
                    name="about"
                    rows={3}
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
        </div>
      </form>
    </section>
  );
}
