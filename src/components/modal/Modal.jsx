import React from "react";
// import "./Modal.css";

const Modal = ({ item, onClick }) => {
  return (
    <div className="absolute left-0 p-4 w-full h-auto">
      <div className="relative bg-acend-25 shadow border rounded-lg ">
        <div>
          <button
            onClick={() => onClick(item)}
            type="button"
            className="absolute top-3 right-2.5 text-acend-100 bg-transparent hover:bg-gray-200 transition ease-in"
            data-modal-toggle="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="pt-6 px-6 lg:px-8">
            <h3 className="mb-4 text-base font-normal text-gray-900 ">
              Reason
            </h3>
          </div>{" "}
          <div className="pb-6 px-6 lg:px-8 font-normal text-acend-theme-dark">
            <p>{item?.reason}</p>
          </div>
        </div>
      </div>
      {/* <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <form className="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div> */}
    </div>
  );
};

export default Modal;
