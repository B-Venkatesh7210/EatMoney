import React from "react";
import LevelUp from "../assets/logos/Level Up.png";
import Image from "next/dist/client/image";
import MarketPlace from "../assets/logos/MarketPlace.png";
import SellNft from "../assets/logos/SellNft.png";
import History from "../assets/logos/History.png";
import EatCoin from "../assets/logos/EAT COIN.png";
import ReactModal from "react-modal";

const Footer = ({
  setLevelUpModal,
  setNavStatus,
  setSellNftModal,
  setIsScanning,
}) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-[8vh] bg-footerBg border-t-[4px] border-text2 rounded-[20px_20px_0_0] flex flex-row justify-between items-center px-4 mt-[3rem] z-0">
        <div className="w-[45%] flex flex-row justify-around items-center">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setLevelUpModal(true)}
          >
            <Image alt="Level Up" src={LevelUp} width="30" height="30"></Image>
            <span className="font-medium text-sm italic">Level Up</span>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() =>
              setNavStatus({ marketPlace: true, home: false, history: false })
            }
          >
            <Image
              alt="Market Place"
              src={MarketPlace}
              width="30"
              height="30"
            ></Image>
            <span className="font-medium text-sm italic">Market Place</span>
          </div>
        </div>
        <Image
          alt="Eat"
          src={EatCoin}
          width="60"
          height="60"
          className="absolute bottom-8 z-10 left-[43%]"
          onClick={() => setIsScanning(true)}
        ></Image>
        <div className="w-[45%] flex flex-row justify-around items-center">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setSellNftModal(true)}
          >
            <Image alt="Sell NFT" src={SellNft} width="30" height="30"></Image>
            <span className="font-medium text-sm italic">Sell NFT</span>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() =>
              setNavStatus({ marketPlace: false, home: false, history: true })
            }
          >
            <Image alt="History" src={History} width="30" height="30"></Image>
            <span className="font-medium text-sm italic">History</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
