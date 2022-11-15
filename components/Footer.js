import React from "react";
import LevelUp from "../assets/logos/Level Up.png";
import Image from "next/dist/client/image";
import MarketPlace from "../assets/logos/MarketPlace.png";
import SellNft from "../assets/logos/SellNft.png";
import History from "../assets/logos/History.png";
import ReactModal from "react-modal";

const Footer = ({ setLevelUpModal, setSellNftModal }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[8vh] bg-footerBg border-t-[4px] border-bg2 rounded-[20px_20px_0_0] flex flex-row justify-between items-center px-4 mt-[3rem]">
      <div className="w-[45%] flex flex-row justify-around items-center">
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => setLevelUpModal(true)}
        >
          <Image alt="Level Up" src={LevelUp} width="30" height="30"></Image>
          <span className="font-medium text-sm italic">Level Up</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            alt="Level Up"
            src={MarketPlace}
            width="30"
            height="30"
          ></Image>
          <span className="font-medium text-sm italic">Market Place</span>
        </div>
      </div>
      <div className="w-[45%] flex flex-row justify-around items-center">
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => setSellNftModal(true)}
        >
          <Image alt="Level Up" src={SellNft} width="30" height="30"></Image>
          <span className="font-medium text-sm italic">Level Up</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image alt="Level Up" src={History} width="30" height="30"></Image>
          <span className="font-medium text-sm italic">Level Up</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
