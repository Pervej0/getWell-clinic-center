import React from "react";
import useBlog from "../../Hooks/useBlog";
import useFace from "../../Hooks/useFace";
import Blogs from "./Compo/Blogs";
import Faces from "./Compo/Faces";
import "./About.css";

const About = () => {
  const [blogs] = useBlog();
  const [ourFaces] = useFace();
  console.log(ourFaces);
  return (
    <>
      <section>
        <div className="service-banner flex items-center justify-center">
          <h1 className="text-3xl text-white font-serif">About Us</h1>
        </div>
      </section>
      <section className="md:px-14 p-4">
        <div className="title text-center my-14">
          <h2 className="text-3xl mb-2 font-semibold font-serif">Blogs</h2>
          <hr className="w-56 mx-auto border-black" />
        </div>
        <div className="grid gap-5 justify-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {blogs.map((item) => (
            <Blogs key={item.id} blog={item} />
          ))}
        </div>
      </section>
      <section className="md:px-14 p-4 my-8">
        <div className="title text-center mb-14">
          <h2 className="text-3xl mb-2 font-semibold font-serif">Our Face</h2>
          <hr className="w-56 mx-auto border-black" />
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {ourFaces.map((item) => (
            <Faces key={item.id} face={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
