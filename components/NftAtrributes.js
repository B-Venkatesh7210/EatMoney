import React from "react";
import LevelButton from "./LevelButton";

const NftAtrributes = ({ apiPointsData }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start mt-6">
      <span className="font-semibold text-2xl text-text1">Attributes</span>
      <div className="w-full flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row justify-start items-center">
          <span className="font-medium text-base italic text-text1">
            Effficiency
          </span>
        </div>
        <div className="w-3/5 flex flex-row justify-start items-center">
          <span className="font-medium text-2xl w-16 flex flex-row justify-center text-text1">
            {apiPointsData.efficiency}
          </span>
          <LevelButton
            width="w-full"
            height="h-[2rem]"
            max={48}
            progress={apiPointsData.efficiency}
          ></LevelButton>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row justify-start items-center">
          <span className="font-medium text-base italic text-text1">
            Fortune
          </span>
        </div>
        <div className="w-3/5 flex flex-row justify-start items-center">
          <span className="font-medium text-2xl w-16 flex flex-row justify-center text-text1">
            {apiPointsData.fortune}
          </span>
          <LevelButton
            width="w-full"
            height="h-[2rem]"
            max={48}
            progress={apiPointsData.fortune}
          ></LevelButton>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row justify-start items-center">
          <span className="font-medium text-base italic text-text1">
            Durability
          </span>
        </div>
        <div className="w-3/5 flex flex-row justify-start items-center">
          <span className="font-medium text-2xl w-16 flex flex-row justify-center text-text1">
            {apiPointsData.durability}
          </span>
          <LevelButton
            width="w-full"
            height="h-[2rem]"
            max={48}
            progress={apiPointsData.durability}
          ></LevelButton>
        </div>
      </div>
    </div>
  );
};

export default NftAtrributes;
