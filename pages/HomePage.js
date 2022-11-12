import React, { useState, useEffect } from "react";
import Image from "next/image";
import Nft from "../assets/images/Sample NFT.png";
import Navbar from "../components/Navbar";
import CurvedButton from "../components/CurvedButton";
import ProgressButton from "../components/ProgressButton";
import LevelButton from "../components/LevelButton";
import NftAtrributes from "../components/NftAtrributes";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import ReactModal from "react-modal";
import Button from "../components/Button";

const HomePage = () => {
  const progress = "30%";
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [addPointsModal, setAddPointsModal] = useState(false);
  const [pointsData, setPointsData] = useState({
    efficiency: 0,
    fortune: 0,
    durability: 0,
  });
  const [totalPoints, setTotalPoints] = useState(10);
  const router = useRouter();

  const increment = (value) => {
    if (value === 0) {
      let efficiency = pointsData.efficiency;
      let points = totalPoints;
      setPointsData({ ...pointsData, efficiency: ++efficiency });
      setTotalPoints(--points);
    } else if (value === 1) {
      setPointsData(...pointsData, fortune++);
      //   setTotalPoints(totalPoints = totalPoints--);
    } else {
      setPointsData(...pointsData, durability++);
      //   setTotalPoints(totalPoints--);
    }
  };

  const decrement = (value) => {
    if (value === 0) {
      let efficiency = pointsData.efficiency-1;
      if(efficiency<pointsData.efficiency)  //replace pointsData.efficiency with Api one
      return;  
      setPointsData(...pointsData, efficiency--);
      //   setTotalPoints(totalPoints++);
    } else if (value === 1) {
      setPointsData(...pointsData, fortune--);
      //   setTotalPoints(totalPoints++);
    } else {
      setPointsData(...pointsData, durability--);
      // setTotalPoints(totalPoints++);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-start items-center bg-mainBg overflow-hidden">
      {/* Modal for Level Up */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={levelUpModal}
        onRequestClose={() => setLevelUpModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-[50vh] w-[90%] bg-mainBg rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-semibold text-3xl italic">Level Up</span>
          <div className="mx-6 mt-4">
            <Image alt="sample nft" src={Nft} width="150" height="150"></Image>
          </div>
          <span className="font-semibold text-2xl italic mt-4">Level 4</span>
          <div className="w-full flex flex-row justify-between items-baseline mt-6 px-4">
            <span className="font-semibold text-lg italic mt-4">Cost</span>
            <span className="font-semibold text-xl italic mt-4">
              30 GST + 30 GMT
            </span>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-8 px-2">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setLevelUpModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-bg2"
              title="CONFIRM"
              action={() => {
                setAddPointsModal(true);
                setLevelUpModal(false);
              }}
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Level Up */}

      {/* Modal for Adding Points */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={addPointsModal}
        onRequestClose={() => setAddPointsModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-[50vh] w-[90%] bg-mainBg rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[20]">
          <span className="font-semibold text-3xl italic">Add Points</span>
          <div className="w-full flex flex-row justify-start items-baseline mt-4 ml-6">
            <span className="font-semibold text-xl italic mt-4">
              Available Points:
            </span>
            <span className="font-semibold text-2xl italic ml-4">
              {totalPoints}
            </span>
          </div>
          <div className="w-full flex flex-row justify-between items-baseline mt-6 px-4">
            <span className="font-semibold text-lg italic mt-4">
              Efficiency
            </span>
            <div className="flex flex-row justify-center items-center">
              <div
                className="w-4 h-4 bg-bgRed border-[2px]"
                onClick={() => {
                  decrement(0);
                }}
              ></div>
              <span className="font-semibold text-2xl italic mx-4">
                {pointsData.efficiency}
              </span>
              <div
                className="w-4 h-4 bg-bgGreen border-[2px]"
                onClick={() => {
                  increment(0);
                }}
              ></div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-baseline mt-3 px-4">
            <span className="font-semibold text-lg italic">Fortune</span>
            <div className="flex flex-row justify-center items-center">
              <div
                className="w-4 h-4 bg-bgRed border-[2px]"
                onClick={() => {
                  decrement(1);
                }}
              ></div>
              <span className="font-semibold text-2xl italic mx-4">
                {pointsData.fortune}
              </span>
              <div
                className="w-4 h-4 bg-bgGreen border-[2px]"
                onClick={() => {
                  increment(1);
                }}
              ></div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-baseline mt-3 px-4">
            <span className="font-semibold text-lg italic">Durability</span>
            <div className="flex flex-row justify-center items-center">
              <div
                className="w-4 h-4 bg-bgRed border-[2px]"
                onClick={() => {
                  decrement(2);
                }}
              ></div>
              <span className="font-semibold text-2xl italic mx-4">
                {pointsData.durability}
              </span>
              <div
                className="w-4 h-4 bg-bgGreen border-[2px]"
                onClick={() => {
                  increment(2);
                }}
              ></div>
            </div>
          </div>
          <div className="w-full bottom-0 flex flex-row justify-between items-center mt-[11vh] px-2">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => setAddPointsModal(false)}
            ></Button>

            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-bg2"
              title="CONFIRM"
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Adding Points */}

      <Navbar></Navbar>
      <div className="w-full px-6 mt-[10vh] flex flex-col justify-start items-center">
        <div className="mx-6">
          <Image alt="sample nft" src={Nft} width="400" height="400"></Image>
        </div>
        <div className="w-full flex flex-row justify-between items-end mt-10">
          <CurvedButton
            width="w-[6rem]"
            height="h-[3rem]"
            bg="bg-bg2"
            title="Common"
          ></CurvedButton>
          <CurvedButton
            width="w-[6rem]"
            height="h-[3rem]"
            bg="bg-bg2"
            title="Emerald"
          ></CurvedButton>
          <ProgressButton
            width="w-[6rem]"
            height="h-[3rem]"
            title="Shiny"
            progress={`w-[${progress}]`}
            // progress="w-[50%]"
            title2={progress}
          ></ProgressButton>
        </div>
        {/* <div className="w-full flex flex-row justify-center items-center mt-4">
          <CurvedButton
            width="w-[6rem]"
            height="h-[3rem]"
            bg="bg-bg1"
            title="Cap"
          ></CurvedButton>
        </div> */}
        <div className="w-full flex flex-row justify-center items-center mt-6">
          <LevelButton
            width="w-full"
            height="h-[2.5rem]"
            progress="w-[25%]"
            title="Level"
          ></LevelButton>
        </div>
        <NftAtrributes></NftAtrributes>
      </div>
      <Footer setLevelUpModal={setLevelUpModal}></Footer>
    </div>
  );
};

export default HomePage;
