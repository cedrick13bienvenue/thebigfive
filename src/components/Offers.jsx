import React from "react";
import "../App.css";
import resources from "../assets/resources.webp";
import event from "../assets/event.jpg";
import mentor from "../assets/mentor.png";
import community from "../assets/community.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";

const Offers = () => {
  return (
    <div className="mt-[80px] md:mt-[150px] flex flex-col font-outfit font-light w-full mx-auto px-4 md:px-0 md:w-[80%] 2xl:w-[70%]">
      <div className="flex flex-col justify-center items-center text-center">
        <Fade className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
          Mission Statement
        </Fade>
      </div>

      <Fade></Fade>
    </div>
  );
};

export default Offers;
