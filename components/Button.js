import React from "react";
import { useRouter } from "next/dist/client/router";

const Button = ({ width, height, bg, title, action, disabled }) => {
  const router = useRouter();

  return (
    <div
      className={`${width} ${height} ${bg} flex flex-row justify-center items-center rounded-2xl border-t-[1px] border-l-[1px] border-b-[3px] border-r-[3px] cursor-pointer`}
      onClick={disabled ? ()=>{} : action}
    >
      <span className="font-bold text-xl">{title}</span>
    </div>
  );
};

export default Button;
