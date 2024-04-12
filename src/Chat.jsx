import React from "react";
import robot_logo from "./assets/robot_logo.png";
import vector from "./assets/Vector.png";
import chevron_right from "./assets/chevron-right.png";
import product_image from "./assets/product image.png";
import setting from "./assets/setting.png";
import cross from "./assets/cross.png";
import attach from "./assets/attach.png";
import white_chevron_right from "./assets/white-chevron-right.png";
import bottom_logo from "./assets/bottom_logo.svg";

function Chat() {
  const tags = ["clutch", "Fabric lining", "Baggit", "Multi"];
  const filters = ["Strap -Long", "Colour", "Size", "Brand", "Material"];

  return (
    <div className="justify-center items-center ">
      <div className="mx-auto  w-[360px]">
        <div className="bg-[#EFF3FD] text-[#4C82EF] justify-between p-5 flex font-[poppins]">
          <div className=" flex gap-4">
            <div className="bg-white inline-block rounded-full relative">
              <img
                src={robot_logo}
                className="h-[50px] w-[50px] scale-x-150 scale-y-120"
                alt="logo"
              />
              <div className="bg-green-500 inline rounded-full absolute h-2 w-2 right-0 bottom-1"></div>
            </div>
            <div>
              <div className="font-semibold flex gap-2 text-[18px]">
                Timpu
                <img src={vector} alt="" />
              </div>
              <div className="text-[15px]">Chat assistant</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-green-500 inline rounded-full h-2 w-2"></div>
            online
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r w-3/5 from-[#E5EBFF] to-white mx-5 my-5 rounded-lg ">
            <div className="p-4 text-[13px] ">
              Hi Sam! I am your personal shopping assistant , how can i help you
              today ?
            </div>
            <div className="bg-white text-[10px] py-2">4:45 PM</div>
          </div>

          <div className="mx-5 rounded-lg  float-right w-3/5 bg-[#DCF7C5] relative">
            <div className="p-4 text-[13px] w-3/4 ">
              I am looking for a hand bag, with long strap .
            </div>
            <div className="bg-white text-[10px] py-2 absolute right-2">
              4:45 PM
            </div>
          </div>
        </div>
        <div className="mt-36">
          <p className="text-[#949494] text-[13px] my-2">
            Popular tags for handbag
          </p>
          <div className="flex gap-4">
            {tags.map((tag) => {
              return (
                <div className="bg-[#F2F7FF] text-[#4C82EF] px-2 py-1 text-[13px] rounded border-[#4C82EF] border-[1px]">
                  {tag}
                </div>
              );
            })}
            <img src={chevron_right} className="rounded-lg" alt="" />
          </div>
        </div>
        <div>
          <div className="bg-[#E5EBFF]  mt-5 p-3 rounded-xl w-5/6 text-[13px]">
            <div className="bg-white gap-5 flex rounded-lg p-3">
              <img src={product_image} alt="" />
              <div>
                <div className="flex justify-center font-semibold gap-2">
                  Bags On timpu
                  <img src={vector} className="" alt="" />
                </div>

                <div className="flex justify-center gap-2 text-[#949494] py-2">
                  1123 products
                  <img src={chevron_right} alt="" />
                </div>
              </div>
            </div>
            <p className="py-3">
              Or set filter and help us choose the best bag for you.
            </p>
          </div>
          <div className="bg-white text-[10px]">4:45 PM</div>
        </div>
        <div className="text-[#949494] text-[13px] flex justify-between py-3">
          Select filters
          <div className="flex gap-1">
            <img src={setting} alt="" />
            <p>Filters</p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {filters.map((filter) => {
            return (
              <div className="flex text-[13px]">
                <div className="text-[#8E8E8E] bg-[#F4F4F4] flex gap-2 p-1 rounded-lg items-center">
                  {filter}
                  <img src={cross} className="h-[13px]" alt="cross icon" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#E2E8F9] mt-3 rounded-lg p-5 ">
          <div className=" justify-between flex h-10">
            <div className="flex items-center bg-white p-5 rounded-lg">
              <input
                type="text"
                name=""
                id=""
                className="bg-text border-none focus:border-none outline-none rounded-lg"
                placeholder="Type Your message"
              />
              <img src={attach} alt="attach icon" className="cursor-pointer" />
            </div>
            <div className=" rounded-lg items-center flex justify-center bg-[#4C82EF]">
              <img src={white_chevron_right} className="px-3" alt="" />
            </div>
          </div>
          <div className="flex gap-2 text-[13px] justify-center items-center mt-3">
            <p className="text-[#7A7F8C]">
              <span className="text-[#B1B1B1] font-bold">Powered by </span>
              Krunk.ai
            </p>
            <img src={bottom_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
