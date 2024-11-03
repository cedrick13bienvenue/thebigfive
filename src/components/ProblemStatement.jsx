import React from "react";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";

const ProblemStament = () => {
  return (
    <div className="mt-[80px] md:mt-[150px] flex flex-col font-outfit font-light w-full mx-auto px-4 md:px-0 md:w-[80%] 2xl:w-[70%]">
      <div className="flex flex-col justify-center items-center text-center">
        <Fade className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
          Problem Statement
        </Fade>
        <div
          id="problem"
          className="mt-10 border-white w-[90%] justify-center text-center items-center hover:scale-105 transition duration-300 hover:border-[0.5px] hover:border-black px-[10px] py-[10px]  rounded-[10px]"
        >
          Despite notable advancements in Rwanda's educational sector, a
          critical gap persists between the skills youth acquire and the job
          market demands. Many young individuals experience unemployment and
          underemployment, primarily due to a lack of practical skills and
          real-world experience. As industries evolve with technological
          advancements and shifting market needs, the current educational system
          falls short in equipping students with the necessary competencies.
          Addressing this skills gap is vital to empower the next generation to
          contribute meaningfully to Rwanda's development, fostering a resilient
          economy and ensuring a brighter future for themselves and their
          communities. By prioritizing an educational approach rooted in
          empathy, love, and integrity, we can create a more supportive
          environment that uplifts the youth and strengthens the nation.
        </div>
      </div>

      <Fade></Fade>
    </div>
  );
};

export default ProblemStament;
