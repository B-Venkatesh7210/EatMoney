import React from "react";
import SeeSaw from "../components/SeeSaw";
import { useRouter } from "next/router";
import Image from "next/image";
import Polygon from "../assets/images/poweredByPolygon.png";
import Filecoin from "../assets/logos/filecoin-fil-logo.png";
import Chainlink from "../assets/logos/chainlink-link-logo.png";
import Quiknode from "../assets/logos/quicknode-fec6578b-8361-4857-a2a6-22b8213c84d0.png";
import Fork from "../assets/images/Fork.png";
import EatMoneyCenter from "../assets/images/EatMoneyCenter.png";
import Knife from "../assets/images/Knife.png";
import EatMoneyText from "../assets/images/EatMoneyText.png";
import CurvedButton from "../components/CurvedButton";
import Bronze4 from "../assets/images/b4.png";
import Silver4 from "../assets/images/s4.png";
import Gold4 from "../assets/images/g4.png";
import Emerald4 from "../assets/images/e4.png";
import Emerald3 from "../assets/images/e3.png";
import Emerald2 from "../assets/images/e2.png";
import Emerald1 from "../assets/images/e1.png";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="h-full bg-mainBg w-full flex flex-col justify-start items-center px-5 pb-16">
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-28 sm:w-52">
        <Image alt="Powered by Polygon" src={Polygon}></Image>
      </div>
      <div className="absolute flex flex-row justify-start items-center top-[17px] sm:top-8 left-[38%] sm:left-[20%]">
        <span className="font-bold text-base sm:text-3xl">Built With</span>
        <Image
          alt="Built with Filecoin"
          src={Filecoin}
          className="w-4 sm:w-10 ml-2 sm:ml-4"
        ></Image>
        <span className="hidden sm:flex font-bold text-base sm:text-3xl ml-2 sm:ml-4">
          Filecoin
        </span>
        <Image
          alt="Built with Quiknode"
          src={Quiknode}
          className="w-10 sm:w-28 ml-2 sm:ml-4"
        ></Image>
        <span className="font-bold text-base ml-2 sm:text-3xl sm:ml-4">&</span>

        <Image
          alt="Built with Chainlink"
          src={Chainlink}
          className="w-4 sm:w-10 ml-2 sm:ml-4"
        ></Image>
        <span className="hidden sm:flex font-bold text-base sm:text-3xl ml-2 sm:ml-4">
          Chainlink
        </span>
      </div>
      {/* <span className="absolute top-[17px] sm:top-10 left-[40%] sm:left-[15%] font-bold text-base sm:text-3xl">Built With</span>
      <div className="absolute top-[18px] left-[62%] sm:left-[24%] sm:top-10 w-6 sm:w-10">
        <Image alt="Built with Filecoin" src={Filecoin}></Image>
      </div>
      <span className="absolute top-[17px] left-[70%] sm:left-[27%] sm:top-10 font-bold text-3xl">&</span>
      <div className="absolute top-[16px] left-[75%] sm:left-[29%] sm:top-[38px] w-6 sm:w-10">
        <Image alt="Built with Chainlink" src={Chainlink}></Image>
      </div> */}
      <div className="w-[90%] flex flex-col sm:flex-row justify-between items-center mt-[10vh] sm:mt-[20vh]">
        <div className="flex flex-row justify-center items-center">
          <div className="relative w-10 sm:w-[4.5rem]">
            <Image alt="Fork" src={Fork}></Image>
          </div>
          <div className="relative w-64 sm:w-[28rem]">
            <Image
              alt="Eat Money Center"
              src={EatMoneyCenter}
              className="eatMoneyCenter"
            ></Image>
          </div>
          <div className="relative w-[2.4rem] sm:w-[4.3rem]">
            <Image alt="Knife" src={Knife}></Image>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center mt-8 sm:mb-16">
          <div className="relative w-64 sm:w-[30rem]">
            <Image alt="Eat Money Text" src={EatMoneyText}></Image>
          </div>
          <div className="flex flex-row justify-center items-center mt-4 sm:mt-8">
            <span className="text-text2 font-extrabold italic text-[1.3rem] sm:text-[2.5rem]">
              EAT to EARN
            </span>
            <span className="text-text2 font-extrabold italic text-[1rem] sm:text-[1.5rem] mx-4">
              to
            </span>
            <span className="text-text2 font-extrabold italic text-[1.3rem] sm:text-[2.5rem]">
              EAT MORE!!!
            </span>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[40%] flex flex-row justify-around items-center mt-8">
        <CurvedButton
          width="w-[10rem] sm:w-[12rem]"
          height="h-[3.5rem]"
          bg="bg-bg2"
          textSize="text-xl"
          title="Enter Dapp"
          action={() => {
            router.push("/HomePage");
          }}
        ></CurvedButton>

        <CurvedButton
          width="w-[10rem] sm:w-[12rem]"
          height="h-[3.5rem]"
          bg="bg-bg2"
          textSize="text-xl"
          title="Enter Restro"
          action={() => {
            router.push("/Restaurant");
          }}
        ></CurvedButton>
      </div>

      {/* FACT and THOUGHT */}
      <div className="w-full sm:w-[50%] h-auto bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl mt-14 sm:mt-16 text-center py-4 px-2 shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] mb-4">
        <span className="w-full text-[1rem] sm:text-[2rem] font-semibold flex flex-col justify-center items-center">
          <span>
            Get off your{" "}
            <span className="text-[1.5rem] sm:text-[2.5rem] font-bold italic">
              SEATS
            </span>
            ,
          </span>
          <span>
            Come eat at our{" "}
            <span className="text-[1.5rem] sm:text-[2.5rem] font-bold italic">
              RESTAURANTS
            </span>
            ,
          </span>
          <span>
            Earn{" "}
            <span className="text-[1.5rem] sm:text-[2.5rem] font-bold italic">
              EAT Coins
            </span>
          </span>
          <span>
            upgrade your{" "}
            <span className="text-[1.5rem] sm:text-[2.5rem] font-bold italic">
              EAT Plates
            </span>
            .
          </span>
        </span>
      </div>
      {/* FACT and THOUGHT */}

      {/* ATTRIBUTES */}
      <div className="w-full flex flex-col justify-center items-center mt-10 sm:mt-16">
        <span className="text-text2 font-extrabold text-[2rem] sm:text-[4rem] tracking-[0.4rem]">
          ATTRIBUTES
        </span>
        <div className="w-full sm:w-[70%] flex flex-row justify-center items-center mt-4 px-2">
          <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic w-[30%] sm:w-[20%]">
            Shiny
          </span>
          <div className="w-[70%] h-auto bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] p-4 ml-4 sm:ml-10">
            <span className="font-bold text-[1rem] sm:text-[1.5rem]italic">
              It tells you how much clean your EAT Plate is. You can only level
              up if your Shiny is 100%.
            </span>
          </div>
        </div>
        <div className="w-full sm:w-[70%] flex flex-row justify-center items-center mt-4 px-2">
          <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic w-[30%] sm:w-[20%]">
            Efficiency
          </span>
          <div className="w-[70%] h-auto bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] p-4 ml-4 sm:ml-10">
            <span className="font-bold text-[1rem] sm:text-[1.5rem]italic">
              It tells you how much clean your EAT Plate is. You can only level
              up if your Shiny is 100%.
            </span>
          </div>
        </div>
        <div className="w-full sm:w-[70%] flex flex-row justify-center items-center mt-4 px-2">
          <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic w-[30%] sm:w-[20%]">
            Fortune
          </span>
          <div className="w-[70%] h-auto bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] p-4 ml-4 sm:ml-10">
            <span className="font-bold text-[1rem] sm:text-[1.5rem]italic">
              It tells you how much clean your EAT Plate is. You can only level
              up if your Shiny is 100%.
            </span>
          </div>
        </div>
        <div className="w-full sm:w-[70%] flex flex-row justify-center items-center mt-4 px-2">
          <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic w-[30%] sm:w-[20%]">
            Durability
          </span>
          <div className="w-[70%] h-auto bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] p-4 ml-4 sm:ml-10">
            <span className="font-bold text-[1rem] sm:text-[1.5rem]italic">
              It tells you how much clean your EAT Plate is. You can only level
              up if your Shiny is 100%.
            </span>
          </div>
        </div>
      </div>
      {/* ATTRIBUTES */}

      {/* CATEGORIES */}
      <div className="w-full flex flex-col justify-center items-center mt-10 sm:mt-16">
        <span className="text-text2 font-extrabold text-[2rem] sm:text-[4rem] tracking-[0.4rem]">
          EAT PLATES
        </span>
        <div className="bg-bg1 text-text1 border-[5px] border-text2 text-center rounded-3xl shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] p-4 my-4 w-full sm:my-8 sm:w-[60%]">
          <span className="font-semibold text-[1rem] sm:text-[1.5rem]">
            EAT Plates have 4 categories with different abilities.
          </span>
        </div>

        <div className="w-full grid grid-cols-2 sm:flex sm:flex-row sm:justify-evenly sm:items-center">
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="relative w-[10rem] sm:w-[15rem]">
              <Image alt="Bronze" src={Bronze4}></Image>
            </div>
            <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic mt-2">
              BRONZE
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="relative w-[10rem] sm:w-[15rem]">
              <Image alt="Silver" src={Silver4}></Image>
            </div>
            <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic mt-2">
              SILVER
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="relative w-[10rem] sm:w-[15rem]">
              <Image alt="Gold" src={Gold4}></Image>
            </div>
            <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic mt-2">
              GOLD
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="relative w-[10rem] sm:w-[15rem]">
              <Image alt="Emerald" src={Emerald4}></Image>
            </div>
            <span className="text-text2 font-bold text-[1.3rem] sm:text-[2.5rem] italic mt-2">
              EMERALD
            </span>
          </div>
        </div>
      </div>
      {/* CATEGORIES */}

      {/* LEVELS */}
      <div className="w-full flex flex-col justify-center items-center mt-10 sm:mt-16">
        <span className="text-text2 font-extrabold text-[2rem] sm:text-[4rem] tracking-[0.4rem]">
          LEVELS
        </span>
        <div className=" bg-bg1 text-text1 border-[5px] border-text2 text-center rounded-3xl shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] p-4 my-4 w-full sm:my-8 sm:w-[60%]">
          <span className="font-semibold text-[1rem] sm:text-[1.5rem]">
            Each EAT Plate has 4 Levels.
          </span>
        </div>

        <div className="w-full flex flex-row justify-center items-end sm:flex sm:flex-row sm:justify-evenly sm:items-end">
          <div className="flex flex-col justify-center items-center mt-6 mx-2">
            <div className="relative w-[4rem] sm:w-[12rem]">
              <Image alt="Bronze" src={Emerald1}></Image>
            </div>
            <span className="text-text2 font-bold text-[0.7rem] sm:text-[2.5rem] italic mt-2">
              LEVEL 1
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6 mx-2">
            <div className="relative w-[4.4rem] sm:w-[15rem]">
              <Image alt="Silver" src={Emerald2}></Image>
            </div>
            <span className="text-text2 font-bold text-[0.7rem] sm:text-[2.5rem] italic mt-2">
              LEVEL 2
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6 mx-2">
            <div className="relative w-[4.8rem] sm:w-[18rem]">
              <Image alt="Gold" src={Emerald3}></Image>
            </div>
            <span className="text-text2 font-bold text-[0.7rem] sm:text-[2.5rem] italic mt-2">
              LEVEL 3
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-6 mx-2">
            <div className="relative w-[5.2rem] sm:w-[21rem]">
              <Image alt="Emerald" src={Emerald4}></Image>
            </div>
            <span className="text-text2 font-bold text-[0.7rem] sm:text-[2.5rem] italic mt-2">
              LEVEL 4
            </span>
          </div>
        </div>
      </div>
      {/* LEVELS */}
      <span className="text-text2 text-center font-extrabold text-[2rem] sm:text-[4rem] tracking-[0.4rem] mt-10 sm:mt-16">
        THE BALANCE OF EATING
      </span>
      <SeeSaw />
      <span className="text-text2 text-center font-extrabold text-[2rem] sm:text-[4rem] tracking-[0.4rem] mt-20 sm:mt-[20rem]">
        STEPS TO EARN EAT COINS
      </span>
      <div className="w-full grid grid-cols-2 mt-6 gap-4 sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:gap-0 sm:w-[80%]">
        <div className="h-[30vh] sm:w-[20%] bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl py-4 px-2 shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] flex flex-col justify-start items-center">
          <span className="text-[1.5rem] font-bold">Step 1</span>
          <span className="text-[1rem] font-semibold mt-2 text-center italic">
            Buy EAT plate of your choice from our Marketplace.
          </span>
        </div>
        <div className="h-[30vh] sm:w-[20%] bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl py-4 px-2 shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] flex flex-col justify-start items-center">
          <span className="text-[1.5rem] font-bold">Step 2</span>
          <span className="text-[1rem] font-semibold mt-2 text-center italic">
            Eat at one one of our EAT Restaurants, and pay via the Dapp by
            scanning a QR.
          </span>
        </div>
        <div className="h-[30vh] sm:w-[20%] bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl py-4 px-2 shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] flex flex-col justify-start items-center">
          <span className="text-[1.5rem] font-bold">Step 3</span>
          <span className="text-[0.8rem] font-semibold mt-2 text-center italic">
            {
              "After payment you'll receive EAT Coins and a chance to spin the wheel of fortune to earn some more EAT COINS."
            }
          </span>
        </div>
        <div className="h-[30vh] sm:w-[20%] bg-bg1 text-text1 border-[5px] border-text2 rounded-3xl py-4 px-2 shadow-[6px_6px_10px_2px_rgb(0,0,0,0.5)] flex flex-col justify-start items-center">
          <span className="text-[1.5rem] font-bold">Step 4</span>
          <span className="text-[1rem] font-semibold mt-2 text-center italic">
            Use the EAT Coins to upgrade your EAT Plate and for Levelling Up.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
