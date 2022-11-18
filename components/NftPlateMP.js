import React from "react";
import Image from "next/image";
import Nft from "../assets/images/Sample NFT.svg";
import Matic from "../assets/logos/Polygon Matic.png";
import LevelButton from "./LevelButton";

const NftPlateMP = ({ nftPlate }) => {
  return (
    <div className="w-full h-auto bg-bg2/90 rounded-[1rem] border-[3px] shadow-[5px_5px_0px_rgb(121,205,205,0.7)] p-2 flex flex-col justify-start items-center">
      <Image
        alt="Nft Plate"
        src={nftPlate.img}
        width="130"
        height="130"
      ></Image>
      <div className="w-full flex flex-row justify-between items-center mt-2">
        <span className="font-bold text-base">{nftPlate.category}</span>
        <span className="font-bold text-base">Level {nftPlate.level}</span>
      </div>
      <span className="font-bold text-lg mt-1 flex flex-row justify-center items-center">
        {nftPlate.price}{" "}
        <Image
          alt="Matic Logo"
          src={Matic}
          width="30"
          height="30"
          className="ml-2"
        ></Image>
      </span>
      <div className="w-[90%] flex flex-col justify-center items-center mt-3">
        <div className="w-full flex flex-row justify-between items-center">
          <span className="font-medium text-sm">Effic.</span>
          <span className="font-bold text-sm ml-2">{nftPlate.efficiency}</span>
          <LevelButton
            width="w-[50%]"
            height="h-[1rem]"
            max={48}
            progress={nftPlate.efficiency}
          ></LevelButton>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <span className="font-medium text-sm">Fort.</span>
          <span className="font-bold text-sm ml-2">{nftPlate.fortune}</span>
          <LevelButton
            width="w-[50%]"
            height="h-[1rem]"
            max={48}
            progress={nftPlate.fortune}
          ></LevelButton>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <span className="font-medium text-sm">Dura.</span>
          <span className="font-bold text-sm ml-1">{nftPlate.durability}</span>
          <LevelButton
            width="w-[50%]"
            height="h-[1rem]"
            max={48}
            progress={nftPlate.durability}
          ></LevelButton>
        </div>
      </div>
    </div>
  );
};

export default NftPlateMP;
