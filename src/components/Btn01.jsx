import React from "react";

export default function Btn01({ label }) {
  return (
    <div className="w-full rounded-full bg-black text-white p-3.5 text-[13px] text-center hover:cursor-pointer hover:opacity-85 duration-300">
      {label}
    </div>
  );
}
