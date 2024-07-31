import React, { useState } from "react";
import { motion } from "framer-motion";
import bgimg from "../assets/image/Rectangle 26.png";
import Vetor from "../assets/image/Vector.png";
import taj from "../assets/image/taj.png";
import fall from "../assets/image/fall.png";
import church from "../assets/image/church.png";
import Group from "../assets/image/Group.png";
import "./Login.css";
import Login from "./Login";
import Register from "./Register";

const LoginSignup = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const onGettingInfo = (info) => {
    console.log(info);
    setLoginOrRegister(!loginOrRegister);
  };
  return (
    <div className="page-container flex flex-wrap ">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" lg:w-1/2 lg:p-0" //w-full removed from this line
      >
        <div className="flex items justify-center ">
          <img
            className="bg-img w-full h-screen object-cover"
            src={bgimg}
            alt="about"
          />
          <div className="bg-text flex items justify-center">
            <img className="object-cover" src={Group} alt="about" />
          </div>
        </div>
      </motion.div>
      <div
        className=" relative lg:w-1/2" //w-full removed from this line
      >
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="content-end	r-0">
            <img className="fixed mt-5 right-0" src={Vetor} alt="Vector" />
          </div>

          <div className="flex justify-center ">
            <p className="mt-20 text-center font-bold bg-gradient-to-r from-pink-400 via-slate-500 to-purple-700 bg-clip-text text-3xl trcking-tight text-transparent text-4xl">
              Welcome{" "}
            </p>
          </div>
          {loginOrRegister ? (
            <p className="text-center text-slate-400">login to explore!</p>
          ) : (
            <p className="text-center text-slate-400">
              Register here to explore!
            </p>
          )}
        </motion.div>

        {loginOrRegister ? (
          <Login getInfo={onGettingInfo} />
        ) : (
          <Register getInfo={onGettingInfo} />
        )}

        <div className="content-end align-bottom 	r-0">
          <img
            className="absolute mt-5 left-50 bottom-0 flex justify-content w-23 h-28"
            src={taj}
            alt="taj"
          />
          <img
            className="absolute mt-5 right-10 bottom-0 flex justify-content w-23 h-28"
            src={fall}
          />
          <img
            className="absolute mt-5 right-0 bottom-0 flex justify-content w-23 h-28"
            src={church}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
