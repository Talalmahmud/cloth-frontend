"use client";
import Image from "next/image";
import React from "react";

type Props = {
  setClose: (value: boolean) => void;
  children: React.ReactNode;
};

const CustomModal = ({ setClose, children }: Props) => {
  return (
    <div className=" fixed top-0 left-0 z-50 min-h-screen min-w-full flex flex-col justify-center bg-gray-500  items-center">
      <div className=" flex flex-col ">
        <button
          className=" flex justify-end text-black"
          onClick={() => setClose(false)}
        >
          <Image
            src={"/close.svg"}
            height={28}
            width={28}
            alt=""
            className=" hover:bg-red-400 rounded-full"
          />
        </button>

        {children}
      </div>
    </div>
  );
};

export default CustomModal;
