import React from "react";
import logo from "../assets/images/DayFlow.png";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Btn01 from "../components/Btn01";
export default function Register() {
  return (
    <div className="bg-[#A8ABB5] p-6 w-full h-screen">
      <div className="bg-[#e9eaec] rounded-4xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] flex items-center justify-center p-4.5 h-full">
        <div className="bg-white flex flex-col items-center max-w-100 w-100 rounded-4xl p-8 gap-8">
          <div className="flex flex-col items-center">
            <img src={logo} className="w-24 h-24" alt="#" />
            <span className="text-[26px]">Đăng ký</span>
            <span className="opacity-60 text-xs">
              Đăng ký để bắt đầu quản lý dự án của bạn
            </span>
          </div>
          {/* FORM  */}
          <div className="flex flex-col w-full gap-5">
            <div className="flex items-start flex-col w-full gap-1">
              <span className="text-[11px] opacity-60">Họ và tên</span>
              <Input />
            </div>
            <div className="flex items-start flex-col w-full gap-1">
              <span className="text-[11px] opacity-60">Email</span>
              <Input />
            </div>
            <div className="flex items-start flex-col w-full gap-1">
              <span className="text-[11px] opacity-60">Mật khẩu</span>
              <Input type="password" />
            </div>
          </div>
          <div className="w-full">
            <Checkbox label="Ghi nhớ đăng nhập" />
            <Btn01 label="Đăng ký" />
            <div className="flex gap-1 text-xs mt-4 items-center w-full justify-center">
              <span>Đã có tài khoản?</span>
              <div className=" font-semibold text-[#6c5ce7] hover:cursor-pointer">
                Đăng nhập
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
