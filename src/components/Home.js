import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-indigo-100 lg:bg-zinc-100 ">
      {/* Flex container  */}
      <div className="flex justify-center items-center">
        {/* Image item  */}
        <div className="hidden lg:block md:w-1/2 h-screen">
          <img
            src="https://images.unsplash.com/flagged/photo-1573603867114-76112e1d7a23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=487&q=80"
            alt=""
            className="md:w-full h-full "
          />
        </div>
        {/* Item right  */}
        <div className="md:w-1/2 flex justify-center items-center h-screen p-3 md:p-0">
          {/* Form container  */}
          <div className="bg-white p-5 md:p-10 space-y-5 shadow-lg">
            <div>
              <img
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
                className="mx-auto h-12 animate-ping"
              />
            </div>
            <h1 className="text-center text-2xl  md:text-3xl font-bold">
              Login to your account
            </h1>
            <p className="text-center text-gray-400">
              Or you want{" "}
              <a
                href="#"
                className="font-medium text-indigo-500 ml-1 text-sm hover:text-indigo-400"
              >
                {" "}
                start your 14-day free trial
              </a>
            </p>
            <form action="" className="mt-6 p-2 md:p-4">
              <div className="mt-4">
                <label htmlFor="" className="font-semibold block">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-400 w-full my-2 rounded p-1 hover:border-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="" className="block font-semibold">
                  Password
                </label>
                <input
                  type="email"
                  className="border border-gray-400 w-full my-2 rounded p-1 hover:border-indigo-500"
                />
              </div>
              <div className="mt-4 text-center">
                <button className="bg-indigo-500 text-white px-5 py-2 w-full hover:bg-indigo-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
