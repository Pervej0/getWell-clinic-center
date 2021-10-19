import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Feedback = ({ imgSrc, name }) => {
  return (
    <div className="p-5 border">
      <div className="flex">
        <div>
          <img width="50" className="rounded-full" src={imgSrc} alt="" />
        </div>
        <div className="ml-6">
          <h4 className="text-xl text-gray-700 font-semibold font-serif">
            {name}
          </h4>
          <small className="uppercase text-gray-700 font-light">Student</small>
        </div>
      </div>
      <div>
        <p className="text-sm mt-2">
          I am very thankful to this hospital and Dr Jhon Doe for curing my
          father’s health problem with his skillful treatment.
        </p>
        <div className="">
          <FontAwesomeIcon icon={faStar} size="xs" />
          <FontAwesomeIcon icon={faStar} size="xs" />
          <FontAwesomeIcon icon={faStar} size="xs" />
          <FontAwesomeIcon icon={faStar} size="xs" />
          <FontAwesomeIcon icon={faStar} size="xs" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
