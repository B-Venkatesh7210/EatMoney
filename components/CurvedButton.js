import React from "react";
import Image from "next/image";
import Matic from "../assets/logos/Polygon Matic.png";

const CurvedButton = ({
  width,
  height,
  bg,
  textSize,
  title,
  subtitle,
  subtitleText,
  action,
}) => {
  return (
    <div
      className={`${width} ${height} ${bg} flex flex-col justify-center items-center rounded-2xl border-r-[5px] border-b-[5px] shadow-[5px_5px_0px_#0A4957] ring-inset cursor-pointer`}
      onClick={action}
    >
      <span className={`font-bold ${textSize}`}>{title}</span>
      {subtitle && (
        <span className={`font-medium text-sm flex flex-row justify-center items-center`}>
          {subtitleText}{" "}
          <Image alt="Matic Logo" src={Matic} width="20" height="20" className="ml-2"></Image>
        </span>
      )}
    </div>
  );
};

export default CurvedButton;
