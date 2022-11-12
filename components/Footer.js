import React from "react";
import LevelUp from "../assets/logos/Level Up.png";
import Image from "next/dist/client/image";
import ReactModal from "react-modal";

const Footer = ({ setLevelUpModal }) => {
  return (
    <div className="absolute bottom-0 w-full h-[8vh] bg-footerBg/40 border-t-[4px] rounded-[20px_20px_0_0] flex flex-row justify-evenly items-center">
      <div
        className="flex flex-col justify-center items-center"
        onClick={() => setLevelUpModal(true)}
      >
        <Image alt="Level Up" src={LevelUp} width="30" height="30"></Image>
        <span className="font-medium text-sm italic">Level Up</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image alt="Level Up" src={LevelUp} width="30" height="30"></Image>
        <span className="font-medium text-sm italic">Level Up</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image alt="Level Up" src={LevelUp} width="30" height="30"></Image>
        <span className="font-medium text-sm italic">Level Up</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image alt="Level Up" src={LevelUp} width="30" height="30"></Image>
        <span className="font-medium text-sm italic">Level Up</span>
      </div>
    </div>
  );
};

export default Footer;
