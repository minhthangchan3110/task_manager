import React from "react";

export default function CardProject() {
  return (
    <div className="bg-[#f1f2f3] rounded-2xl p-4.5 flex flex-col gap-8 w-full h-auto hover:-translate-y-0.5 transition-transform duration-300 hover:cursor-pointer">
      <div className="flex flex-col gap-1">
        <p className="text-[16px] font-semibold">Tên dự án</p>
        <span className="text-[12px] opacity-70">Mô tả dự án</span>
      </div>

      <div className="w-full bg-[#d9dbe0] rounded-full h-2">
        <div
          className="bg-[linear-gradient(90deg,#4cc34a,#a5e86b)] h-2 rounded-full"
          style={{ width: "45%" }}
        ></div>
        <div className="text-[12px] flex items-center justify-between mt-1">
          <span className="opacity-70">4 cột</span>
          <span className="font-semibold">3/10 task</span>
        </div>
      </div>

      <div className="text-[12px] opacity-75 text-end ">
        <span className="hover:text-red-500 hover:cursor-pointer duration-300">
          Xóa dự án
        </span>
      </div>
    </div>
  );
}
