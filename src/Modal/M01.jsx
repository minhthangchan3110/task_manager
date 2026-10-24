import React from "react";
import Btn02 from "../components/Btn02";
import Btn01 from "../components/Btn01";
import Input from "../components/Input";

export default function M01({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-4xl p-6 w-full max-w-md mx-4">
        <div className="flex flex-col gap-5">
          <span className="text-lg font-semibold">Tên dự án</span>

          <div className="flex items-start flex-col w-full gap-1">
            <span className="text-[11px] opacity-60">Tên dự án</span>
            <Input />
          </div>

          <div className="flex items-start flex-col w-full gap-1">
            <span className="text-[11px] opacity-60">
              Mô tả (Không bắt buộc)
            </span>
            <Input />
          </div>

          <div className="flex justify-end gap-3">
            <Btn02 label="Hủy" onClick={onClose} />
            <Btn01 label="Tạo dự án" />
          </div>
        </div>
      </div>
    </div>
  );
}
