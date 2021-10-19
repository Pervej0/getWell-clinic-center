import React from "react";

const MapView = () => {
  return (
    <section className="py-14 mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.064654631252!2d90.41894181429751!3d23.780711893536058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79734fd1965%3A0xc406cd2071fad212!2sGulshan%20Badda%20Link%20Rd%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1634648639643!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapView;
