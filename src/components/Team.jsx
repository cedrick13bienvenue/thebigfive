import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Team = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card

  const members = [
    {
      id: 1,
      name: "Boss Ruramira",
      description: "Team Lead",
      image: "/Boss.jpeg",
      socialMedial: {
        instagram: "https://www.instagram.com/ruramira__boss/",
        linkedIn: "https://www.linkedin.com/in/boss-ruramira/",
        email: "mailto:b.ruramira@alustudent.com",
      },
    },
    {
      id: 2,
      name: "Usher Cozak",
      description: "Communications Lead",
      image: "/file.jpg",
      socialMedial: {
        instagram: "https://www.instagram.com/peng_c___/",
        linkedIn: "https://www.linkedin.com/in/ushercozak/",
        email: "mailto:c.usher@alustudent.com",
      },
    },
    {
      id: 3,
      name: "Rio Cyusa",
      description: "Content Production Lead",
      image: "/rio.jpeg",
      socialMedial: {
        instagram: "https://www.instagram.com/cyusaraul",
        linkedIn: "https://www.linkedin.com/in/cyusa-rio-dasilva-6b1b58335/",
        email: "mailto:d.cyusa1@alustudent.com",
      },
    },
    {
      id: 4,
      name: "Hongson Kevin",
      description: "Community Engagement Lead",
      image: "/Soft.jpg",
      socialMedial: {
        instagram: "https://www.instagram.com/blessed_hongson/",
        linkedIn:
          "https://www.linkedin.com/in/mugisha-kevin-hongson-a78547290/",
        email: "mailto:m.hongson@alustudent.com",
      },
    },
    {
      id: 5,
      name: "Aurore Pascaline",
      description: "Strategic Research Lead",
      image: "/Pascaline.jpeg",
      socialMedial: {
        instagram: "https://www.instagram.com/aurorepascaline",
        linkedIn: "https://www.linkedin.com/in/aurore-pascaline-mar7/",
        email: "mailto:a.isingizwe1@alustudent.com",
      },
    },
    {
      id: 6,
      name: "Cedrick Bienvenue",
      description: "Tech Lead",
      image: "/Passport.JPG",
      socialMedial: {
        instagram: "https://www.instagram.com/cedrick13bienvenue/",
        linkedIn: "https://www.linkedin.com/in/cedrick-bienvenue-256317298/",
        email: "mailto:c.bienvenue@alustudent.com",
      },
    },
  ];

  const handleReadMore = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div
      id="team"
      className="font-outfit  font-light mx-auto px-4 md:w-[80%] mt-[150px] pb-[60px] md:pb-[150px] 2xl:w-[70%]"
    >
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[60px] relative  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
          Meet the Team
        </h1>
      </div>

      <Zoom>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5 w-full ">
          {members.map((member) => (
            <div
              key={member.id}
              className=" relative rounded-lg shadow-lg w-full h-[350px] bg-cover bg-center group hover:scale-105 transition duration-300 hover:border-[1px] hover:border-black "
            >
              <img
                src={member.image}
                alt="Community"
                className="w-full h-[350px] object-cover rounded-lg shadow-lg "
              />
              <div className="flex-col absolute inset-0  rounded-lg bg-gradient-to-t from-black to-[#00000000] flex items-end justify-start">
                <p className="absolute bottom-3 left-5 text-white text-[14px] font-medium mb-5 bg-[#ffffff4a] bg-opacity-20 border border-[#ffffff] px-5 py-1 rounded-full transform transition-transform duration-400 group-hover:-translate-y-10">
                  {member.name}
                </p>
                <p className="text-white bottom-2 left-5 absolute">
                  {member.description}
                </p>
              </div>
              <div className="flex flex-row gap-3 text-[25px] absolute bottom-0 mb-8 mx-5 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link target="_blank" to={member.socialMedial.instagram}>
                  <FaInstagram className="hover:text-gray-400 transition" />
                </Link>
                <Link target="_blank" to={member.socialMedial.linkedIn}>
                  <FaLinkedin className="hover:text-gray-400 transition" />
                </Link>
                <Link target="_blank" to={member.socialMedial.email}>
                  <BiLogoGmail className="hover:text-gray-400 transition" />
                </Link>
              </div>
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

export default Team;
