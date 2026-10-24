import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/DayFlow.png";
import { CiSearch } from "react-icons/ci";
import { GiRingingBell } from "react-icons/gi";
import Btn01 from "../components/Btn01";
import CardProject from "../components/CardProject";
import AddProject from "../components/AddProject";
import Header from "../components/Header";

export default function ListProjects() {
  const notiRef = useRef(null);
  const [isOpenNoti, setIsOpenNoti] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (notiRef.current && !notiRef.current.contains(event.target)) {
        setIsOpenNoti(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#A8ABB5] p-6 w-full min-h-screen">
      <div className="bg-white rounded-4xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] p-4.5 min-h-[calc(100vh-48px)]">
        <Header />

        {/* Button */}
        <div className="flex w-full items-center justify-between mt-4">
          <span className="text-[30px]">Dự án của bạn</span>
        </div>

        {/* List Project */}
        <div className="grid grid-cols-4 gap-4 mt-2">
          <CardProject />
          <AddProject />
        </div>
      </div>
    </div>
  );
}
