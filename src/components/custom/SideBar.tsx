"use client";
import { dashboardLeftNavList } from "@/constants/common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface SideBarProps {
  id: number;
  title: string;
  pathLink: string;
  imgUrl: string;
}

const SideBar = () => {
  const pathName = usePathname();
  
  return (
    <div className=" flex flex-col gap-6 w-[40px] xl:w-[300px] border-r-[1px] min-h-screen bg-gray-200 overscroll-auto">
      <div className=" flex justify-center items-center py-6">
        <Image
          src={"/logo.jpeg"}
          height={90}
          width={90}
          className=" h-8 w-8 xl:h-[90px] md:w-[90px] bg-white rounded-full"
          alt=""
        />
      </div>

      <div className=" flex flex-col  ">
        {dashboardLeftNavList.map((item: SideBarProps) => (
          <Link
            href={item?.pathLink}
            className={` py-2 flex justify-start px-2 gap-2 ${
              pathName === item?.pathLink
                ? "bg-slate-400 text-white"
                : "text-black "
            } items-center  cursor-pointer`}
            key={item?.id}
          >
            <Image
              src={item?.imgUrl}
              height={20}
              width={20}
              alt=""
              className={`${pathName === item?.pathLink && "animate-bounce"} `}
            />
            <p className="hidden md:block ">{item?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
