import React, { useState } from "react";
import M01 from "../Modal/M01";

export default function AddProject() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-[#f1f2f3] rounded-2xl p-4.5 flex justify-center border-dashed border-2 hover:border-blue-300 border-gray-300 items-center text-center gap-8 w-full h-auto hover:-translate-y-0.5 transition-transform duration-300 hover:cursor-pointer"
      >
        <span className="text-[14px] opacity-70">+ Tạo dự án mới</span>
      </div>
      {isOpen && <M01 onClose={() => setIsOpen(false)} />}
    </>
  );
}
