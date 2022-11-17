import React from "react";
import Image from "next/image";
import SeeSawBar from "../assets/images/SeeSawBar.png";
import SeeSawBottom from "../assets/images/SeeSawBottom.png";
import EatMoneyLogo from "../assets/logos/Eat Money Logo.png";

const SeeSaw = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center my-[20vh] z-10 relative">
        <div className="h-4"></div>
        <Image
          alt="See-saw bar"
          src={SeeSawBar}
          width="600"
          height="600"
          className="z-20 ml-6 seeSawAnim"
        ></Image>
        <Image
          alt="Eat Money Logo"
          src={EatMoneyLogo}
          width="80"
          height="80"
          className="absolute z-40 mt-[4rem] ml-1 logoAnim"
        ></Image>
        <Image
          alt="See-saw bottom"
          src={SeeSawBottom}
          width="60"
          height="60"
          className="z-30 absolute mt-[6.5rem]"
        ></Image>
      </div>
    </>
  );
};

export default SeeSaw;
