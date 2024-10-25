import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import join from "../assets/join.jpg";
import mentor from "../assets/mentor.png";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
const Join = () => {
  return (
    <div className="font-outfit font-light text-center flex flex-col justify-center items-center mt-[80px] md:mt-[150px] mx-auto px-4  md:w-[80%] 2xl:w-[70%]">
      <Fade className="font-bold text-[50px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
        Mission Statement
      </Fade>
    </div>
  );
};

export default Join;
