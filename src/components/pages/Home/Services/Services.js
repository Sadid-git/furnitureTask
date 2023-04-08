import React from "react";

const Services = () => {
  return (
    <div className="m-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5">
        <div className="flex items-center  bg-amber-300 p-3 rounded-lg hover:scale-105">
          <div className="bg-slate-200 p-3 rounded-full mr-3">
            <samp className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </samp>
          </div>
          <div>
            <h1 className="font-bold">Free Shipping</h1>
            <p>We give your best Produts</p>
          </div>
        </div>
        <div className="flex items-center  bg-red-300 p-3 rounded-lg hover:scale-105">
          <div className="bg-slate-200 p-3 rounded-full mr-3">
            <samp className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </samp>
          </div>
          <div>
            <h1 className="font-bold">Easy Returns</h1>
            <p>We give your best Produts</p>
          </div>
        </div>
        <div className="flex items-center  bg-orange-300 p-3 rounded-lg hover:scale-105">
          <div className="bg-slate-200 p-3 rounded-full mr-3">
            <samp className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </samp>
          </div>
          <div>
            <h1 className="font-bold">Secure Payment</h1>
            <p>We give your best Produts</p>
          </div>
        </div>
        <div className="flex items-center  bg-lime-300 p-3 rounded-lg hover:scale-105">
          <div className="bg-slate-200 p-3 rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-bold">Back Guarantee</h1>
            <p>We give your best Produts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
