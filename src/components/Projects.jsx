import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import whole from "../assets/whole.svg";
import { div } from "framer-motion/client";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("videos"); // State to track active tab

  const [selectedId, setSelectedId] = useState(null);

  // Sample images for the BYEN PHOTO SHOOT tab
  const images = [
    {
      id: 1,
      src: "/1.jpeg",
      alt: "Team member 1",
    },
    {
      id: 2,
      src: "/2.jpg",
      alt: "Team member 2",
    },
    {
      id: 3,
      src: "/3.jpg",
      alt: "Team member 3",
    },
    {
      id: 4,
      src: "/4.jpg",
      alt: "Team member 4",
    },
    {
      id: 5,
      src: "/5.jpg",
      alt: "Team member 5",
    },
    {
      id: 6,
      src: "/6.jpg",
      alt: "Team member 6",
    },
    {
      id: 7,
      src: "/7.jpg",
      alt: "Team member 7",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${whole})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-[80%] 2xl:w-[70%] xl:px-0 mx-auto p-4 mt-[150px] font-outfit font-light">
        {/* Tab content */}
        <div className="space-y-6 py-[80px]">
          {/* Image Pagination Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <motion.div
                key={image.id} // Add key for each item
                layoutId={image.id.toString()} // Ensure layoutId is a string
                onClick={() => setSelectedId(image.id)}
                className="cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <div className="">
                <motion.div
                  layoutId={selectedId.toString()}
                  className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
                  onClick={() => setSelectedId(null)} // Close the modal when clicking outside the image
                >
                  <motion.img
                    src={images.find((img) => img.id === selectedId)?.src}
                    className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg"
                    alt="Selected"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
