import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import aboutPic from "../assets/aboutPic.jpeg";
import { FaArrowRight } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import mission from "../assets/mission.svg";
import vision from "../assets/vision.svg";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  const info = [
    {
      id: 1,
      image: "/mission.svg",
      description:
        "Our mission at The Big Five is to transform Rwanda's education system by fostering innovative programs and partnerships that equip youth with essential skills for the job market, contributing to a stronger and more resilient economy",
    },
    {
      id: 2,
      image: "/vision.svg",
      description:
        "To create a future where every young Rwandan  is equipped with the skills and opportunities to succeed, driving sustainable economic growth and positioning Rwanda as a leader in innovation and education across Africa",
    },
  ];

  return (
    <div className="mx-auto px-4 pt-[60px] font-light font-outfit md:px-0 md:w-[70%] flex flex-col justify-center items-start text-center">
      <div className="mb-[50px]">
        <h1 className="text-[30px]">
          <Fade className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
            About
          </Fade>
          <Fade triggerOnce className="mt-[50px]">
            EMPOWER, HARNESS & COLLABORATE
          </Fade>
        </h1>
        <Slide triggerOnce direction="up" className="mt-[20px]">
          Within The Big Five Initiative, we empower the next generation of
          leaders by integrating education with sustainable natural resource
          management. We aim to inspire youth through innovative programs that
          foster personal growth, leadership, and community impact. Together, we
          cultivate a brighter future for Rwanda
        </Slide>
      </div>
      <div>
        <div className="flex flex-col justify-center items-top w-full lg:flex-row gap-[20px]">
          <Slide
            triggerOnce
            direction="up"
            className="p-2 shadow-lg w-full h-full rounded-[10px] transform transition duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col justify-center text-center items-center border-2 border-black px-[20px] py-[20px]  rounded-[10px]">
              <img src={mission} alt="Mission" className="w-[120px] mb-8" />{" "}
              <p className="">
                We endeavor to transform Rwanda's education system by fostering
                innovative programs and partnerships that equip youth with
                essential skills for the job market, contributing to a stronger
                and more resilient economy
              </p>
            </div>
          </Slide>

          <Slide
            triggerOnce
            delay={100}
            direction="up"
            className="p-2 shadow-lg w-full h-full rounded-[10px] transform transition duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col justify-center text-center items-center border-2  border-black p-2 px-[20px] py-[20px]  rounded-[10px]">
              <img src={vision} alt="Mission" className="w-[120px] mb-8" />{" "}
              <p className="">
                We envision creating a future where every young Rwandan is
                equipped with the skills and opportunities to succeed, driving
                sustainable economic growth and positioning Rwanda as a leader
                in innovation and education across Africa
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
