import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { gallery } from "../Content/Content";

function Archive() {
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
    <div className="mt-[2rem] bg-light-body-color pt-16 min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip font-outfit">
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        <div
          className={`fixed top-0 left-0 w-full h-full z-30 flex flex-col items-center justify-center ${
            showImageFull ? "visible" : "invisible"
          }`}
        >
          <div
            onClick={() => setShowImageFull(false)}
            className={`absolute top-0 left-0 bg-black/10 w-full h-full backdrop-blur-md transition-all ease-out ${
              showImageFull ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <img
            src={image}
            className={`max-h-[80%] brightness-[110%] min-w-[300px] max-w-[80%] object-cover shadow rounded-xl z-10 select-none transition-all ease-in ${
              showImageFull ? "opacity-100" : "opacity-0 scale-95"
            }`}
          />
        </div>

        {/* Title & Subtitle */}
        <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
          <div className="min-h-[250px] w-full h-full flex flex-col items-center justify-center mt-10">
            <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
              {gallery.SectionTitle}
            </h1>
            <p className="justify-center text-center py-10 w-[70%]">
              {gallery.SectionDescription}
            </p>
          </div>
        </Reveal>

        {/* Images grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full max-w-[1000px] space-y-5 h-fit pb-10 relative">
          {randomImages.map((image, index) => (
            <Reveal
              keyframes={customAnimation}
              duration={1000}
              cascade
              damping={0.05}
              triggerOnce
              key={index}
            >
              <div
                onClick={() => showImage(image.url, image.activity)}
                className="relative group cursor-pointer"
              >
                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-3xl bg-black/110 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                <img
                  onLoad={handleImageLoad}
                  src={image.url}
                  className="rounded-xl w-full object-cover max-h-[440px] min-h-[150px] bg-stone-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;
