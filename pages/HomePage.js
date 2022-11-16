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
import NftPlateMP from "../components/NftPlateMP";
import Emerald4 from "../assets/images/Emerald Plate Level 4.svg";
import Bronze3 from "../assets/images/Bronze Plate Level 3.svg";
import Silver2 from "../assets/images/Silver Plate Level 2.svg";
import Gold1 from "../assets/images/Gold Plate Level 1.svg";
import HistoryDetails from "../components/HistoryDetails";

const HomePage = () => {
  const progress = 80;
  const [navStatus, setNavStatus] = useState({
    home: true,
    marketPlace: false,
    history: false,
  });
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [addPointsModal, setAddPointsModal] = useState(false);
  const [sellNftModal, setSellNftModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [levelModal, setLevelModal] = useState(false);
  const [paymentConfirmModal, setPaymentConfirmModal] = useState(false);
  const [paymentSuccessModal, setPaymentSuccessModal] = useState(false);
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

  const [category, setCategory] = useState("Emerald");
  const [chooseCategory, setChooseCategory] = useState("Emerald");
  const [chooseLevel, setChooseLevel] = useState(1);
  const [hasNft, sethasNft] = useState(false);
  const router = useRouter();

  const nftPlates = [
    {
      tokenId: 1,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      tokenId: 2,
      img: Bronze3,
      category: "Bronze",
      level: 3,
      price: 10,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 80,
      durabilityMax: 100,
      durability: 10,
    },
    {
      tokenId: 3,
      img: Silver2,
      category: "Silver",
      level: 2,
      price: 10,
      attributesMax: 100,
      attributes: 70,
      fortuneMax: 100,
      fortune: 45,
      durabilityMax: 100,
      durability: 15,
    },
    {
      tokenId: 4,
      img: Gold1,
      category: "Gold",
      level: 1,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      tokenId: 5,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 25,
      durabilityMax: 100,
      durability: 10,
    },
    {
      tokenId: 6,
      img: Gold1,
      category: "Gold",
      level: 1,
      price: 10,
      attributesMax: 100,
      attributes: 90,
      fortuneMax: 100,
      fortune: 55,
      durabilityMax: 100,
      durability: 80,
    },
    {
      tokenId: 7,
      img: Bronze3,
      category: "Bronze",
      level: 3,
      price: 10,
      attributesMax: 100,
      attributes: 60,
      fortuneMax: 100,
      fortune: 20,
      durabilityMax: 100,
      durability: 55,
    },
    {
      tokenId: 8,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      tokenId: 9,
      img: Bronze3,
      category: "Bronze",
      level: 3,
      price: 10,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 80,
      durabilityMax: 100,
      durability: 10,
    },
    {
      tokenId: 10,
      img: Silver2,
      category: "Silver",
      level: 2,
      price: 10,
      attributesMax: 100,
      attributes: 70,
      fortuneMax: 100,
      fortune: 45,
      durabilityMax: 100,
      durability: 15,
    },
    {
      tokenId: 11,
      img: Gold1,
      category: "Gold",
      level: 1,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      tokenId: 12,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 25,
      durabilityMax: 100,
      durability: 10,
    },
    {
      tokenId: 13,
      img: Gold1,
      category: "Gold",
      level: 1,
      price: 10,
      attributesMax: 100,
      attributes: 90,
      fortuneMax: 100,
      fortune: 55,
      durabilityMax: 100,
      durability: 80,
    },
    {
      tokenId: 14,
      img: Bronze3,
      category: "Bronze",
      level: 3,
      price: 10,
      attributesMax: 100,
      attributes: 60,
      fortuneMax: 100,
      fortune: 20,
      durabilityMax: 100,
      durability: 55,
    },
    {
      tokenId: 15,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      tokenId: 16,
      img: Bronze3,
      category: "Bronze",
      level: 3,
      price: 10,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 80,
      durabilityMax: 100,
      durability: 10,
    },
    {
      tokenId: 17,
      img: Silver2,
      category: "Silver",
      level: 2,
      price: 10,
      attributesMax: 100,
      attributes: 70,
      fortuneMax: 100,
      fortune: 45,
      durabilityMax: 100,
      durability: 15,
    },
    {
      tokenId: 18,
      img: Gold1,
      category: "Gold",
      level: 1,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      tokenId: 19,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 25,
      durabilityMax: 100,
      durability: 10,
    },
    {
      tokenId: 20,
      img: Gold1,
      category: "Gold",
      level: 1,
      price: 10,
      attributesMax: 100,
      attributes: 90,
      fortuneMax: 100,
      fortune: 55,
      durabilityMax: 100,
      durability: 80,
    },
    {
      tokenId: 21,
      img: Bronze3,
      category: "Bronze",
      level: 3,
      price: 10,
      attributesMax: 100,
      attributes: 60,
      fortuneMax: 100,
      fortune: 20,
      durabilityMax: 100,
      durability: 55,
    },
    {
      tokenId: 22,
      img: Emerald4,
      category: "Emerald",
      level: 4,
      price: 10,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
  ];

  const historyDetails = [
    {
      restaurantName: "Gulati Restaurant",
      maticCoins: 20,
      eatCoins: 10,
      details: "2 x Bhature",
    },
    {
      restaurantName: "Gulati Restaurant",
      maticCoins: 20,
      eatCoins: 10,
      details: "2 x Bhature",
    },
    {
      restaurantName: "Gulati Restaurant",
      maticCoins: 20,
      eatCoins: 10,
      details: "2 x Bhature",
    },
    {
      restaurantName: "Gulati Restaurant",
      maticCoins: 20,
      eatCoins: 10,
      details: "2 x Bhature",
    },
  ];

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
    <div className="main flex flex-col justify-start items-center bg-mainBg overflow-hidden">
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
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[20%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl flex flex-row">
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
          <div className="h-auto w-full flex flex-col justify-start">
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
                <span className="font-medium text-2xl text-center italic mt-1 mb-4">
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
              bg={`${
                levelUpCost > balance || currLevel == 4
                  ? "bg-disabled"
                  : "bg-mainBg/90"
              }`}
              title="CONFIRM"
              action={() => {
                setAddPointsModal(true);
                setLevelUpModal(false);
              }}
              disabled={levelUpCost > balance || currLevel == 4}
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
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[20%] flex flex-col justify-start items-center p-4 z-[20]">
          <span className="font-bold text-3xl">Add Points</span>
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
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[20%] flex flex-col justify-start items-center p-4 z-[20]">
          <span className="font-bold text-3xl">Sell NFT </span>
          <div className="mx-6 mt-4">
            <Image alt="sample nft" src={Nft} width="200" height="200"></Image>
          </div>
          <div className="w-[70%] flex flex-row justify-around items-center mt-4">
            <span className="font-semibold text-2xl italic">Emerald</span>
            <span className="font-semibold text-2xl italic">
              Level {currLevel}
            </span>
          </div>
          <div className="w-[95%] h-[14vh] flex flex-col justify-start items-center pt-2 mb-3">
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

      {/* Modal for Category */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={categoryModal}
        onRequestClose={() => setCategoryModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Categories</span>
          <div className="w-[90%] flex flex-col justify-center items-center mt-6">
            <div
              className="w-full h-[3rem] rounded-xl bg-emerald flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Emerald");
                setCategoryModal(false);
              }}
            >
              Emerald
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-gold flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Gold");
                setCategoryModal(false);
              }}
            >
              Gold
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-silver flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Silver");
                setCategoryModal(false);
              }}
            >
              Silver
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bronze flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Bronze");
                setCategoryModal(false);
              }}
            >
              Bronze
            </div>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Category */}

      {/* Modal for Level */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={levelModal}
        onRequestClose={() => setLevelModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Levels</span>
          <div className="w-[90%] flex flex-col justify-center items-center mt-6">
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(1);
                setLevelModal(false);
              }}
            >
              Level 1
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(2);
                setLevelModal(false);
              }}
            >
              Level 2
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(3);
                setLevelModal(false);
              }}
            >
              Level 3
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(4);
                setLevelModal(false);
              }}
            >
              Level 4
            </div>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Level */}

      {/* Modal for Payment Confirmation */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={paymentConfirmModal}
        onRequestClose={() => setPaymentConfirmModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Confirm Payment</span>
          <span className="font-medium text-xl mt-4">Restaurant Name</span>
          <div className="w-[85%] h-auto py-4 px-2 bg-bg1 rounded-xl mt-2 border-[2px] border-text2 text-text1 flex flex-col justify-start items-start">
            <span>2 x Bhature</span>
          </div>
          <div className="w-[90%] flex flex-row justify-between items-start mt-4">
            <div className="flex flex-col justify-center items-start">
              <span className="font-medium text-lg">Total Charge</span>
              <div className="w-full flex flex-col justify-start items-start mt-2">
                <span className="font-bold text-xl">
                  <span className="ml-2">$</span>{" "}
                  <span className="ml-3">{400}</span>
                </span>
                <span className="font-bold text-xl flex flex-row justify-center items-center mt-2">
                  <Image
                    alt="Matic Logo"
                    src={Matic}
                    width="30"
                    height="30"
                  ></Image>
                  <span className="ml-2">{30}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end">
              <span className="font-medium text-lg">Approx. EAT</span>
              <div className="w-full flex flex-col justify-start items-end   mt-2">
                <span className="font-bold text-xl flex flex-row justify-center items-center mt-2">
                  <Image
                    alt="Eat Coin Logo"
                    src={EatCoin}
                    width="30"
                    height="30"
                  ></Image>
                  {/* <span className="mx-2">+</span> */}
                  <span className="ml-2">+{300}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center px-2 mt-6">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setPaymentConfirmModal(false);
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
      {/* Modal for Payment Confirmation */}

      {/* Modal for Payment Successful */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={paymentSuccessModal}
        onRequestClose={() => setPaymentSuccessModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Payment Successful</span>
          <div className="w-[70%] flex flex-row justify-between items-center mt-6">
            <span className="font-bold text-[2rem] flex flex-row justify-center items-center">
              <span className="ml-2">$</span>{" "}
              <span className="ml-3">{400}</span>
            </span>
            <span className="font-bold text-[2rem] flex flex-row justify-center items-center">
              <Image
                alt="Matic Logo"
                src={Matic}
                width="25"
                height="25"
              ></Image>
              <span className="ml-2">{30}</span>
            </span>
          </div>
          <span className="font-bold text-xl mt-4">Try Your Luck</span>
            <div className="w-full flex flex-row justify-between items-center px-2 mt-6">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setPaymentConfirmModal(false);
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
      {/* Modal for Payment Successful */}

      <Navbar setNavStatus={setNavStatus}></Navbar>
      {navStatus.home ? (
        <div className="w-full px-6 mt-[12vh] flex flex-col justify-center items-center">
          {!hasNft ? (
            <>
              <div className="mx-6">
                <Image
                  alt="sample nft"
                  src={Nft}
                  width="200"
                  height="200"
                ></Image>
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
                  height="h-[5rem]"
                  title="Shiny"
                  max={100}
                  progress={progress}
                  // progress="w-[100%]"
                  title2={progress}
                ></ProgressButton>
              </div>
              <NftAtrributes></NftAtrributes>
            </>
          ) : (
            <div className="w-full h-[50vh] mt-[12vh] flex flex-col justify-center items-center">
              <span className="font-semibold text-lg text-text1 italic text-center">
                You do not own any EAT PLATE
              </span>
              <span className="font-bold text-xl text-text1 italic text-center mt-2 mb-8">
                Buy one from the marketplace
              </span>
              <CurvedButton
                width="w-[12rem]"
                height="h-[3rem]"
                bg="bg-bg2"
                textSize="text-xl"
                title="Market Place"
                action={() => {
                  setNavStatus({
                    home: false,
                    marketPlace: true,
                    history: false,
                  });
                }}
              ></CurvedButton>
            </div>
          )}
        </div>
      ) : navStatus.marketPlace ? (
        <div className="fixed w-full flex flex-col justify-start items-center h-[100vh] mt-[9vh] py-4 px-2 overflow-hidden">
          <span className="text-text1 text-2xl font-bold">Market Place</span>
          <div className=" w-[80%] flex flex-row justify-between items-center mt-4">
            <CurvedButton
              width="w-[8rem]"
              height="h-[3rem]"
              bg={`${
                chooseCategory == "Emerald"
                  ? "bg-emerald"
                  : chooseCategory == "Gold"
                  ? "bg-gold"
                  : chooseCategory == "Silver"
                  ? "bg-silver"
                  : chooseCategory == "Bronze"
                  ? "bg-bronze"
                  : "bg-bg2"
              }`}
              textSize="text-xl"
              title={chooseCategory}
              action={() => {
                setCategoryModal(true);
              }}
            ></CurvedButton>
            <CurvedButton
              width="w-[8rem]"
              height="h-[3rem]"
              bg="bg-bg2"
              textSize="text-xl"
              title={`Level ${chooseLevel}`}
              action={() => {
                setLevelModal(true);
              }}
            ></CurvedButton>
          </div>
          <div className="w-full h-auto grid grid-cols-2 gap-4 mt-8 overflow-scroll px-2">
            {nftPlates.map((nftPlate) => (
              <div
                key={nftPlate}
                className={`${
                  nftPlates[nftPlates.length - 1].tokenId == nftPlate.tokenId &&
                  "mb-[15rem]"
                }`}
              >
                <NftPlateMP nftPlate={nftPlate}></NftPlateMP>
              </div>
            ))}
          </div>
        </div>
      ) : navStatus.history ? (
        <div className="fixed w-full flex flex-col justify-start items-center h-[100vh] mt-[9vh] py-4 px-2 overflow-hidden">
          <div className="w-[90%] h-[75%] flex flex-col justify-start items-center">
            <span className="text-text1 text-2xl font-bold">History</span>
            {/* If History is Empty */}
            {/* <span className="text-text1 text-xl font-semibold italic mt-10">You do not have history</span> */}
            {/* If History is Empty */}
            <div className="w-full h-full flex flex-col justify-start items-center mt-8">
              {historyDetails.map((historyDetail) => (
                <HistoryDetails
                  key={historyDetail.details}
                  historyDetail={historyDetail}
                ></HistoryDetails>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Footer
        setLevelUpModal={setLevelUpModal}
        setNavStatus={setNavStatus}
        setSellNftModal={setSellNftModal}
      ></Footer>
    </div>
  );
};

export default HomePage;
