import React from "react";
import whole from "../assets/whole.svg";

const ElabChallenges = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/y1BewsN8Pbk",
      title: "Challenge One",
      heading: "Hunt For Treasure",
      description:
        "Based on this information about your financial circumstances, you are eligible to apply for a scholarship...",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/y1BewsN8Pbk",
      title: "Challenge Two",
      heading: "Treasure Hunt Advanced",
      description:
        "Based on this information about your financial circumstances, you are eligible to apply for a scholarship...",
    },
    // Add more videos as needed
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
          className="justify-center text-center py-10 w-[70%]"
          style={{
            animation: "fadeIn 1s ease-in-out 0.5s forwards",
            opacity: 0,
          }}
        >
          In our innovation task force, we tackled six challenges...
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
                  {/* Video Section */}
                  <div
                    className="shadow-lg rounded-[20px] w-full"
                    style={{
                      animation: `fadeIn 0.8s ease-in-out ${
                        index * 0.5 + 0.7
                      }s forwards`,
                      opacity: 0,
                    }}
                  >
                    <iframe
                      className="w-full h-full rounded-[20px]"
                      src={video.src}
                      title={video.heading}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
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

                  {/* Video Section */}
                  <div
                    className="shadow-lg rounded-[20px] w-full"
                    style={{
                      animation: `fadeIn 0.8s ease-in-out ${
                        index * 0.5 + 0.9
                      }s forwards`,
                      opacity: 0,
                    }}
                  >
                    <iframe
                      className="w-full h-full rounded-[20px]"
                      src={video.src}
                      title={video.heading}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElabChallenges;
