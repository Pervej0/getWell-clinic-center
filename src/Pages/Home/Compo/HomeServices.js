import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useService from "../../../Hooks/UseService";
import Service from "../../Services/Service/Service";

const HomeServices = () => {
  const [services] = useService();
  return (
    <section className="md:px-14 p-4">
      <div className="title text-center">
        <h2 className="text-3xl mb-2 font-semibold font-serif">Our Services</h2>
        <hr className="w-56 mx-auto border-black" />
      </div>
      <div className="my-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {services.slice(0, 6)?.map((item) => (
            <Service service={item} key={item.id} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/services" className="my-btn py-1 px-5 rounded-full">
            Browse More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
