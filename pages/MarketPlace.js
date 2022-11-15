import React, { useState } from "react";
import CurvedButton from "../components/CurvedButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NftPlateMP from "../components/NftPlateMP";
import ReactModal from "react-modal";
import Bronze3 from "../assets/images/Bronze Plate Level 3.svg";
import Silver2 from "../assets/images/Silver Plate Level 2.svg";
import Gold1 from "../assets/images/Gold Plate Level 1.svg";
import Emerald4 from "../assets/images/Emerald Plate Level 4.svg";

const MarketPlace = () => {
  const [category, setCategory] = useState("Emerald");
  const [level, setLevel] = useState(1);
  const [categoryModal, setCategoryModal] = useState(false);
  const [levelModal, setLevelModal] = useState(false);

  const nftPlates = [
    {
      img: Emerald4,
      category: "Emerald",
      level: 4,
      shiny: 80,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      img: Bronze3,
      category: "Bronze",
      level: 3,
      shiny: 60,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 80,
      durabilityMax: 100,
      durability: 10,
    },
    {
      img: Silver2,
      category: "Silver",
      level: 2,
      shiny: 20,
      attributesMax: 100,
      attributes: 70,
      fortuneMax: 100,
      fortune: 45,
      durabilityMax: 100,
      durability: 15,
    },
    {
      img: Gold1,
      category: "Gold",
      level: 1,
      shiny: 80,
      attributesMax: 100,
      attributes: 30,
      fortuneMax: 100,
      fortune: 40,
      durabilityMax: 100,
      durability: 50,
    },
    {
      img: Emerald4,
      category: "Emerald",
      level: 4,
      shiny: 65,
      attributesMax: 100,
      attributes: 20,
      fortuneMax: 100,
      fortune: 25,
      durabilityMax: 100,
      durability: 10,
    },
    {
      img: Gold1,
      category: "Gold",
      level: 1,
      shiny: 60,
      attributesMax: 100,
      attributes: 90,
      fortuneMax: 100,
      fortune: 55,
      durabilityMax: 100,
      durability: 80,
    },
    {
      img: Bronze3,
      category: "Bronze",
      level: 3,
      shiny: 40,
      attributesMax: 100,
      attributes: 60,
      fortuneMax: 100,
      fortune: 20,
      durabilityMax: 100,
      durability: 55,
    },
    {
        img: Emerald4,
        category: "Emerald",
        level: 4,
        shiny: 80,
        attributesMax: 100,
        attributes: 30,
        fortuneMax: 100,
        fortune: 40,
        durabilityMax: 100,
        durability: 50,
      },
      {
        img: Bronze3,
        category: "Bronze",
        level: 3,
        shiny: 60,
        attributesMax: 100,
        attributes: 20,
        fortuneMax: 100,
        fortune: 80,
        durabilityMax: 100,
        durability: 10,
      },
      {
        img: Silver2,
        category: "Silver",
        level: 2,
        shiny: 20,
        attributesMax: 100,
        attributes: 70,
        fortuneMax: 100,
        fortune: 45,
        durabilityMax: 100,
        durability: 15,
      },
      {
        img: Gold1,
        category: "Gold",
        level: 1,
        shiny: 80,
        attributesMax: 100,
        attributes: 30,
        fortuneMax: 100,
        fortune: 40,
        durabilityMax: 100,
        durability: 50,
      },
      {
        img: Emerald4,
        category: "Emerald",
        level: 4,
        shiny: 65,
        attributesMax: 100,
        attributes: 20,
        fortuneMax: 100,
        fortune: 25,
        durabilityMax: 100,
        durability: 10,
      },
      {
        img: Gold1,
        category: "Gold",
        level: 1,
        shiny: 60,
        attributesMax: 100,
        attributes: 90,
        fortuneMax: 100,
        fortune: 55,
        durabilityMax: 100,
        durability: 80,
      },
      {
        img: Bronze3,
        category: "Bronze",
        level: 3,
        shiny: 40,
        attributesMax: 100,
        attributes: 60,
        fortuneMax: 100,
        fortune: 20,
        durabilityMax: 100,
        durability: 55,
      }
  ];

  return (
    <div className="main h-screen min-h-[100vh] w-full flex flex-col justify-start items-center overflow-hidden">
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
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[60%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-semibold text-3xl">Categories</span>
          <div className="w-[90%] flex flex-col justify-center items-center mt-6">
            <div
              className="w-full h-[3rem] rounded-xl bg-emerald flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setCategory("Emerald");
                setCategoryModal(false);
              }}
            >
              Emerald
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-gold flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setCategory("Gold");
                setCategoryModal(false);
              }}
            >
              Gold
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-silver flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setCategory("Silver");
                setCategoryModal(false);
              }}
            >
              Silver
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bronze flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setCategory("Bronze");
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
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[60%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-semibold text-3xl">Levels</span>
          <div className="w-[90%] flex flex-col justify-center items-center mt-6">
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setLevel(1);
                setLevelModal(false);
              }}
            >
              Level 1
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setLevel(2);
                setLevelModal(false);
              }}
            >
              Level 2
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setLevel(3);
                setLevelModal(false);
              }}
            >
              Level 3
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setLevel(4);
                setLevelModal(false);
              }}
            >
              Level 4
            </div>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Level */}

      <Navbar></Navbar>
      <div className="fixed w-full flex flex-col justify-start items-center h-[85vh] mt-[6vh] py-4 px-2">
        <span className="text-text1 text-2xl font-bold">Market Place</span>
        <div className=" w-[80%] flex flex-row justify-between items-center mt-4">
          <CurvedButton
            width="w-[8rem]"
            height="h-[3rem]"
            bg="bg-bg2"
            textSize="text-xl"
            title={category}
            action={() => {
              setCategoryModal(true);
            }}
          ></CurvedButton>
          <CurvedButton
            width="w-[8rem]"
            height="h-[3rem]"
            bg="bg-bg2"
            textSize="text-xl"
            title={`Level ${level}`}
            action={() => {
              setLevelModal(true);
            }}
          ></CurvedButton>
        </div>
        <div className="w-full h-auto grid grid-cols-2 gap-4 mt-8 overflow-auto px-2">
          {nftPlates.map((nftPlate) => (
            <NftPlateMP key={nftPlate} nftPlate={nftPlate}></NftPlateMP>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MarketPlace;
