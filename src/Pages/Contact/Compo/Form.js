import React from "react";

const Form = () => {
  return (
    <div className="col-span-2 border border-gray-300 p-4">
      <div className="mb-2">
        <label className="block text-left font-semibold text-xl mb-2">
          Full Name:
        </label>
        <input
          className="py-3 px-2 w-full border border-black"
          type="text"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-2">
        <label className="block text-left font-semibold text-xl mb-2">
          Email:
        </label>
        <input
          className="py-3 px-2 w-full border border-black"
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-2">
        <label className="block text-left font-semibold text-xl mb-2">
          Phone:
        </label>
        <input
          className="py-3 px-2 w-full border border-black"
          type="number"
          placeholder="Enter phone no."
        />
      </div>
      <div className="mb-2">
        <label className="block text-left font-semibold text-xl mb-2">
          Details:
        </label>
        <textarea
          className="w-full border border-black px-2"
          rows="5"
          placeholder="here.."
        ></textarea>
      </div>
      <button className="my-btn py-1 px-4 font-semibold">Submit</button>
    </div>
  );
};

export default Form;
