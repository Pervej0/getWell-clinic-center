import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, description, id } = service;
  return (
    <div className="border border-gray-200 service-item pb-4">
      <div className="service-img">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="p-2 col-span-2">
        <h2 className="text-gray-700 font-serif font-semibold text-xl">
          {title}
        </h2>
        <p className="mb-5">{description.slice(0, 80)}</p>
        <Link to={`/service/${id}`} className="my-btn py-1 px-4">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Service;
