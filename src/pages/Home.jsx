import Header from "../components/Header";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Input02 from "../components/Input02";
import Btn01 from "../components/Btn01";
import { useState } from "react";
import CardMember from "../components/CardMember";
import { IoAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import ListLabel from "../components/ListLabel";

import KanbanColumn from "../components/KanbanColumn";
import KanbanBoard from "../components/KanbanBoard";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Danh sách");
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [showAllLabels, setShowAllLabels] = useState(false);

  return (
    <div className="bg-[#A8ABB5] p-6 w-full min-h-screen">
      <div className="bg-white rounded-4xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] p-4.5 min-h-[calc(100vh-48px)]">
        <Header />
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5 w-1/3">
            <div className="rounded-full bg-gray-100 hover:cursor-pointer hover:-translate-x-0.5 transition-transform duration-300 w-fit flex items-center justify-center p-4 shadow-2xl">
              <MdOutlineKeyboardArrowLeft size={14} />
            </div>

            <div className=" text-2xl">Tên dự án</div>
          </div>
          <div className="w-fit rounded-full bg-[#f1f2f3] p-1 text-xs">
            <div className="flex items-center gap-1">
              {["Danh sách", "Lịch sử"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedOption(option)}
                  className={`rounded-full hover:cursor-pointer px-4 py-2 transition-all duration-300 ${
                    selectedOption === option
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-5 w-1/3 justify-end">
            <div className="w-1/2">
              <Input02 message="Tìm kiếm task" />
            </div>
            <div className="w-1/4">
              <Btn01 label="+ Tạo task" />
            </div>
          </div>
        </div>

        {/* content */}
        <div className="flex mt-4 h-[calc(100vh-230px)] min-h-0 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-57.5 h-full shrink-0 overflow-y-auto overflow-x-hidden flex flex-col gap-2">
            {/* Member */}
            <div className="bg-[#f1f2f3] p-4 rounded-l-4xl">
              <div className="flex justify-between items-center">
                <span className="text-[15px]">Thành viên</span>
                <IoAddOutline className="cursor-pointer hover:text-green-500 transition-colors duration-300" />
              </div>
              <div className="mt-2">
                <CardMember showAll={showAllMembers} />
              </div>
              <div
                onClick={() => setShowAllMembers((prev) => !prev)}
                className="flex text-xs items-center justify-center gap-2 opacity-70 hover:cursor-pointer mt-2 hover:text-blue-500 duration-300"
              >
                <IoIosArrowDown
                  className={`duration-300  ${
                    showAllMembers ? "rotate-180" : ""
                  }`}
                />
                <span>
                  {showAllMembers
                    ? "Thu gọn thành viên"
                    : "Xem tất cả thành viên"}
                </span>
              </div>
            </div>

            <div className="bg-[#f1f2f3] p-4 rounded-l-4xl">
              <div className="flex justify-between items-center">
                <span className="text-[15px]">Nhãn</span>
                <IoAddOutline className="cursor-pointer hover:text-green-500 transition-colors duration-300" />
              </div>
              <div className="w-full mt-2">
                <ListLabel showAll={showAllLabels} />
              </div>
              <div
                onClick={() => setShowAllLabels((prev) => !prev)}
                className="flex text-xs items-center justify-center gap-2 opacity-70 hover:cursor-pointer mt-2 hover:text-blue-500 duration-300"
              >
                <IoIosArrowDown
                  className={`duration-300  ${
                    showAllLabels ? "rotate-180" : ""
                  }`}
                />
                <span>{showAllLabels ? "Thu gọn" : "Xem tất cả"}</span>
              </div>
            </div>
          </aside>
          {/* KanBan */}
          <main className="flex-1 min-w-0 min-h-0 pl-4">
            <KanbanBoard />
          </main>
        </div>
      </div>
    </div>
  );
}
