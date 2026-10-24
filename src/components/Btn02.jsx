import React from "react";

export default function Btn02({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full rounded-full bg-[#f1f2f3] text-black p-3.5 text-[13px] text-center hover:cursor-pointer hover:opacity-85 duration-300"
    >
      {label}
    </div>
  );
}
