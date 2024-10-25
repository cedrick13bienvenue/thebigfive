import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import { Zoom } from "react-awesome-reveal";

const Latest = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card

  const members = [
    {
      id: 1,
      name: "Boss Ruramira",
      description: "Team Lead",
      image: "/jabari.jpeg",
    },
    {
      id: 2,
      name: "Cedrick Bienvenue",
      description: "Tech Lead",
      image: "/ammon.jpg",
    },
    {
      id: 3,
      name: "Usher Cozak",
      description: "Communications Lead",
      image: "/coger.jpeg",
    },
    {
      id: 4,
      name: "Rio Cyusa",
      description: "Content Production Lead",
      image: "/jabari.jpeg",
    },
    {
      id: 5,
      name: "Aurore Pascaline",
      description: "Strategic Research Lead",
      image: "/jabari.jpeg",
    },
    {
      id: 6,
      name: "Hongson Kevin",
      description: "Community Engagement Lead",
      image: "/jabari.jpeg",
    },
  ];

  const handleReadMore = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="font-outfit  font-light mx-auto px-4 md:w-[80%] mt-[100px] pb-[60px] md:pb-[150px] 2xl:w-[70%]">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[60px] relative  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
          Meet the Team
        </h1>
      </div>

      <Zoom>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          {members.map((member) => (
            <div
              key={member.id}
              className=" relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center group"
            >
              <img
                src={member.image}
                alt="Community"
                className="w-full h-[250px] object-cover rounded-lg shadow-lg"
              />
              <div className="flex-col absolute inset-0  rounded-lg bg-gradient-to-t from-black to-[#00000000] flex items-end justify-start">
                <p className="absolute bottom-3 left-5 text-white text-[14px] font-medium mb-5 bg-[#e72828] bg-opacity-20 border border-[#e72828] px-5 py-1 rounded-full transform transition-transform duration-400 group-hover:-translate-y-10">
                  {member.name}
                </p>
                <p className="text-white bottom-2 left-5 absolute">
                  {member.description}
                </p>
              </div>
              {/* <div className="flex flex-row gap-3 text-[25px] absolute bottom-0 mb-5 mx-5 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to={member.social.ig}>
                  <RiInstagramFill className="hover:text-[#e72828] transition" />
                </Link>
                <Link to={member.social.x}>
                  <FaSquareXTwitter className="hover:text-[#e72828] transition" />
                </Link>
                <Link to={member.social.linkedIn}>
                  <FaLinkedinIn className="hover:text-[#e72828] transition" />
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </Zoom>

      {/* Modal for full information */}
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 mx-auto px-4">
          <div className="bg-white p-6 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
            <p className="mb-4">{selectedCard.description}</p>

            <motion.button
              onClick={handleCloseModal}
              className="mt-[20px] font-light bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[8px] rounded-full"
              initial="hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-white">CLOSE</p>
              <span className="bg-white px-[10px] py-[10px] rounded-full">
                <FaArrowRight />
              </span>
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Latest;
