import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center px-4">
  <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Thank You!</h1>
  <p className="text-lg text-gray-700 mb-6">
    We appreciate your feedback. Your response has been submitted successfully.
  </p>
  <Link
    to="/"
    className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
  >
    Go Back to Home
  </Link>
</div>

  );
};

export default ThankYou;
