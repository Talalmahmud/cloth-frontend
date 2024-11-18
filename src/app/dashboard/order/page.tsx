import { CustomPagination } from "@/components/custom/Custompagination";
import { CustomTable } from "@/components/custom/CustomTable";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-2 p-4">
      <div className=" flex justify-between items-center">
        <p className=" text-[24px] font-semibold">Order List</p>
        <button className=" flex items-center gap-2 px-3 text-[16px] py-2 bg-gray-400 text-black rounded-[10px]">
          <Image src={"/pluse.svg"} height={20} width={20} alt="pluseicons" />
          Add
        </button>
      </div>
      <CustomTable headList={[]} rowList={[]} />
      <CustomPagination />
    </div>
  );
};

export default page;
