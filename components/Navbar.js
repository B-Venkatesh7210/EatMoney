import React, { useState, useEffect } from "react";
import Image from "next/image";
import EatCoin from "../assets/logos/EAT COIN.png";
import EatMoneyLogo from "../assets/logos/Eat Money Logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSigner, useContract, useProvider } from "wagmi";
import { BigNumber, ethers } from "ethers";
import { config } from "../config/config";

const Navbar = ({ setNavStatus }) => {
  const { isConnected, address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider();
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    signer
  );
  const [balance, setBalance] = useState(BigNumber.from(0));

  useEffect(() => {
    if (isConnected && signer) {
      contract.balanceOf(address, 0).then((balance) => {
        console.log(balance);
        setBalance(balance);
      });
    } else {
      setBalance(BigNumber.from(0));
    }
  }, [signer]);

  return (
    <div className="fixed top-0 left-0 w-full h-[6vh] bg-bgLight border-b-[4px] rounded-[0_0_20px_20px] flex flex-row justify-between items-center px-4 z-0">
      {/* <span onClick={()=>{setNavStatus({home:true, marketPlace: false, history: false})}}>Home</span>
      <ConnectButton></ConnectButton> */}
      <div className="flex flex-row justify-center items-center">
        <Image
          alt="Eat Coin"
          src={EatCoin}
          width="25"
          height="25"
          className="mr-2"
        ></Image>
        <span className="font-bold text-lg">
          {balance
            .div(10 ** 8)
            .toNumber()
            .toFixed(2)}
        </span>
      </div>
      <div
        onClick={() => {
          setNavStatus({ home: true, marketPlace: false, history: false });
        }}
      >
        <Image
          alt="Eat Money Logo"
          src={EatMoneyLogo}
          height="80"
          width="80"
          className="absolute z-10 top-[-5px] right-[42%]"
        ></Image>
      </div>
      <ConnectButton></ConnectButton>
    </div>
  );
};

export default Navbar;
