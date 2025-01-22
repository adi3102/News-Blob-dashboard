import React, { useState } from "react";
import { Link } from "react-router-dom";
React;

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [error, setError] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
            Login
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col gap-8 items-center justify-center"
          >
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md outline-none"
              type="email"
              required
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md outline-none "
              type="password"
              required
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            {error && (
              <p className="text-red-500 font-medium text-sm text-center">
                {error}
              </p>
            )}

            <button className="text-sm px-4 py-2 bg-zinc-700 text-white font-medium rounded-md hover:bg-zinc-600  w-full mt-3">
              Submit
            </button>
            <Link
              to={"/"}
              className=" text-center text-xs font-medium border-b-2 w-[5.5rem] border-zinc-200 hover:border-zinc-700 transition-all"
            >
              Back to Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
