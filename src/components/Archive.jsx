import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const gallery = {
  SectionTitle: "Moments in Time",
  SectionDescription:
    "Cherished Experiences: proud victories, simple enjoyments and happy times",
  Images: [
    { pic: "/d7.JPG" },
    { pic: "/f4.jpeg" },
    { pic: "/d6.JPG" },
    { pic: "/b5.JPG" },
    { pic: "/a4.JPG" },
    { pic: "/c2.JPG" },
    { pic: "/c3.JPG" },
    { pic: "/c4.JPG" },
    { pic: "/c5.JPG" },
    { pic: "/c7.JPG" },
    { pic: "/d1.JPG" },
    { pic: "/d4.JPG" },
    { pic: "/d8.JPG" },
    { pic: "/d9.JPG" },
    { pic: "/e2.JPG" },
    { pic: "/e3.JPG" },
    { pic: "/e6.jpg" },
    { pic: "/f1.JPG" },
    { pic: "/f3.JPG" },
    { pic: "/g4.JPG" },
    { pic: "/g5.JPG" },
    { pic: "/g7.jpeg" },
    { pic: "/g8.jpeg" },
    { pic: "/h1.jpeg" },
    { pic: "/h2.jpeg" },
    { pic: "/h3.jpeg" },
    { pic: "/h4.jpeg" },
    { pic: "/h5.jpeg" },
    { pic: "/h6.jpeg" },
    { pic: "/h7.jpeg" },
    { pic: "/h8.jpeg" },
    { pic: "/h9.jpeg" },
    { pic: "/i1.jpeg" },
  ],
};

function Archive() {
  const [setImageLoading] = useState(true);
  const [image, setImage] = useState("");
  const [act, setAct] = useState("");
  const [showImageFull, setShowImageFull] = useState(false);
  const { pathname } = useLocation();
  const [randomImages, setRandomImages] = useState([]);
  const audioRef = useRef(null);

  const audioFiles = ["/song1.mp3", "/song2.mp3", "/song3.mp3"];

  // Function to select a random song
  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedSong = audioFiles[randomIndex];
    if (audioRef.current) {
      audioRef.current.src = selectedSong;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Shuffle images on load
    function getRandomGallery(gallery) {
      const shuffledGallery = gallery.sort(() => 0.5 - Math.random());
      return shuffledGallery;
    }
    setRandomImages(getRandomGallery(gallery.Images));

    // Play a random song on component mount
    playRandomSong();
  }, []);

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

  const showImage = (pic, act) => {
    setImage(pic);
    setAct(act);
    setShowImageFull(true);
  };

  return (
    <div className="mt-[2rem] bg-light-body-color pt-16 min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip font-outfit ">
      <audio ref={audioRef} loop />
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col "
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
            alt={act}
          />
        </div>

        {/* Title & Subtitle */}
        <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
          <div className="min-h-[250px] w-full h-full flex flex-col items-center justify-center mt-[60px]">
            <h1 className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black ">
              {gallery.SectionTitle}
            </h1>
            <p className="justify-center text-center py-10 w-[80%] text-[30px] font-light">
              {gallery.SectionDescription}
            </p>
          </div>
        </Reveal>

        {/* Images grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full max-w-[1000px] space-y-5 h-fit pb-10 relative ">
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
                onClick={() => showImage(image.pic)}
                className="relative group cursor-pointer"
              >
                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-3xl bg-black/110 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                <img
                  onLoad={handleImageLoad}
                  src={image.pic}
                  className="rounded-xl w-full object-cover max-h-[440px] min-h-[150px] bg-stone-100"
                  alt={image || "Gallery Image"}
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
