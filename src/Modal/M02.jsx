import React from "react";

export default function M02() {
  return (
    <div className="absolute top-full right-0 mt-2 z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg border border-gray-100 flex flex-col gap-5">
        <div className="text-[13px] font-semibold">Thông báo</div>
        <p className="text-[11px] text-gray-500 text-center">
          Bạn chưa có thông báo
        </p>
      </div>
    </div>
  );
}
