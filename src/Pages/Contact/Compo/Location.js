import React from "react";

const Location = () => {
  return (
    <div>
      <div className="mb-4">
        <label className="inline-block text-left font-semibold text-xl mb-2 border-b-2 border-black">
          Location:
        </label>
        <h5 className="font-semibold text-lg">
          Country:{" "}
          <span className="text-sm text-blue-600">South Asia, Bangladesh</span>
        </h5>
        <h5 className="font-semibold text-lg">
          City: <span className="text-sm text-blue-600">Dhaka</span>
        </h5>
        <h5 className="font-semibold text-lg">
          Street:{" "}
          <span className="text-sm text-blue-600">19/C Gulshan Road</span>
        </h5>
        <h5 className="font-semibold text-lg">
          Postal Code: <span className="text-sm text-blue-600">1212</span>
        </h5>
      </div>
      <div className="mb-4">
        <label className="inline-block text-left font-semibold text-xl mb-2 border-b-2 border-black">
          Contact:
        </label>
        <h5 className="font-semibold text-lg">
          Phone:{" "}
          <span className="text-sm text-blue-600">
            +880-172444****, +880-172444****,
          </span>
        </h5>
        <h5 className="font-semibold text-lg">
          Email:{" "}
          <span className="text-sm text-blue-600">getwellccinfo@gmail.com</span>
        </h5>
      </div>
    </div>
  );
};

export default Location;
