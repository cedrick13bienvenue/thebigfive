import React from "react";
import whole from "../assets/whole.svg";
import Footer2 from "./Footer2";

const ElabChallenges = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/jKVjQt38pBY",
      title: "Challenge 1",
      heading: "Elevator Pitch",
      description:
        "In our elevator pitch, we introduced ourselves—covering our names, interests, and some fun facts. We expressed our passions, the reasons we’re committed to these challenges, and our aspirations for impactful solutions. Each of us offers a unique set of strengths, which we believe will enrich our approach as a team.",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/qBD4zgUuAoc",
      title: "Challenge 2",
      heading: "Discover Africa",
      description:
        "For this challenge, we delved into the vibrant world of Ethiopia’s Hamer tribe through our storytelling platform. We uncovered unique cultural practices, dispelled common myths, celebrated their distinct traditions, and explored the difficulties they encounter as they balance their rich heritage with modern-day pressures.",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/u4kKKGIy9DI",
      title: "Challenge 3",
      heading: "Help Lab",
      description:
        "E-lab is committed to fostering community impact. In Challenge 3, we embarked on Help-Lab, working with Grade 4 students at Imanzi City of Mainz School to impart crucial ICT knowledge and conduct interactive extracurricular sessions",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/8HdP30yOddg",
      title: "Challenge 4",
      heading: "Hunt for Treasure",
      description:
        "Our mission to drive meaningful impact found new depth in our conversation with Mr. Muramira, whose work in sustainable education and inclusivity shed light on the broader impact of empowering communities. His insights on addressing gender equality and fostering environmental resilience encouraged us to integrate these values into our approach, ensuring we create pathways for everyone, especially women and youth, to benefit. This discussion sharpened our focus on building sustainable, inclusive solutions.",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/jdhiI1vmK0w",
      title: "Challenge 5",
      heading: "Mission Voyage",
      description:
        "For this initiative, we created a proposal for a $10,000 grant to launch Iga, a platform aimed at empowering youth in Rwanda with essential job skills. Our video walks through our team’s motivation, the issue at hand, our research insights, and our vision for impact. Through this grant, we hope to build a solution that closes the skills gap and opens up new opportunities for Rwandan youth.",
    },
    {
      id: 6,
      src: "/challenge6.jpg",
      title: "Challenge 6",
      heading: "Digital Print",
      description:
        "Our website captures the essence of our E-Lab experience, featuring our mission, problem statement, and innovative solutions. Alongside team member profiles and a breakdown of all six challenges, it also preserves the memories we've created together, showcasing the collaborative spirit and creativity that defined our journey.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${whole})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="fade-in" // Add fade-in to main container
    >
      <div className="w-full flex flex-col justify-center items-center md:w-[80%] 2xl:w-[70%] xl:px-0 mx-auto p-4 mt-[150px] font-outfit text-light fade-in">
        {/* Main title with animation */}
        <h1
          className="font-bold text-[40px] md:text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black"
          style={{
            animation: "fadeIn 1s ease-in-out 0.2s forwards",
            opacity: 0,
          }}
        >
          Voyage through the tempest
        </h1>

        {/* Main description with animation */}
        <p
          className="justify-center text-center py-10 w-[70%] text-[30px] font-light"
          style={{
            animation: "fadeIn 1s ease-in-out 0.5s forwards",
            opacity: 0,
          }}
        >
          In our innovation task force, we tackled six challenges, immersing
          ourselves in real-world contexts, complex issues, and forward-thinking
          approaches
        </p>

        <div className="mt-5 rounded-[10px] py-[30px] md:py-[50px] px-[20px] md:px-[40px] grid grid-cols-1 gap-[30px] lg:gap-[8rem] fade-in">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="grid grid-cols-2 justify-items-center gap-[20px]"
              style={{
                animation: `fadeIn 0.8s ease-in-out ${
                  index * 0.5 + 0.7
                }s forwards`,
                opacity: 0,
              }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Video/Image Section */}
                  <div
                    className="shadow-lg rounded-[20px] w-full"
                    style={{
                      animation: `fadeIn 0.8s ease-in-out ${
                        index * 0.5 + 0.7
                      }s forwards`,
                      opacity: 0,
                    }}
                  >
                    {video.src.includes(".jpg") ? (
                      <img
                        className="w-full h-full rounded-[20px] object-cover"
                        src={video.src}
                        alt={video.heading}
                      />
                    ) : (
                      <iframe
                        className="w-full h-full rounded-[20px]"
                        src={video.src}
                        title={video.heading}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>

                  {/* Description Section */}
                  <div
                    className="flex flex-col justify-start text-left shadow-xl rounded-[20px] p-10"
                    style={{
                      animation: `fadeIn 0.8s ease-in-out ${
                        index * 0.5 + 0.9
                      }s forwards`,
                      opacity: 0,
                    }}
                  >
                    <h2 className="font-semibold text-[18px] text-gray-600">
                      {video.title}
                    </h2>
                    <h1 className="font-bold text-[30px] ">{video.heading}</h1>
                    <p className="text-[14px] text-gray-500 mt-2">
                      {video.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Description Section */}
                  <div
                    className="flex flex-col justify-start text-left shadow-xl rounded-[20px] p-10"
                    style={{
                      animation: `fadeIn 0.8s ease-in-out ${
                        index * 0.5 + 0.7
                      }s forwards`,
                      opacity: 0,
                    }}
                  >
                    <h2 className="font-semibold text-[18px] text-gray-600">
                      {video.title}
                    </h2>
                    <h1 className="font-bold text-[30px] ">{video.heading}</h1>
                    <p className="text-[14px] text-gray-500 mt-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Video/Image Section */}
                  <div
                    className="shadow-lg rounded-[20px] w-full"
                    style={{
                      animation: `fadeIn 0.8s ease-in-out ${
                        index * 0.5 + 0.9
                      }s forwards`,
                      opacity: 0,
                    }}
                  >
                    {video.src.includes(".jpg") ? (
                      <img
                        className="w-full h-full rounded-[20px] object-cover"
                        src={video.src}
                        alt={video.heading}
                      />
                    ) : (
                      <iframe
                        className="w-full h-full rounded-[20px]"
                        src={video.src}
                        title={video.heading}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer2></Footer2>
    </div>
  );
};

export default ElabChallenges;
