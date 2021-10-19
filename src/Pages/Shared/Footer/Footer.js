import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white md:p-12 py-10 px-4 font-serif">
      <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-bpetween md:px-4 md:gap-6 items-baseline pb-10">
        <div>
          <div className="mb-3 border-b pb-2 border-white font-serif">
            <FontAwesomeIcon
              className="text-white"
              icon={faStethoscope}
              size="2x"
            ></FontAwesomeIcon>
            <span className="text-2xl text-white font-serif italic font-semibold tracking-wide">
              &nbsp;getWell C.C
            </span>
          </div>
          <div>
            <h6 className="mb-1 text-xl font-semibold text-white">
              Emergency Number:
            </h6>
            <small className="block">
              <FontAwesomeIcon icon={faPhone} size="xs" />
              &nbsp; 012435***
            </small>
            <small className="block">
              <FontAwesomeIcon icon={faWhatsapp} size="xs" />
              &nbsp;015335***
            </small>
          </div>
          <div className="mt-2">
            <h6 className="mb-1 text-xl font-semibold text-white">
              Ambulence Number:
            </h6>

            <small className="block">
              <FontAwesomeIcon icon={faPhone} size="xs" />
              &nbsp; 016435***
            </small>
            <small className="block">
              <FontAwesomeIcon icon={faWhatsapp} size="xs" />
              &nbsp;01335***
            </small>
          </div>
        </div>
        <div className="col-span-2 col-12 flex flex-wrap items-center md:justify-around justify-between">
          <div className="information">
            <h4 className="text-xl font-semibold text-white mb-2">
              Information
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Privacy Policy</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Career</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="helpfulLinks">
            <h4 className="text-xl font-semibold text-white mb-2">
              Helpful Links
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Services</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Tearm & Condition</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-8 col-12">
          <h4 className="mb-4 text-xl font-semibold text-white">
            To get Latest Updates
          </h4>
          <label className="bg-white px-2 block mb-2 flex items-center">
            <FontAwesomeIcon
              className="text-black border w-full"
              icon={faEnvelope}
            />
            <input
              className="py-2 px-2 text-black border-0 w-full ms-2 focus:outline-none"
              type="text"
              placeholder="Enter email"
            />
          </label>
          <Link
            to="#"
            className="transition duration-500 ease-in-out hover:bg-transparent hover:text-white border hover:border-white bg-white text-gray-800 rounded-full py-2 px-4 inline-block mt-2"
          >
            Subscribe
          </Link>
        </div>
      </div>
      <div className="border-t border-dashed pt-2 text-right">
        <small>
          2019 &copy; corportaionLtd All Right reserved ; Design by{" "}
          <span className="text-yellow-300 cursor-pointer">Pervej</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
