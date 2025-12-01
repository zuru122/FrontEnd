import React from "react";

function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-2/4 flex shadow-lg overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 h-auto">
          <img
            src="/bg.jpg"
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>

        {/* Right Content */}
        <div className="relative w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-20">
            <button className="absolute top-5 right-7 text-white bg-black rounded-2xl px-5 py-2 text-center hover:bg-gray-500 cursor-pointer">
              Sign in
            </button>
          </div>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 rounded border"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded border"
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
