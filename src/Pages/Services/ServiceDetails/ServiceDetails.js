import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useService from "../../../Hooks/UseService";

const ServiceDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const handleArrow = () => {
    history.push("/services");
  };
  const [services] = useService();
  const targetedtItem = services.find((item) => item.id === parseInt(id));
  // const { title, description, img } = targetedtItem;
  return (
    <section className="md:px-14 p-4">
      <div className="text-right">
        <button className="py-2 px-4" onClick={handleArrow}>
          <FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
        </button>
      </div>
      <div className="border border-gray-200">
        <div className="service-img">
          <img src={targetedtItem?.img} alt="" />
        </div>
        <div className="p-2 col-span-2">
          <h2 className="text-gray-700 font-serif font-semibold text-xl mb-2">
            {targetedtItem?.title}
          </h2>
          <p className="mb-4">{targetedtItem?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
