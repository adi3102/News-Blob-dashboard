import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col  gap-20">
      <h1 className="text-9xl font-semibold">404 Page Not Found</h1>
      <Link
        to={"/"}
        className="text-xl font-medium border-b-2 border-zinc-200 hover:border-zinc-700 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
