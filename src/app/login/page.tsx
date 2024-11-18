import React from "react";
import { createPost } from "./action";
import Form from "next/form";

const Page = () => {
  return (
    <div className=" mt-[60px] h-full flex flex-col gap-16 justify-center items-center">
      <p className=" text-[20px] font-semibold ">Login</p>
      <Form action={createPost} className=" flex flex-col gap-2 w-[400px]">
        <div className="flex flex-col gap-2">
          <label>Phone Number</label>
          <input
            className=" text-[1px h-[32px] p-1 border-[1px] border-gray-300 outline-none rounded-[8px]"
            name="phone"
            type="phone"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label> Password</label>
          <input
            type="password"
            className=" text-[14px] p-1 h-[32px] border-[1px] border-gray-300 outline-none rounded-[8px]"
            name="password"
          />
        </div>
        <button type="submit" className=" bg-black text-white py-2">
          LogIn
        </button>
      </Form>
    </div>
  );
};

export default Page;
