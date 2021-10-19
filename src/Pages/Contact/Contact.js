import React from "react";
import Form from "./Compo/Form";
import Location from "./Compo/Location";
import MapView from "./Compo/MapView";

const Contact = () => {
  return (
    <>
      <section>
        <div className="service-banner flex items-center justify-center">
          <h1 className="text-3xl text-white font-serif">Contact Us</h1>
        </div>
      </section>
      <section className="md:px-14 p-4 mb-0 md:mb-12">
        <div className="title text-center my-14">
          <h2 className="text-3xl mb-2 font-semibold font-serif">Catch US</h2>
          <hr className="w-56 mx-auto border-black" />
        </div>
        <div className="grid gap-x-5 gap-y-10 lg:gap-10 md:grid-cols-3 items-baseline sm:grid-cols-2 grid-cols-1">
          <Form />
          <Location />
        </div>
      </section>
      <MapView />
    </>
  );
};

export default Contact;
