import { createPost } from "@/app/login/action";
import Form from "next/form";
import React from "react";

const page = () => {
  return (
    <div className=" mt-[60px] flex flex-col gap-16 justify-center items-center">
      <p className=" text-[20px] font-semibold ">Change your password</p>
      <Form action={createPost} className=" flex flex-col gap-2 w-[400px]">
        <div className="flex flex-col gap-2">
          <label>New Password</label>
          <input
            className=" text-[1px h-[32px] p-1 border-[1px] border-gray-300 outline-none rounded-[8px]"
            name="phone"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Confirm Password</label>
          <input
            type="password"
            className=" text-[14px] p-1 h-[32px] border-[1px] border-gray-300 outline-none rounded-[8px]"
            name="confirmPassword"
          />
        </div>
        <button type="submit" className=" bg-black text-white py-2">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default page;
