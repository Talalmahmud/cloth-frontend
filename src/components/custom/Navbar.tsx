"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full h-[60px] flex items-center border-b-[1px] bg-white border-gray-200 fixed z-40 top-0 left-0">
      <div className=" w-full px-4 md:px-8 xl:px-20 flex justify-between items-center ">
        <h1>Logo</h1>
        <div className=" flex justify-between items-center gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/login"}>Home</Link> <Link href={"/"}>Home</Link>{" "}
        </div>
        <div className=" flex gap-1 items-center">
          <Image src={"/cart.svg"} height={32} width={32} alt="carticon" />
          <p className=" -mt-8 clear-start flex justify-center items-center rounded-full bg-orange-400 h-6 w-6 text-[14px] text-white">
            2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
