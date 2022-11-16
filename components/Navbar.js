import React from "react";
import Image from "next/image";
import EatCoin from "../assets/logos/EAT COIN.png"
import EatMoneyLogo from "../assets/logos/Eat Money Logo.png"
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = ({setNavStatus}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[6vh] bg-bgLight border-b-[4px] rounded-[0_0_20px_20px] flex flex-row justify-between items-center px-4 z-0">
    {/* <span onClick={()=>{setNavStatus({home:true, marketPlace: false, history: false})}}>Home</span>
      <ConnectButton></ConnectButton> */}
      <div className="flex flex-row justify-center items-center">
        <span className="font-bold text-lg">{10}</span>
        <Image alt="Eat Coin" src={EatCoin} width="30" height="30" className="ml-3"></Image>
      </div>
      <div onClick={()=>{setNavStatus({home: true, marketPlace: false, history: false})}}>
        <Image alt="Eat Money Logo" src={EatMoneyLogo} height="80" width="80" className="absolute z-10 top-[-5px] right-[42%]"></Image>
      </div>
      <ConnectButton></ConnectButton>
    </div>
  );
};

export default Navbar;
