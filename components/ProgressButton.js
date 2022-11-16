import React, {useState, useEffect} from "react";

const ProgressButton = ({ width, height, title, max, progress, title2 }) => {

  const [progressW, setProgressW] = useState()

  useEffect(() => {
    const convertPerc = () => {
      let _progress = (progress/max) * 100;
      setProgressW(_progress);
    }
    convertPerc();
  }, [progress])
  

  return (
    <div className={`${width} ${height} flex flex-col justify-start items-center`}>
      <div className="w-[8rem] h-20 bg-bg2 border-t-[5px] border-r-[5px] rounded-[0.5rem_0.5rem_0_0] flex flex-row justify-center items-center shadow-[5px_-3px_0px_#0A4957]">
        <span className="font-bold text-lg mr-2">{title}</span>
        <span className="font-medium text-base ml-2">{title2}%</span>
      </div>
      <div
        className={`w-full h-5/6 bg-bg1 border-t-[1px] flex flex-row justify-start items-center border-[2px] rounded-xl p-[0.3rem]`}
      >
        <div className={`h-full bg-bg2 rounded-lg flex flex-row justify-center items-center`} style={{width: `${progressW}%`}}>
        </div>
      </div>
    </div>
  );
};

export default ProgressButton;
