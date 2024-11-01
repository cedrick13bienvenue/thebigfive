import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { gallery } from "../Content/Content";
import { BiLoaderAlt } from "react-icons/bi";

function Gallery() {
  const [imageLoading, setImageLoading] = useState(true);
  const [image, setImage] = useState("");
  const [act, setAct] = useState("");
  const [showImageFull, setShowImageFull] = useState(false);
  const { pathname } = useLocation();
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
    // filter: blur(5px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const showImage = (url, act) => {
    setImage(url);
    setAct(act);
    setShowImageFull(true);
  };

  useEffect(() => {
    function getRandomGallery(gallery) {
      const shuffledGallery = gallery.sort(() => 0.5 - Math.random());
      return shuffledGallery;
    }
    setRandomImages(getRandomGallery(gallery.Images));
  }, []);

  return (
    <div className="mt-[2rem]  bg-light-body-color pt-16 min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip font-outfit ">
      {/* Body */}
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* full screen image */}
        <div
          className={`fixed top-0 left-0 w-full h-full z-30 flex flex-col items-center justify-center ${
            showImageFull ? "visible " : "invisible "
          }`}
        >
          <div
            onClick={() => setShowImageFull(false)}
            className={`absolute top-0 left-0 bg-black/10 w-full h-full backdrop-blur-md transition-all ease-out ${
              showImageFull ? "opacity-100 " : "opacity-0 "
            } `}
          ></div>
          <img
            src={image}
            className={` max-h-[80%] brightness-[110%] min-w-[300px] max-w-[80%] object-cover shadow rounded-xl z-10 select-none transition-all ease-in ${
              showImageFull ? "opacity-100 " : "opacity-0 scale-95  "
            }`}
          />
          {/* <p
            className={` mt-[20px] w-fit bg-white/80 rounded-2xl shadow-lg py-2 px-3 text-xs backdrop-blur-sm text-dark-body-color font-medium transition-all ease-in-out ${
              showImageFull
                ? " opacity-100 delay-200"
                : "opacity-0 -translate-y-3 scale-90"
            } `}
          >
            {act}
          </p> */}
        </div>
        {/* Hero section */}
        <div className="min-h-[250px] w-full h-full flex flex-col items-center justify-center ">
          <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
            {gallery.SectionTitle}
          </h1>
          <p className="justify-center text-center py-10 w-[70%] ">
            {gallery.SectionDescription}
          </p>
        </div>

        {/* images grid */}
        <div className=" columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full max-w-[1000px] space-y-5 h-fit pb-10 relative">
          {/* {imageLoading && (
            <div
              className={`absolute top-0 left-0 z-20 bg-white w-full h-full flex items-start justify-center `}
            >
              <BiLoaderAlt className="text-2xl text-dark-body-color/50 animate-spinLoader" />
            </div>
          )} */}
          {randomImages.map((image, index) => (
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.05}
              triggerOnce
            >
              <div
                onClick={() => showImage(image.url, image.activity)}
                className="relative group cursor-pointer"
              >
                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-3xl bg-black/110 opacity-0 group-hover:opacity-100 transition duration-300  "></span>
                <img
                  onLoad={handleImageLoad}
                  src={image.url}
                  key={index}
                  className="rounded-xl w-full object-cover max-h-[440px] min-h-[150px] bg-stone-100  "
                />
                {/* <p className="absolute bottom-3 left-3 mr-3 w-fit bg-white/80 rounded-2xl shadow-lg py-2 px-3 text-xs backdrop-blur-sm text-dark-body-color font-medium">
                  {image.activity}
                </p> */}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
