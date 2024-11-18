"use client";
import CustomModal from "@/components/custom/CustomModal";
import { CustomPagination } from "@/components/custom/Custompagination";
import { CustomTable } from "@/components/custom/CustomTable";
import CategoryForm from "@/components/custom/forms/CategoryForm";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" flex flex-col gap-2 p-4">
      <div className=" flex justify-between items-center">
        <p className=" text-[24px] font-semibold">Category List</p>
        <button
          onClick={() => setToggle(true)}
          className=" flex items-center gap-2 px-3 text-[16px] py-2 bg-gray-400 hover:bg-gray-300 text-black rounded-[10px]"
        >
          <Image src={"/pluse.svg"} height={20} width={20} alt="pluseicons" />
          Add
        </button>
      </div>
      <CustomTable headList={[]} rowList={[]} />
      <CustomPagination />
      {toggle && (
        <CustomModal setClose={setToggle}>
          <CategoryForm />
        </CustomModal>
      )}
    </div>
  );
};

export default Page;
