import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary-100 text-center dark:bg-secondary-600">
      {/* Sign-up form section */}
      <div className="px-6 pt-6">
        <form action="">
          <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
            <div className="md:mb-6 md:ml-auto">
              <p className="text-secondary-800 dark:text-secondary-200">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className="relative md:mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
              >
                Email address
              </label>
            </div>

            <div className="mb-6 md:mr-auto">
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Copyright section */}
      <div className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
        © 2023 Copyright:
        <a
          className="text-secondary-800 dark:text-secondary-400"
          href="https://tw-elements.com/"
        >
          TW elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;
