import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[6vh] bg-bgLight border-b-[4px] rounded-[0_0_20px_20px] flex flex-row justify-evenly items-center">
      <ConnectButton></ConnectButton>
    </div>
  );
};

export default Navbar;
