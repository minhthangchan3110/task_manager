import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/DayFlow.png";
import { CiSearch } from "react-icons/ci";
import { GiRingingBell } from "react-icons/gi";
import M02 from "../Modal/M02";
import Avatar from "./Avatar";
export default function Header() {
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
    <div className="flex justify-between items-center">
      {/* Logo */}
      <img src={logo} className="w-16 h-16 object-contain" alt="DayFlow" />

      {/* Các chức năng bên phải */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Tìm kiếm */}
        <div
          className={`flex items-center rounded-full border border-gray-100 bg-gray-100 transition-all duration-300 ${
            isSearchOpen ? "w-64 px-3" : "w-11"
          }`}
        >
          {isSearchOpen && (
            <input
              type="text"
              autoFocus
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Tìm kiếm dự án..."
              className="w-full bg-transparent text-sm outline-none"
            />
          )}

          <button
            type="button"
            aria-label="Tìm kiếm"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex shrink-0 items-center justify-center rounded-full p-3 hover:bg-gray-200 hover:cursor-pointer duration-300"
          >
            <CiSearch size={20} />
          </button>
        </div>

        {/* Thông báo */}
        <div className="relative" ref={notiRef}>
          <button
            type="button"
            aria-label="Thông báo"
            onClick={() => setIsOpenNoti(!isOpenNoti)}
            className="flex items-center justify-center rounded-full border border-gray-100 bg-gray-100 p-3 hover:bg-gray-200 hover:cursor-pointer duration-300"
          >
            <GiRingingBell size={20} className="text-yellow-500" />
          </button>
          {isOpenNoti && <M02 />}
        </div>

        {/* Avatar */}
        <Avatar initials="MT" h={45} w={45} f={12} color="#6c5ce7" />
      </div>
    </div>
  );
}
