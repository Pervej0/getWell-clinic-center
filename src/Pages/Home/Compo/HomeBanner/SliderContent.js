import React from "react";
import { Link } from "react-router-dom";

const SliderContent = ({ blog }) => {
  const { title, desc, key } = blog;
  return (
    <div>
      <div id={key} className="text-center px-4 flex items-center">
        <div>
          <h1 className="md:text-5xl  sm:text-4xl text-3xl font-bold text-white font-serif mb-4">
            {title}
          </h1>
          <p className="text-white pt-2 lg:w-2/4 sm:w-2/3 w-full mx-auto font-serif mb-4 text-lg">
            {desc.slice(0, 200)}
          </p>
          <Link
            to="/about"
            className="inline-block py-2 px-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 hover:bg-gray-700 text-white rounded-full bg-blue-600 uppercase"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
