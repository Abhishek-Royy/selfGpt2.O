import React, { useContext } from "react";
import { LuCompass } from "react-icons/lu";
import { TiLightbulb } from "react-icons/ti";
import { LuScrollText } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { Context } from "../context/Context";

function MainContent() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setinput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main flex-1 relative py-5 sm:p-5">
        <div className="header flex items-center justify-between ">
          <p className="text-2xl font-extrabold">SelfGpt2.O</p>
          <img
            className="rounded-full"
            src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
            alt="avatar"
            width="50px"
          />
        </div>

        <div className="main-content sm:px-24">
          {!showResult ? (
            <>
              <div className="heading sm:py-20 sm:mt-0 mt-40">
                <h1 className="hello text-6xl font-bold ">Hello Guys</h1>
                <h1 className="help-1 sm:text-6xl text-3xl font-bold">
                  How Can I Help You😊 ?
                </h1>
              </div>
              <div className="cards flex flex-wrap justify-between mt-5">
                <div className="card hover:bg-blue-50 cursor-pointer hidden sm:block sm:w-[18vw] h-auto p-5 rounded-lg bg-blue-100">
                  <p className="font-semibold">
                  I need a tagline for my online store selling handmade jewelry, based around nature themes. I want people to feel beautiful, classy, down-to-earth, special.
                  </p>
                  <div className="text-4xl">
                    <LuCompass />
                  </div>
                </div>
                <div className="card hover:bg-blue-50 cursor-pointer hidden sm:block sm:w-[18vw] h-auto p-5 rounded-lg bg-blue-100 ">
                  <p className="font-semibold">
                  Generate an image and a bedtime story about a mini golden doodle, clad in a scarf, on an epic adventure to climb a snowy mountain.
                  </p>
                  <div className="text-4xl">
                    <TiLightbulb />
                  </div>
                </div>
                <div className="card hover:bg-blue-50 cursor-pointer hidden sm:block sm:w-[18vw] h-auto p-5 rounded-lg bg-blue-100 ">
                  <p className="font-semibold">
                  Recommend 3-5 different types of water sports that might be a good fit for me. Include a brief overview of each sport, as well as the pros and cons of each one.
                  </p>
                  <div className="text-4xl">
                    <LuScrollText />
                  </div>
                </div>
                <div className="card hover:bg-blue-50 cursor-pointer hidden sm:block sm:w-[18vw] h-auto p-5 rounded-lg bg-blue-100 ">
                  <p className="font-semibold">
                  Briefly summarize this concept: urban planning. Include a brief description of the term and list key aspects of the concept. 
                  </p>
                  <div className="text-4xl">
                    <FaCode />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="result max-h-[70vh] overflow-y-scroll">
              <div className="result-title sm:px-0 px-1 flex items-center gap-5">
                <img
                  className="rounded-full"
                  src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
                  alt="avatar"
                  width="40px"
                />
                <p className="text-lg font-bold">{recentPrompt}</p>
              </div>
              <div className="result-data sm:px-0 px-2 sm:mt-14 mt-8 flex items-start sm:gap-5 gap-1">
                <img
                  src="https://reactdigitally.com/img/chatbots-for-website.gif"
                  alt="gpt-icon"
                  width="50px"
                />
                {loading ? (
                  <div>
                    <section className="loader">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </section>
                  </div>
                ) : (
                  <p
                    className="font-semibold"
                    dangerouslySetInnerHTML={{ __html: resultData }}
                  ></p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="bottomSection sm:px-24 mt-20 sm:mt-5 ">
          <div className="promptSection rounded-full bg-slate-200 w-full sm:px-10  flex items-center justify-between p-5">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              className=" w-1/2  bg-transparent outline-none"
              type="text"
              placeholder="Enter prompt here"
            />
            <div className="flex gap-2 text-2xl  ">
              <div className="cursor-pointer">
                <MdOutlineCloudUpload />
              </div>

              <div className="cursor-pointer">
                <IoMdMic />
              </div>

              {input ? (
                <div onClick={() => onSent()} className="cursor-pointer">
                  <IoSend />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="bottom-footer mt-3 text-sm font-bold">
          <p className="text-center sm:block hidden">
            Thanks for use my gpt-AI. I will try to doing my best
          </p>
          <p className="text-center">
            Copyright © ~ Allright reserved - 2024 •
            <a
              href="https://www.linkedin.com/in/abhishek-roy-4a5244239/"
              target="_blank"
            >
              {" "}
              Abhishek Roy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default MainContent;
