import React from "react";
import useService from "../../Hooks/UseService";
import Feedback from "./Feedback/Feedback";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useService();
  console.log(services);
  return (
    <>
      <section>
        <div className="service-banner flex items-center justify-center">
          <h1 className="text-3xl text-white font-serif">Services</h1>
        </div>
      </section>
      <section>
        <div className="md:px-14 p-4">
          <div className="title text-center my-14">
            <h2 className="text-3xl mb-2 font-semibold font-serif">
              Our Services
            </h2>
            <hr className="w-56 mx-auto border-black" />
          </div>
          <div className="grid justify-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {services?.map((item) => (
              <Service service={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:px-14 p-4">
        <div className="title text-center mb-10">
          <h2 className="text-3xl mb-2 font-semibold font-serif">Feedback</h2>
          <hr className="w-56 mx-auto border-black" />
        </div>
        <div className="grid justify-center gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <Feedback
            name="Mask Stevens"
            imgSrc="https://i.ibb.co/gS4nQvW/f1.jpg"
          />
          <Feedback
            name="Andrew Jackson"
            imgSrc="https://i.ibb.co/N7d99qq/f2.jpg"
          />
          <Feedback
            name="Ella Lopez"
            imgSrc="https://i.ibb.co/ZXDVJYn/f3.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
