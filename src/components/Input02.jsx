import React from "react";

export default function Input02({ message }) {
  return (
    <>
      <input
        className="w-full rounded-full bg-[#f1f2f3] px-4 py-3 text-[13px]"
        placeholder={message}
      />
    </>
  );
}
