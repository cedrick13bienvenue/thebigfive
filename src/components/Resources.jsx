import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaFacebook, FaYoutube } from "react-icons/fa6";
import mentor1 from "../assets/mentor1.svg";
import events from "../assets/events.jpg";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocation, IoTimerOutline } from "react-icons/io5";
import whole from "../assets/whole.svg";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  return (
    <div
      style={{
        backgroundImage: `url(${whole})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] 2xl:w-[70%] xl:px-0 mx-auto p-4 mt-[150px] font-outfit text-light">
        <div>
          <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
            IGA -elevate 5
          </h1>
          <p className="mt-[30px] text-[#474747]">
            A cutting-edge digital platform that equips young Rwandans with
            essential job skills through interactive courses in ICT,
            entrepreneurship, communication, and more. We connect students with
            mentors, offer internships for real-world experience, and provide
            certifications in partnership with companies to help students secure
            jobs and drive Rwanda's future growth.
          </p>
          <motion.button
            className="mt-[30px] mb-[50px] bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
            initial="hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-white">TRY IGA</p>
            <span className="text-black bg-white px-[15px] py-[15px] rounded-full">
              <FaArrowRight />
            </span>
          </motion.button>
        </div>
        <div>
          <img src="./f7.JPG" className="rounded-3xl shadow-3xl mb-10"></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
