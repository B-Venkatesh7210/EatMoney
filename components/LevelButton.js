import React, {useState, useEffect} from "react";

const LevelButton = ({ width, height, max, progress }) => {

  const [progressW, setProgressW] = useState()

  useEffect(() => {
    const convertPerc = () => {
      let _progress = (progress/max) * 100;
      setProgressW(_progress);
    }
    convertPerc();
  }, [progress])

  return (
    <div
      className={`${width} ${height} bg-bg1 border-[2px] flex flex-row justify-start items-center rounded-xl p-[0.2rem]`}
    >
      <div
        className={`h-full bg-bg2 rounded-lg flex flex-row justify-center items-center`} style={{width: `${progressW}%`}}
      ></div>
    </div>
  );
};

export default LevelButton;
