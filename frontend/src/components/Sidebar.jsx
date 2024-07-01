import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

function Sidebar() {
  const [extended, setextended] = useState(false);

  return (
    <>
      <div className="sidebar w-min h-[100vh] bg-black text-white p-4">
        {extended ? (
          <h1 className="text-2xl font-bold mb-4">SelfGpt2.O</h1>
        ) : null}

        <div
          onClick={() => {
            setextended((prev) => !prev);
          }}
          className="hambarger text-2xl cursor-pointer w-max"
        >
          <RiMenuFill />
        </div>

        <div className="newchat w-max px-4 h-12 bg-[#363636] rounded-xl mt-5 flex cursor-pointer items-center gap-5 justify-center">
          <div className="text-2xl">
            <FaPlus />
          </div>
          {extended ? <p className="text-lg">New Chat</p> : null}
        </div>

        <div className="recent-ask w-max h-[55%]  rounded mt-5 py-4 ">
          {extended ? (
            <div>
              <h2 className="font-bold text-lg">Recently Asked</h2>
              <div className="question mt-2 max-w-40 max-h-[45vh] overflow-y-scroll ">
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react
                  dvfbfbfbfdcffffffffffffffffffffffffffffffffffffffffffffffffffff
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ddddddddddddddddddddd?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
                <p className="flex items-center gap-2 p-1 text-sm">
                  <IoChatboxOutline /> What is react ?
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="bottom-part w-full h-[18%] flex flex-col justify-center mt-5">
          <div className="help flex items-center gap-2 py-2 cursor-pointer">
            <MdOutlineLiveHelp />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="activity flex items-center gap-2 py-2 cursor-pointer">
            <BsClockHistory />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="settings flex items-center gap-2 py-2 cursor-pointer">
            <IoSettingsSharp />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>

        <footer>
          {extended ? (
            <p className="text-sm text-center">Made By- <a href="https://www.linkedin.com/in/abhishek-roy-4a5244239/" target="_blank">Abhishek Roy</a> </p>
          ) : null}
        </footer>
      </div>
    </>
  );
}

export default Sidebar;
