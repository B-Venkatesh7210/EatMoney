import React, { useEffect, useState } from "react";
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
import { useAccount, useSigner, useContract, useProvider } from "wagmi";
import { ethers } from "ethers";
import { config } from "../config/config";
import { BigNumber } from "ethers";
import { generateNonce } from "../utils/utils";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";

const Restaurant = () => {
  const [receiptModal, setReceiptModal] = useState(false);
  const [scannerModal, setScannerModal] = useState(false);
  const [receiptData, setReceiptData] = useState({
    totalCharge: "0",
    receiptDetails: "",
  });
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [qr, setQr] = useState("");
  const [price, setPrice] = useState(BigNumber.from(0));
  const { isConnected, address } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();
  const provider = useProvider();
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    signer
  );
  const getRestaurantDetails = async () => {
    const retaurant = await contract.getRestaurantDetails(address);
    console.log(BigNumber.from(0));
    if (!BigNumber.from(retaurant.id).eq(BigNumber.from(0))) {
      const data = await (
        await fetch(
          "https://" +
            retaurant.info.replace("ipfs://", "") +
            ".ipfs.nftstorage.link"
        )
      ).json();
      //console.log(data);
      setRestaurant({
        name: data.name,
        irlAddress: data.address,
        description: data.description,
        image: data.image,
        id: retaurant.id,
        info: retaurant.info,
        owner: retaurant.owner,
      });
      setIsRestaurant(true);
      const priceFeed = new ethers.Contract(
        config.priceFeedAddress,
        config.chainlinkPriceFeedAbi,
        signer
      );
      priceFeed.latestRoundData().then((roundData) => {
        setPrice(BigNumber.from(roundData.answer));
        console.log("Latest Round Data", roundData.answer.toString());
      });
    }
    //console.log(retaurant);
  };

  useEffect(() => {
    if (isConnected && signer) {
      getRestaurantDetails();
    }
  }, [signer]);

  const createReceipt = async () => {
    if (
      (receiptData.totalCharge === "" && receiptData.receiptDetails === "") ||
      !restaurant
    ) {
      return;
    } else {
      const nonce = generateNonce(10);
      const message = `${BigNumber.from(restaurant.id).toString()}_${
        restaurant.name
      }_${receiptData.totalCharge}_${receiptData.receiptDetails}`;
      const hash = ethers.utils.keccak256(
        ethers.utils.toUtf8Bytes(message + nonce)
      );
      const sig = await signer.signMessage(hash);

      const receipt = JSON.stringify({
        id: restaurant.id,
        name: restaurant.name,
        amountInUsd: receiptData.totalCharge,
        description: receiptData.receiptDetails,
        message: message,
        nonce: nonce,
        signature: sig,
        image: restaurant.image,
      });

      setQr(receipt);
      toast("Receipt Created Successfully");
      console.log(sig);
      setScannerModal(true);
      setReceiptModal(false);
    }
  };

  const withdrawStake = async () => {
    try {
      console.log(address);
      const txn = await contract.deleteRestaurant(address);
      await txn.wait();
      await getRestaurantDetails();
      toast("Restaurant Deleted Successfully");
    } catch (e) {
      toast.error("Something Went Wrong");
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
                action={async () => {
                  console.log(receiptData);
                  await createReceipt();
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
            <QRCode
              size={350}
              value={qr}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 350 350`}
            />
          </div>
          <span className="flex flex-row justify-center items-center font-medium text-xl text-center italic mt-4">
            Total Charge: $ {receiptData.totalCharge.toString()} ~{" "}
            {(
              price
                .mul(
                  BigNumber.from(parseFloat(receiptData.totalCharge) * 10 ** 6)
                )
                .div(10 ** 6)
                .toNumber() /
              10 ** 8
            ).toFixed(3)}
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
              src={restaurant.image}
              loader={() => restaurant.image}
              width="400"
              height="400"
              className="rounded-3xl"
            ></Image>
          </div>
          <RestaurantDetails restaurant={restaurant}></RestaurantDetails>
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
              action={() => withdrawStake()}
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
