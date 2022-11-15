import React from "react";
import LevelButton from "./LevelButton";

const NftAtrributes = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start mt-6">
      <span className="font-semibold text-2xl text-text1">Attributes</span>
      <div className="w-full flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row justify-start items-center">
          <span className="font-medium text-base italic text-text1">Effficiency</span>
        </div>
        <div className="w-3/5 flex flex-row justify-start items-center">
        <span className="font-medium text-2xl w-16 flex flex-row justify-center text-text1">30</span>
          <LevelButton
            width="w-full"
            height="h-[2rem]"
            max={100}
            progress={50}
          ></LevelButton>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row justify-start items-center">
          <span className="font-medium text-base italic text-text1">Fortune</span>
        </div>
        <div className="w-3/5 flex flex-row justify-start items-center">
        <span className="font-medium text-2xl w-16 flex flex-row justify-center text-text1">20</span>
          <LevelButton
            width="w-full"
            height="h-[2rem]"
            max={100}
            progress={60}
          ></LevelButton>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row justify-start items-center">
          <span className="font-medium text-base italic text-text1">Durability</span>
        </div>
        <div className="w-3/5 flex flex-row justify-start items-center">
          <span className="font-medium text-2xl w-16 flex flex-row justify-center text-text1">10</span>
          <LevelButton
            width="w-full"
            height="h-[2rem]"
            max={100}
            progress={70}
          ></LevelButton>
        </div>
      </div>
    </div>
  );
};

export default NftAtrributes;
