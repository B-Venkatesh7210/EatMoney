import React from "react";
import Image from "next/legacy/image";
import SeeSawBar from "../assets/images/SeeSawBar.png";
import SeeSawBottom from "../assets/images/SeeSawBottom.png";
import EatMoneyLogo from "../assets/logos/Eat Money Logo.png";

const SeeSaw = () => {
  return (
    <>
      {/* <div className="w-64 h-10 sm:w-full sm:h-[100%] flex flex-col justify-start items-center my-[20vh] z-10 relative">
        <div className="h-4"></div>
        <Image
          alt="See-saw bar"
          src={SeeSawBar}
          layout="fill"
          objectFit="cover"
          className="ml-10 seeSawAnim"
        ></Image>
        <div className="h-64 w-96 relative">
          <Image
            alt="Eat Money Logo"
            src={EatMoneyLogo}
            layout="fill"
            objectFit="cover"
            className="absolute z-40 mt-[4rem] ml-1 logoAnim"
          ></Image>
        </div>

        <Image
          alt="See-saw bottom"
          src={SeeSawBottom}
          width="60"
          height="60"
          className="z-30 absolute mt-[6.5rem]"
        ></Image>
      </div> */}
      <div className="w-full relative h-auto flex flex-col justify-center items-center my-[10vh] sm:my-[40vh]">
        <div className="absolute w-[22rem] sm:w-[90%] ml-6 sm:ml-20 z-30">
          <Image alt="See-Saw Bar" src={SeeSawBar} className="seeSawAnim"></Image>
        </div>
        <div className="absolute w-[6rem] sm:w-[25rem] mt-20 sm:mt-[25rem] z-40">
          <Image alt="Eat Money Logo" src={EatMoneyLogo} className="logoAnim"></Image>
        </div>
        <div className="absolute w-[4rem] sm:w-[20rem] mt-36 sm:mt-[40rem] z-20">
          <Image alt="See-Saw Bottom" src={SeeSawBottom}></Image>
        </div>
      </div>
    </>
  );
};

export default SeeSaw;
