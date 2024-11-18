import SideBar from "@/components/custom/SideBar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Dashboardlayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <SideBar />
      <div className=" min-h-screen w-full overflow-scroll">{children}</div>
    </div>
  );
};

export default Dashboardlayout;
