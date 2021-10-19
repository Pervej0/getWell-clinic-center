import {
  faFacebook,
  faLinkedin,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Faces = ({ face }) => {
  const { name, title, img } = face;
  return (
    <div className="border border-gray-200 face-item pb-4">
      <div className="face-img">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="p-2 col-span-2">
        <h2 className="text-gray-700 font-serif font-semibold text-xl">
          {name}
        </h2>
        <small className="text-gray-600 font-medium">{title}</small>
      </div>
      <div className="icon-field">
        <i title="facebook">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </i>
        <i title="whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </i>
        <i title="skype">
          <FontAwesomeIcon icon={faSkype} size="lg" />
        </i>
        <i title="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </i>
      </div>
    </div>
  );
};

export default Faces;
