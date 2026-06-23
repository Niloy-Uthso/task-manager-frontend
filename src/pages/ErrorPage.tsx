import React from "react";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Something went wrong.</p>
      <p className="text-gray-600 mb-4">
        {error.statusText || error.message || "Unknown error"}
      </p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
      >
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
