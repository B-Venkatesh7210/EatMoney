import React, { useState } from "react";
import Image from "next/image";
import EatCoin from "../assets/logos/EAT COIN.png";
import Matic from "../assets/logos/Polygon Matic.png";

const HistoryDetails = ({ historyDetail }) => {
  const [receiptDetails, setReceiptDetails] = useState(false);

  return (
    <div
      className="w-full flex flex-col justify-start items-center mb-4"
      onClick={() => {
        setReceiptDetails(!receiptDetails);
      }}
    >
      <div
        className={`w-full h-[3rem] bg-bg2 flex flex-row justify-between items-center rounded-2xl border-r-[5px] border-b-[5px] shadow-[5px_5px_0px_#0A4957] ring-inset px-4 z-10`}
      >
        <span className="font-semibold text-base">
          {historyDetail.restaurantName}
        </span>
        <span className="font-bold text-base flex flex-row justify-center items-center">
          - {historyDetail.maticCoins}{" "}
          <Image alt="Eat Coin" src={Matic} width="20" className="ml-2"></Image>
        </span>
        <span className="font-bold text-base flex flex-row justify-center items-center">
          + {historyDetail.eatCoins}{" "}
          <Image
            alt="Eat Coin"
            src={EatCoin}
            width="20"
            className="ml-2"
          ></Image>
        </span>
      </div>
      {receiptDetails && (
        <div className="w-full h-auto bg-bg1 border-l-[3px] border-r-[3px] border-b-[3px] z-0 mt-[-10px] rounded-[0px_0px_10px_10px] pt-4 pb-2 px-4 flex flex-row justify-between items-start">
          <div className="flex flex-col justify-start items-start">
            <span className="font-semibold text-base text-text1">
              Receipt Details
            </span>
            <span className="font-medium text-sm text-text1 mt-2">
              {historyDetail.details}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryDetails;
