import Navbar from "@/components/custom/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[64px] px-4 md:px-8 xl:px-20 min-h-screen overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
