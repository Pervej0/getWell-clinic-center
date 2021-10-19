import React, { useState } from "react";
import "./Login.css";
import google from "../../Images/Provider/google.png";
import facebook from "../../Images/Provider/facebook.png";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import { useLocation, useHistory } from "react-router";

const Login = () => {
  const { manuallySignIn, signInGoogle, signInFacebook } = useFirebase();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const location = useLocation();
  const history = useHistory();

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // redirect user-
  const { from } = location.state || { from: { pathname: "/" } };

  const signInSubmit = () => {
    if (userInfo.email === "") {
      setUserError("Please enter your email!");
      return;
    }
    if (userInfo.password === "") {
      setUserError("Please enter your password!");
      return;
    }

    manuallySignIn(userInfo.email, userInfo.password, from, history);
    setUserError("");
  };

  return (
    <section className="login-section flex items-center">
      <div className="w-2/4 mx-auto border border-gray-400 p-6 text-white my-8">
        <div className="text-center">
          <div className="mb-3">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Your Email:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-l border-b"
              onBlur={handleUserInput}
              name="email"
              type="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Your Password:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-l border-b"
              onBlur={handleUserInput}
              name="password"
              type="password"
              required
              placeholder="Enter password"
            />
          </div>
          <p className="text-red-300 text-xl my-4">{userError}</p>
          <button
            type="button"
            onClick={signInSubmit}
            className="inline-block py-2 px-5 transition duration-500 ease-in-out hover:bg-transparent hover:text-white border hover:border-white text-white bg-blue-600 uppercase"
          >
            Log in
          </button>
        </div>
        <div className="text-center">
          <div className="text-white text-center my-4 text-lg">
            ---------------- or ------------------
          </div>
          <div className="text-center">
            <button onClick={() => signInGoogle(from, history)}>
              <img width="50" src={google} alt="" />
            </button>
            <button onClick={() => signInFacebook(from, history)}>
              <img width="50" src={facebook} alt="" />
            </button>
          </div>
          <div>
            <h4>
              Are you new here?{" "}
              <Link to="/register" className="text-yellow-400 font-semibold">
                Create an account
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
