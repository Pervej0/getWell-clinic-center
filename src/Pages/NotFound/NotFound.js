import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../Images/notFound/notFound.png";

const NotFound = () => {
  return (
    <section className="h-screen text-center flex flex-col justify-center items-center	">
      <img className="md:w-1/2 w-full mx-auto" src={notFound} alt="not found" />
      <Link to="/" className="my-btn bg-blue-600 font-semibold inline-block ">
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
