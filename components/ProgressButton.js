import React from "react";

const ProgressButton = ({ width, height, title, progress, title2 }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-2/3 h-8 bg-bg2 border-t-[2px] border-l-[2px] border-r-[2px] rounded-[0.5rem_0.5rem_0_0] flex flex-col justify-center items-center">
        <span className="font-medium text-base">{title}</span>
      </div>
      <div
        className={`${width} ${height} bg-none border-t-[1px] border-l-[1px] border-b-[3px] border-r-[3px] flex flex-row justify-start items-center rounded-2xl p-[0.2rem]`}
      >
        <div className={`${progress} h-full bg-bg1 rounded-xl flex flex-row justify-center items-center`}>
            <span className="font-normal text-sm">{title2}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressButton;
