import React from "react";

const LevelButton = ({ width, height, progress, title }) => {
  return (
    <div
      className={`${width} ${height} bg-none border-[2px] flex flex-row justify-start items-center rounded-2xl p-[0.2rem]`}
    >
      <div
        className={`${progress} h-full bg-bg1 rounded-xl flex flex-row justify-center items-center`}
      >
        <span className="font-normal text-sm">{title}</span>
      </div>
    </div>
  );
};

export default LevelButton;
