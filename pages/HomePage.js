import React, { useState, useEffect } from "react";
import Image from "next/image";
import Nft from "../assets/images/Sample NFT.svg";
import Navbar from "../components/Navbar";
import CurvedButton from "../components/CurvedButton";
import ProgressButton from "../components/ProgressButton";
import NftAtrributes from "../components/NftAtrributes";
import LevelUp from "../assets/logos/Level Up.png";
import EatCoin from "../assets/logos/EAT COIN.png";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import ReactModal from "react-modal";
import Button from "../components/Button";
import Matic from "../assets/logos/Polygon Matic.png";

const HomePage = () => {
  const progress = 80;
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [addPointsModal, setAddPointsModal] = useState(false);
  const [sellNftModal, setSellNftModal] = useState(false);
  const [sellingPrice, setSellingPrice] = useState();
  const [pointsData, setPointsData] = useState({
    efficiency: 10,
    fortune: 12,
    durability: 8,
  });
  const [apiPointsData, setApiPointsData] = useState({
    efficiency: 10,
    fortune: 12,
    durability: 8,
  });
  const [totalPoints, setTotalPoints] = useState(10);
  const [apiTotalPoints, setApiTotalPoints] = useState(10);
  const [currLevel, setCurrLevel] = useState(3);
  const [levelUpCost, setLevelUpCost] = useState(20);
  const [balance, setBalance] = useState(500);
  const [currShiny, setCurrShiny] = useState(100);
  const router = useRouter();

  const increment = (value) => {
    if (totalPoints > 0) {
      if (value === 0) {
        let efficiency = pointsData.efficiency;
        let points = totalPoints;
        setPointsData({ ...pointsData, efficiency: ++efficiency });
        setTotalPoints(--points);
      } else if (value === 1) {
        let fortune = pointsData.fortune;
        let points = totalPoints;
        setPointsData({ ...pointsData, fortune: ++fortune });
        setTotalPoints(--points);
      } else {
        let durability = pointsData.durability;
        let points = totalPoints;
        setPointsData({ ...pointsData, durability: ++durability });
        setTotalPoints(--points);
      }
    } else return;
  };

  const decrement = (value) => {
    if (totalPoints <= apiTotalPoints) {
      if (value === 0) {
        let efficiency = pointsData.efficiency;
        let points = totalPoints;
        if (efficiency <= apiPointsData.efficiency) {
          //replace pointsData.efficiency with Api one
          return;
        }
        setPointsData({ ...pointsData, efficiency: --efficiency });
        setTotalPoints(++points);
      } else if (value === 1) {
        let fortune = pointsData.fortune;
        let points = totalPoints;
        if (fortune <= apiPointsData.fortune) {
          //replace pointsData.efficiency with Api one
          return;
        }
        setPointsData({ ...pointsData, fortune: --fortune });
        setTotalPoints(++points);
      } else {
        let durability = pointsData.durability;
        let points = totalPoints;
        if (durability <= apiPointsData.durability) {
          //replace pointsData.efficiency with Api one
          return;
        }
        setPointsData({ ...pointsData, durability: --durability });
        setTotalPoints(++points);
      }
    } else return;
  };

  return (
    <div className="main h-screen w-full flex flex-col justify-start items-center bg-mainBg overflow-hidden">
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
        <div className="h-[50vh] w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-semibold text-3xl flex flex-row">
            Level Up{" "}
            <Image
              alt="Level Up"
              src={LevelUp}
              width="30"
              height="15"
              className="ml-4"
            ></Image>
          </span>
          <div className="mx-6 mt-4">
            <Image alt="sample nft" src={Nft} width="150" height="150"></Image>
          </div>
          <span className="font-semibold text-2xl italic mt-4">
            Level {currLevel}
          </span>
          <div className="h-[28vh] w-full flex flex-col justify-start">
            {currLevel != 4 ? (
              <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full flex flex-row justify-between items-baseline mb-4 mt-4 px-4">
                  <span className="font-semibold text-xl italic  flex flex-row items-end">
                    Cost:{" "}
                    <span className="font-semibold text-3xl not-italic ml-2">
                      {levelUpCost}
                    </span>
                    <Image
                      alt="Eat Coin"
                      src={EatCoin}
                      width="30"
                      height="30"
                      className="ml-2"
                    ></Image>
                  </span>
                  <span className="font-semibold text-xl italic  flex flex-row items-end">
                    Bal:{" "}
                    <span className="font-semibold text-3xl not-italic ml-2">
                      {balance}
                    </span>
                    <Image
                      alt="Eat Coin"
                      src={EatCoin}
                      width="30"
                      height="30"
                      className="ml-2"
                    ></Image>
                  </span>
                </div>
                {/* If Current Balance is lower than Cost */}
                {levelUpCost > balance && (
                  <span className="font-medium text-base italic text-center">
                    Current Balance is lower than Level Up cost
                  </span>
                )}
                {/* If Current Balance is lower than Cost */}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <span className="font-medium text-base text-center italic mt-4">
                  You are already at your Highest Level
                </span>
                <span className="font-medium text-2xl text-center italic mt-3">
                  {"You can't Level Up"}
                </span>
              </div>
            )}
          </div>

          <div className="w-full flex flex-row justify-between items-center px-2">
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
              bg={`${levelUpCost > balance ? "bg-disabled" : "bg-mainBg/90"}`}
              title="CONFIRM"
              action={() => {
                setAddPointsModal(true);
                setLevelUpModal(false);
              }}
              disabled={levelUpCost > balance}
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
        <div className="h-[50vh] w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[20]">
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
              <span className="font-semibold text-2xl italic w-10 flex flex-row justify-center mx-2">
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
              <span className="font-semibold text-2xl italic w-10 flex flex-row justify-center mx-2">
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
              <span className="font-semibold text-2xl italic w-10 flex flex-row justify-center mx-2">
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
              bg="bg-mainBg/90"
              title="CONFIRM"
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Adding Points */}

      {/* Modal for Selling NFT */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={sellNftModal}
        onRequestClose={() => setSellNftModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-[58vh] w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[20]">
          <span className="font-semibold text-3xl">Sell NFT </span>
          <div className="mx-6 mt-4">
            <Image alt="sample nft" src={Nft} width="200" height="200"></Image>
          </div>
          <div className="w-[70%] flex flex-row justify-around items-center mt-4">
            <span className="font-semibold text-2xl italic">Emerald</span>
            <span className="font-semibold text-2xl italic">
              Level {currLevel}
            </span>
          </div>
          <div className="w-[95%] h-[14vh] flex flex-col justify-start items-center pt-2">
            {currShiny < 100 ? (
              <span className="font-bold text-xl text-center mt-4">
                Your Shiny should be 100% to list your NFT for sale
              </span>
            ) : (
              <div className="w-full flex flex-col justify-center items-center mt-2">
                {" "}
                <span className="w-[85%] flex flex-row justify-start items-center font-medium text-lg">
                  Your Price
                </span>
                <div className="w-[85%] h-[3rem] bg-bg1 rounded-xl mt-2 border-[2px] flex flex-row justify-center items-center">
                  <input
                    className="w-[85%] h-full p-2 text-text1 font-semibold text-2xl"
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                    type="number"
                    onChange={(e) => {
                      setSellingPrice(e.target.value);
                    }}
                  ></input>
                  <Image
                    alt="Matic Logo"
                    src={Matic}
                    width="30"
                    height="30"
                  ></Image>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex flex-row justify-between items-center px-2">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setSellNftModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg={`${currShiny < 100 ? "bg-disabled" : "bg-mainBg/90"}`}
              title="CONFIRM"
              action={() => {}}
              disabled={currShiny > 100}
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Selling NFT */}

      <Navbar></Navbar>
      <div className="w-full px-6 mt-[10vh] flex flex-col justify-start items-center">
        <div className="mx-6">
          <Image alt="sample nft" src={Nft} width="200" height="200"></Image>
        </div>
        <div className="w-full flex flex-row justify-around items-end mt-10">
          <CurvedButton
            width="w-[8rem]"
            height="h-[3rem]"
            bg="bg-bg2"
            textSize="text-xl"
            title="Emerald"
          ></CurvedButton>
          <CurvedButton
            width="w-[8rem]"
            height="h-[3rem]"
            bg="bg-bg2"
            textSize="text-xl"
            title={`Level ${currLevel}`}
          ></CurvedButton>
        </div>
        <div className="w-full flex flex-row justify-center items-center mt-10">
          <ProgressButton
            width="w-full"
            height="h-[4rem]"
            title="Shiny"
            max={100}
            progress={progress}
            // progress="w-[100%]"
            title2={progress}
          ></ProgressButton>
        </div>
        <NftAtrributes></NftAtrributes>
      </div>
      <Footer setLevelUpModal={setLevelUpModal} setSellNftModal={setSellNftModal}></Footer>
    </div>
  );
};

export default HomePage;
