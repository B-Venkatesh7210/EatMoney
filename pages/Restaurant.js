import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import CurvedButton from "../components/CurvedButton";
import ReactModal from "react-modal";
import Button from "../components/Button";
import ProgressButton from "../components/ProgressButton";
import NftAtrributes from "../components/NftAtrributes";
import RestaurantPic from "../assets/images/restaurant.jpg";
import RestaurantDetails from "../components/RestaurantDetails";
import qrCode from "../assets/images/qrCode.jpg";
import Matic from "../assets/logos/Polygon Matic.png";
import Nft from "../assets/images/Sample NFT.svg";

const Restaurant = () => {
  const [receiptModal, setReceiptModal] = useState(false);
  const [scannerModal, setScannerModal] = useState(false);
  const [receiptData, setReceiptData] = useState({
    totalCharge: "",
    receiptDetails: "",
  });
  const [isRestaurant, setIsRestaurant] = useState(true);

  const handleData = () => {
    if (receiptData.totalCharge === "" && receiptData.receiptDetails === "") {
      return;
    } else {
      setScannerModal(true);
      setReceiptModal(false);
    }
  };

  return (
    <div className="main h-screen w-full flex flex-col justify-start items-center overflow-scroll">
      {/* Modal for receipt */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={receiptModal}
        onRequestClose={() => setReceiptModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-semibold text-3xl italic">Receipt</span>
          <form className="w-full flex flex-col justify-start items-start mt-8">
            <div className="w-full flex flex-col justify-start items-start mx-6">
              <span className="font-semibold text-lg italic">Total Charge</span>
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
                    setReceiptData({
                      ...receiptData,
                      totalCharge: e.target.value,
                    });
                  }}
                ></input>
                <span className="text-text1 text-3xl font-bold">$</span>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start mt-4 mx-6">
              <span className="font-semibold text-lg italic">
                Receipt Details
              </span>
              <div className="w-[85%] h-[8rem] bg-bg1 rounded-xl mt-2 border-[2px] flex flex-row justify-center items-center">
                <textarea
                  className="w-full h-full px-4 text-text1 font-semibold text-lg pt-2"
                  style={{
                    background: "transparent",
                    outline: "none",
                    border: "none",
                  }}
                  type="number"
                  onChange={(e) => {
                    setReceiptData({
                      ...receiptData,
                      receiptDetails: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between items-center mt-8 px-2">
              <Button
                width="w-[46%]"
                height="h-[3rem]"
                bg="bg-none"
                title="CANCEL"
                action={() => {
                  setReceiptModal(false);
                }}
              ></Button>
              <Button
                width="w-[46%]"
                height="h-[3rem]"
                bg="bg-bg2"
                title="CONFIRM"
                action={() => {
                  console.log(receiptData);
                  handleData();
                }}
              ></Button>
            </div>
          </form>
        </div>
      </ReactModal>
      {/* Modal for receipt */}

      {/* Modal for Scanner */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={scannerModal}
        onRequestClose={() => setScannerModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-[55vh] w-[90%] bg-mainBg rounded-[2rem] border-[3px] mx-6 mt-[50%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-semibold text-3xl italic">Scan QR</span>
          <span className="font-medium text-lg text-center italic mt-2">
            Ask the customer to Scan the QR from EAT MONEY Website.
          </span>
          <div className="mx-6 mt-4">
            <Image
              alt="sample nft"
              src={qrCode}
              width="400"
              height="400"
            ></Image>
          </div>
          <span className="flex flex-row justify-center items-center font-medium text-xl text-center italic mt-4">
            Total Charge: $ {receiptData.totalCharge} ~ {0.00075}{" "}
            <Image
              alt="Matic Logo"
              src={Matic}
              width="30"
              height="30"
              className="ml-4"
            ></Image>
          </span>
        </div>
      </ReactModal>
      {/* Modal for Scanner */}

      <Navbar></Navbar>
      {isRestaurant ? (
        <div className="w-full px-6 mt-[10vh] flex flex-col justify-start items-center">
          <div className="mx-6 mb-10">
            <Image
              alt="sample nft"
              src={RestaurantPic}
              width="400"
              height="400"
              className="rounded-3xl"
            ></Image>
          </div>
          <RestaurantDetails></RestaurantDetails>
          <div className="w-full flex flex-col justify-center items-center mt-[3rem]">
            <CurvedButton
              width="w-[65%]"
              height="h-[4rem]"
              bg="bg-bg2"
              textSize="text-[1.8rem]"
              title="Create Receipt"
              action={() => setReceiptModal(true)}
            ></CurvedButton>
            <div className="h-[4vh]"></div>
            <CurvedButton
              width="w-[55%]"
              height="h-[5rem]"
              bg="bg-bg2"
              textSize="text-xl"
              title="Withdraw Stake"
              subtitle={true}
              subtitleText={`Staked Amount: ${"40"}`}
              action={() => setReceiptModal(true)}
            ></CurvedButton>
          </div>
        </div>
      ) : (
        <div className="w-full px-6 mt-[100%] flex flex-col justify-start items-center">
          <span className="font-semibold text-xl text-text1">
            You are not a registered
          </span>
          <span className="font-bold text-3xl text-text1 mt-2">Restaurant</span>
          <span className="font-semibold text-center text-xl text-text1 mt-2">
            To register yourself, please contact the below authority.
          </span>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
