import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import join from "../assets/join.jpg";
import mentor from "../assets/mentor.png";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import { Card, CardContent } from "./ui/card";
const Join = () => {
  return (
    <div className="font-outfit font-light text-center flex flex-col justify-center items-center mt-[80px] md:mt-[150px] mx-auto px-4  md:w-[80%] 2xl:w-[70%]">
      <Fade className="font-bold text-[50px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
        Mission Statement
      </Fade>
      <div className="mt-10 border-white w-[90%] justify-center text-center items-center hover:scale-105 transition duration-300 hover:border-[0.5px] hover:border-black px-[10px] py-[10px]  rounded-[10px]">
        Our mission as The Big Five is to empower the Rwandan youth by providing
        them with the knowledge and skills needed for the modern job market,
        ultimately contributing to a more robust and resilient economy.
        Addressing these critical issues can pave the way for a brighter future
        for Rwanda's youth and the nation.
      </div>
    </div>
  );
};

export default Join;
